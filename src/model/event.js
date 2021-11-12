const mongoose = require("mongoose");
const { Schema } = mongoose;

// Events schema
const Event = new Schema({
  event: String,
  horse: {
    id: Number,
    name: String
  },
  time: Number
});

module.exports = mongoose.model("Event", Event);
