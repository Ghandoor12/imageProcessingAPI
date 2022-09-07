import express, { Request, Response } from "express";
var isEqual = require("lodash.isequal");
const imageGetter = require("./src/utlities/imageGetter");
const imageResizer = require("./src/utlities/imageResizer");
const picNameChecker = require("./src/middleware/checker");

const port = 4000;
const app = express();
app.get("/", [picNameChecker], async (req: Request, res: Response) => {
  let height = parseInt(req.query.height as string);
  let width = parseInt(req.query.width as string);
  console.log(typeof req.query.filename);
  let { filename } = req.query;
  var checker = await imageGetter(filename, height, width);
  if (checker.length == undefined) {
    checker = false;
  }
  if (!height || !width) {
    return res.status(400).send("Invalid height or width");
  }

  if (height <= 0) return res.status(400).send("Invalid Height");
  if (width <= 0) return res.status(400).send("Invalid Width");

  if (checker) {
    let data = await imageGetter(filename, height, width);
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(data);
  } else {
    let check = await imageResizer(height, width, req.query.filename);
    if (check) {
      let data = await imageGetter(filename, height, width);

      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.end(data);
    }
  }
});

app.listen(port, () => {
  console.log("my app is running on port" + " " + port);
});

export default app;
