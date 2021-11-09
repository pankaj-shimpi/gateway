/* eslint-disable no-console */
const { UnauthorizedError, TimeoutError, ServerBusyError } = require("./Error");
const { config } = require("./config");
const { httpStatusCode } = config;

const logError = (errorCode, isAuth = false) => {
  const { serverBusy, timeout, unauthorized } = httpStatusCode;

  switch (errorCode) {
    case serverBusy:
      console.error(new ServerBusyError("Server busy", serverBusy));
      break;
    case timeout:
      console.error(new TimeoutError("Request timeout", timeout));
      break;
    case unauthorized:
      if (isAuth) {
        console.error(new UnauthorizedError("invalid credentials", unauthorized));
      } else {
        console.error(new UnauthorizedError("Unauthorized access", unauthorized));
      }
      break;
    default:
      break;
  }
};

module.exports = { logError };
