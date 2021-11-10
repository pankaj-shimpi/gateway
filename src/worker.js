/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
const { get } = require("./service/api");
const { auth } = require("./service/auth");
const { Event } = require("./model");
const { config } = require("./utility/config");
const { httpStatusCode } = config;

const reAuth = async () => {
  await auth();
  await worker();
};

const worker = async () => {
  try {
    if (global.authToken) {
      const result = await get("results");

      if (!result) {
        await worker();
      } else if (result.response && result.response.status === httpStatusCode.unauthorized) {
        console.log("Re-authenticate");
        reAuth();
      } else {
        const document = new Event(result);
        const dbResponse = await document.save();

        console.log(`document created with id => ${dbResponse._doc._id.toString()}`);
        await worker();
      }
    } else {
      reAuth();
    }
  } catch (error) {
    console.log("Error");
    const {
      response: { status }
    } = error;

    if (status === httpStatusCode.unauthorized || status === httpStatusCode.serverBusy) {
      reAuth();
    } else {
      await worker();
    }
  }
};

module.exports = { worker, reAuth };
