/* eslint-disable no-console */
const mongoose = require("mongoose");

const { DB_NAME } = process.env;
const connectionString = `mongodb://mongo:27017/${DB_NAME}`;

// Method to connect mongodb with node app.
const connect = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected");
  } catch (error) {
    console.error(`Error while connecting database, Error => ${error.message}`);
  }
};


// Method to close a connection
const close = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected or connection closed");
  } catch (error) {
    console.error(`Error while disconnecting database, Error => ${error.message}`);
  }
};

module.exports = { connect, close };
