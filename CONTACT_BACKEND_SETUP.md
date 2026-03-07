# Contact form delivery to your inbox (no third-party apps)

This project now expects a backend endpoint in:

- `VITE_CONTACT_FORM_ENDPOINT`

The frontend posts JSON directly to that endpoint from `src/pages/contact.tsx`.

## Recommended AWS setup (SES + API Gateway + Lambda)

> Prefer copy-paste? Use `lambda/contactFormHandler.mjs` in this repository as your ready-to-deploy Lambda handler.


1. **Verify sender/recipient in Amazon SES**
   - In SES, verify your domain/email (e.g., `anenevictor@1133incubators.com`).
   - If account is in SES sandbox, verify recipient too.

2. **Create Lambda (`contactFormHandler`)**
   - Runtime: Node.js 20+
   - Environment variables:
     - `TO_EMAIL=anenevictor@1133incubators.com`
     - `FROM_EMAIL=noreply@yourdomain.com`
   - IAM permissions: `ses:SendEmail`

3. **Lambda handler example**

```js
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({ region: process.env.AWS_REGION });

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "https://victoranene.com",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
  };

  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const { name, email, company, message, source } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.FROM_EMAIL,
        Destination: {
          ToAddresses: [process.env.TO_EMAIL],
        },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `Website inquiry from ${name}` },
            Body: {
              Text: {
                Data: [
                  `Name: ${name}`,
                  `Email: ${email}`,
                  company ? `Company: ${company}` : "",
                  `Source: ${source || "website"}`,
                  "",
                  message,
                ]
                  .filter(Boolean)
                  .join("\n"),
              },
            },
          },
        },
      })
    );

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Send failed" }) };
  }
};
```

4. **Expose Lambda through API Gateway (HTTP API)**
   - Route: `POST /contact`
   - Enable CORS for `https://victoranene.com` (and local dev origin).

5. **Set frontend environment variable**
   - In Amplify Hosting env vars (or `.env.production`):

```bash
VITE_CONTACT_FORM_ENDPOINT=https://<api-id>.execute-api.<region>.amazonaws.com/contact
```

6. **Deploy and test**
   - Submit the contact form from production.
   - Confirm inbox delivery.

---

## Notes

- This avoids `mailto:` and avoids any third-party form tool.
- You keep full ownership in AWS (API Gateway + Lambda + SES).
