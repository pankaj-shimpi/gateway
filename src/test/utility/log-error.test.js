/* eslint-disable no-console */
const { logError } = require("../../utility/log-error");

describe("Tests for log error", () => {
  const log = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = log;
  });

  it("should log an error if invalid credentials error", () => {
    logError(401, true);
    expect(console.error).toHaveBeenCalled();
    const loggedMessage = console.error.mock.calls[0][0];

    expect(loggedMessage).toBeInstanceOf(Error);
    expect(loggedMessage.name).toEqual("invalid credentials");
    expect(loggedMessage.statusCode).toEqual(401);
  });

  it("should log an error if unauthorized error", () => {
    logError(401, false);
    expect(console.error).toHaveBeenCalled();
    const loggedMessage = console.error.mock.calls[0][0];

    expect(loggedMessage).toBeInstanceOf(Error);
    expect(loggedMessage.name).toEqual("Unauthorized access");
    expect(loggedMessage.statusCode).toEqual(401);
  });

  it("should log an error if serverBusy error", () => {
    logError(503, false);
    expect(console.error).toHaveBeenCalled();
    const loggedMessage = console.error.mock.calls[0][0];

    expect(loggedMessage).toBeInstanceOf(Error);
    expect(loggedMessage.name).toEqual("Server busy");
    expect(loggedMessage.statusCode).toEqual(503);
  });

  it("should log an error if timeout error", () => {
    logError(204, false);
    expect(console.error).toHaveBeenCalled();
    const loggedMessage = console.error.mock.calls[0][0];

    expect(loggedMessage).toBeInstanceOf(Error);
    expect(loggedMessage.name).toEqual("Request timeout");
    expect(loggedMessage.statusCode).toEqual(204);
  });

  it("should log nothing if nothing passed", () => {
    logError();
  });
});
