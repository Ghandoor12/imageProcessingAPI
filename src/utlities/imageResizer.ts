import sharp = require("sharp");
var fs = require("fs");
const express = require("express");

module.exports = async function (
  height: number,
  width: number,
  filename: string
): Promise<Boolean> {
  let pic = await sharp(`../assets/${filename}.jpg`)
    .resize(width, height)
    .toFile(`output/${filename}-${width}-${height}.jpg`);

  return true;
};
