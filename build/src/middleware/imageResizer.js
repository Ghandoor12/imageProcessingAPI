"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var sharp = require("sharp");
module.exports = function (req, res, next) {
    var height = parseInt(req.query.height);
    var width = parseInt(req.query.width);
    sharp("../assets/".concat(req.query.filename, ".jpg"))
        .resize(height, width)
        .toFile("output.jpg", function (err) {
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
    });
    next();
};
