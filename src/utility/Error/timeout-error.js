const BaseError = require("./base-error");
const { config } = require("../../utility/config");
const { httpStatusCode } = config;

class TimeoutError extends BaseError {
  constructor(name, statusCode = httpStatusCode.timeout, description = "Request timeout") {
    super(name, statusCode, description);
  }
}

module.exports = TimeoutError;
