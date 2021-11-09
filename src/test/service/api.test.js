require("dotenv").config();
const axios = require("../../axios-config");
const { get } = require("../../service/api");

jest.mock("../../axios-config", () => {
  return {
    baseURL: "http://35.207.169.147",
    request: jest.fn().mockResolvedValue({
      data: {
        event: "start",
        horse: {
          id: 23,
          name: "George"
        },
        time: 0
      }
    })
  };
});
describe("test get", () => {
  afterEach(() => jest.resetAllMocks());

  it("should get an event data", async () => {
    const data = await get();

    expect(axios.request).toHaveBeenCalled();
    expect(data).toBeTruthy();
    expect(data.event).toEqual("start");
    expect(data.horse.name).toEqual("George");
  });
});
