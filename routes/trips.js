var express = require("express");
var router = express.Router();

const Trip = require("../models/trip");

/* GET /trips - get all trips */
router.get("/", (req, res) => {
  Trip.find()
    .then((allTrips) => {
      res.json({
        success: true,
        data: allTrips,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Erreur lors de la récupération des trajets",
        error: error.message,
      });
    });
});

// GET - Retrieve trips by departure and arrival city
router.get("/search", (req, res) => {
  const { departure, arrival } = req.query;

  Trip.find({
    departure: { $regex: new RegExp(`^${departure}$`, "i") },
    arrival: { $regex: new RegExp(`^${arrival}$`, "i") },
  }).then((trips) => {
    if (trips.length > 0) {
      res.json({ success: true, data: trips });
    } else {
      res.json({ success: false, error: "No trips found" });
    }
  });
});

module.exports = router;
