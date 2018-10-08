const express = require("express");
const bodyParser = require("body-parser");
const openapi = require("./routes/api/open");

const app = express();
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
app.use("/*", openapi);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
