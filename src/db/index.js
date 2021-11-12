/* eslint-disable no-console */
const mongoose = require("mongoose");

const { DB_NAME } = process.env;
const connectionString = `mongodb://mongo:27017/${DB_NAME}`;

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
