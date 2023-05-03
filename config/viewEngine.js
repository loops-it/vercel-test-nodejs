const express = require("express");

/*
Config view engine for node app
 */

let configViewEngine = (app) => {
    app.use(express.static("../public"));
    app.set("views","../views");
};

module.exports = configViewEngine;