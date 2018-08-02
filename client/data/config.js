import Raven from "raven-js";

const sentry_key = "f51216d6d81b418fa25f481e91c623d5";
const sentry_app = "1255048";

export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
