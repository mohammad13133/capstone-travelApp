// Setup empty JS object to act as endpoint for all routes
let tripsData = [];
let id = 0;
// Require Express to run server and routes
var express = require("express");
var app = express();

/* Middleware*/
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
}

app.get("/", function (request, response) {
  response.sendFile("dist/index.html");
});
app.delete("/delete/:id", function (request, response) {
  const tripId = parseInt(request.params.id, 10);
  const index = tripsData.findIndex((trip) => trip.id === tripId);

  if (index !== -1) {
    tripsData.splice(index, 1);
    response.send({ message: "Trip deleted" });
    console.log("DELETE request received, trip deleted:", tripId);
  } else {
    response.status(404).send({ message: "Trip not found" });
  }
});

app.get("/all", function (request, response) {
  response.send(tripsData);
});

app.post("/add", function (request, response) {
  id++;
  const trip = {
    id,
    city: request.body.city,
    country: request.body.country,
    latitude: request.body.latitude,
    longitude: request.body.longitude,
    date: request.body.date,
  };

  // Add the new trip to the tripsData array
  tripsData.push(trip);

  // Respond with the updated trips array
  response.send(trip);
  console.log("POST request received, trip saved:", trip);
});
