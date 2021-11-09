const mongoose = require("mongoose");
const { Schema } = mongoose;

const Event = new Schema({
  event: String,
  horse: {
    id: Number,
    name: String
  },
  time: Number
});

module.exports = mongoose.model("Event", Event);
