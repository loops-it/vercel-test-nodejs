// Import packages
require("dotenv").config();
const express = require("express");
const viewEngine = require("/config/viewEngine.js");
const initWebRoute = require("/routes/web.js");
const bodyParser = require("body-parser");
const ejs = require('ejs');

// Middlewares
const app = express();
viewEngine(app);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoute(app);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
