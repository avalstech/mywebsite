import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({ region: process.env.AWS_REGION });

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN ?? "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
};

const json = (statusCode, payload) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    ...CORS_HEADERS,
  },
  body: JSON.stringify(payload),
});

export const handler = async (event) => {
  const method =
    event?.requestContext?.http?.method || event?.httpMethod || "POST";

  if (method === "OPTIONS") {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: "",
    };
  }

  try {
    const body = JSON.parse(event?.body ?? "{}");
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();
    const source = String(body.source ?? "website").trim();

    if (!name || !email || !message) {
      return json(400, {
        ok: false,
        error: "Missing required fields: name, email, message",
      });
    }

    if (!process.env.TO_EMAIL || !process.env.FROM_EMAIL) {
      return json(500, {
        ok: false,
        error: "Lambda missing TO_EMAIL or FROM_EMAIL environment variables",
      });
    }

    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      `Source: ${source}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

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
                Data: textBody,
              },
            },
          },
        },
      })
    );

    return json(200, {
      ok: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form send failed", error);
    return json(500, {
      ok: false,
      error: "Unable to send message right now",
    });
  }
};
