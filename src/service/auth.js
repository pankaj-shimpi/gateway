const axios = require("../axios-config");
const { logError } = require("../utility/log-error");

// Method to authenticate a user.
const auth = async () => {
  global.authToken = null;
  try {
    const {
      data: { token }
    } = await axios.request({
      method: "post",
      url: "auth",
      data: {
        email: process.env.AUTH_EMAIL,
        password: process.env.AUTH_PASSWORD
      }
    });

    global.authToken = token;
    return token;
  } catch (error) {
    const {
      response: { status }
    } = error;

    logError(status, true);
    return error;
  }
};

module.exports = { auth };
