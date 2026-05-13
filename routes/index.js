var express = require("express");
var router = express.Router();

/* GET home page - Route principale */
router.get("/", function (req, res, next) {
  res.render("index", { title: "TicketHack - Homepage" });
});

module.exports = router;
