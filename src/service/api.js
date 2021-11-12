/* eslint-disable no-console */
const axios = require("../axios-config");
const { logError } = require("../utility/log-error");

// Method to call an external API and get data.
const get = async url => {
  try {
    const { data } = await axios.request({
      method: "get",
      url: url,
      headers: {
        Authorization: global.authToken,
        "Content-Type": "application/json"
      }
    });

    return data;
  } catch (error) {
    const {
      response: { status }
    } = error;

    logError(status, true);
    return error;
  }
};

module.exports = { get };
