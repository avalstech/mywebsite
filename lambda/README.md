# Lambda contact form handler

Use `contactFormHandler.mjs` as your Lambda code to receive contact form submissions and forward them to your inbox through Amazon SES.

## Required environment variables

- `TO_EMAIL` (destination inbox)
- `FROM_EMAIL` (verified SES sender)
- `CORS_ORIGIN` (e.g. `https://victoranene.com`) - optional, defaults to `*`

## Required IAM permission

- `ses:SendEmail`

## Expected request body (JSON)

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "company": "Optional company",
  "message": "Visitor message",
  "source": "victoranene.com"
}
```
