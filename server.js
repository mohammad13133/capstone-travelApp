// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var express = require("express");
var app = express();

// Start up an instance of app

/* Middleware*/
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}
app.get("/all", function (request, response) {
  response.send(projectData);
});
app.post("/add", function (request, response) {
  const { temperature, date, userResponse } = request.body;

  projectData.temperature = temperature;
  projectData.date = date;
  projectData.userResponse = userResponse;

  response.send(projectData);
  console.log("POST request received", projectData);
});
