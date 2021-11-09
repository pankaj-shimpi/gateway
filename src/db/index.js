/* eslint-disable no-console */
const mongoose = require("mongoose");

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected");
  } catch (error) {
    console.error(`Error while connecting database, Error => ${error.message}`);
  }
};

const close = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected or connection closed");
  } catch (error) {
    console.error(`Error while disconnecting database, Error => ${error.message}`);
  }
};

module.exports = { connect, close };
