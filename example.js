var EdgeGrid = require("edgegrid");

var data = "bodyData";

// Supply the path to your .edgerc file and name
// of the section with authorization to the client
// you are calling (default section is 'default')
var eg = new EdgeGrid({
  path: "./config/edgerc",
  section: "default"
});

eg.auth({
  path: "/diagnostic-tools/v2/ghost-locations/available",
  method: "GET",
  headers: {},
  body: data
});

eg.send(function(error, response, body) {
  console.log(body);
});
