// Insert your connection string inside this variable

// Connection to BDD

// models/connection.js

const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:FCsRKZ8ZdEq0e2IL@clustertest.tpsu2q7.mongodb.net/trips";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));

module.exports = connectionString; // Do not edit/remove this line
