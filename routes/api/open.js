const EdgeGrid = require("edgegrid");
const express = require("express");
const router = express.Router();

var data = "bodyData";

// Supply the path to your .edgerc file and name
// of the section with authorization to the client
// you are calling (default section is 'default')
var eg = new EdgeGrid({
  path: "./config/edgerc",
  section: "default",
  debug: true
});

router.all("/*", (req, res) => {
  eg.auth({
    path: req.baseUrl,
    method: req.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: req.body
  }).send(function(error, response, body) {
    //console.log(body);
    res.json(body);
  });
});

module.exports = router;
