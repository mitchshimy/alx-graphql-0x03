import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://<your-public-key>@o<org-id>.ingest.sentry.io/<project-id>",
  tracesSampleRate: 1.0, // Adjust for production
});
