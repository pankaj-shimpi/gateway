require("dotenv").config();
const axios = require("../../axios-config");
const { auth } = require("../../service/auth");

jest.mock("../../axios-config", () => {
  return {
    baseURL: "http://35.207.169.147",
    request: jest.fn().mockResolvedValue({
      data: { token: "a2fd028ed6382f86a096ffd8247d31f5cbe1a6c49" }
    })
  };
});
describe("test auth", () => {
  afterEach(() => jest.resetAllMocks());

  it("should authenticate a user and return token", async () => {
    const token = await auth();

    expect(axios.request).toHaveBeenCalled();
    expect(axios.request).toHaveBeenCalledWith({
      method: "post",
      url: "auth",
      data: {
        email: process.env.AUTH_EMAIL,
        password: process.env.AUTH_PASSWORD
      }
    });
    expect(token).toBeTruthy();
    expect(token).toEqual("a2fd028ed6382f86a096ffd8247d31f5cbe1a6c49");
  });
});
