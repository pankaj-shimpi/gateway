require("dotenv").config();
const express = require("express");
const { connect } = require("./db");
const { worker } = require("./worker");
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, async () => {
  await connect();
  worker();
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
