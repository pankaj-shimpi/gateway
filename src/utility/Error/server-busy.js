const BaseError = require("./base-error");
const { config } = require("../../utility/config");
const { httpStatusCode } = config;

class ServerBusyError extends BaseError {
  constructor(name, statusCode = httpStatusCode.serverBusy, description = "Server is busy") {
    super(name, statusCode, description);
  }
}

module.exports = ServerBusyError;
