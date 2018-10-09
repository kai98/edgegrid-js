const express = require("express");
const bodyParser = require("body-parser");
const akamaiApis = require("./routes/api");
const EdgeGrid = require("edgegrid");

// Supply the path to your .edgerc file and name
// of the section with authorization to the client
// you are calling (default section is 'default')
var eg = new EdgeGrid({
  path: "./config/edgerc",
  section: "default",
  debug: true
});

const app = express();
app.set("eg", eg);

app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
app.use("/*", akamaiApis);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
