require("dotenv").config();
const express = require("express");
const { connect } = require("./db");
const { worker } = require("./worker");
const app = express();

app.listen(3000, async () => {
  try {
    await connect();
    worker();
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://127.0.0.1:3000`);
  } catch (error) {
    console.error("Weeor while connectint to db or starting the app", error.message);
  }
  
});
