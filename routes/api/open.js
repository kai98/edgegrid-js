const EdgeGrid = require("edgegrid");
const express = require("express");
const router = express.Router();

var data = "bodyData";

// Supply the path to your .edgerc file and name
// of the section with authorization to the client
// you are calling (default section is 'default')
var eg = new EdgeGrid({
  path: "./config/edgerc",
  section: "default"
});

router.all("/*", (req, res) => {
  console.log(eg);
  eg.auth({
    path: req.url,
    method: req.method,
    headers: {},
    body: req.body
  }).then(
    eg.send((error, response, body) => {
      console.log(body);
    })
  );
  res.json({ msg: "routing works" });
});

module.exports = router;
