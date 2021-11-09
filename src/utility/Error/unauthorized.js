const BaseError = require("./base-error");
const { config } = require("../../utility/config");
const { httpStatusCode } = config;

class UnauthorizedError extends BaseError {
  constructor(name, statusCode = httpStatusCode.unauthorized, description = "Unauthorized") {
    super(name, statusCode, description);
  }
}

module.exports = UnauthorizedError;
