const axios = require("axios");
const { config } = require("./utility/config");

const axiosInstance = axios.default.create({
  baseURL: config.baseURL
});

module.exports = axiosInstance;
