// Create trips collection and models database mongoose to save trip data and export

const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  cityName: {
    type: String,
  },
  main: {
    type: String,
  },
  description: {
    type: String,
  },
  tempMin: {
    type: Number,
  },
  tempMax: {
    type: Number,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
