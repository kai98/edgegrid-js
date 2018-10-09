const express = require("express");
const router = express.Router();

router.all("/*", (req, res) => {
  var eg = req.app.get("eg");
  eg.auth({
    path: req.originalUrl,
    method: req.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  }).send((error, response, body) => {
    //console.log(body);
    res.json(JSON.parse(body));
  });
});

module.exports = router;
