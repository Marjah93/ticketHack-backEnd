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

/* GET /trips/search - search trips with params */

// trips/search

// TODO : implement search functionality with query parameters (e.g., departure, arrival)

module.exports = router;
