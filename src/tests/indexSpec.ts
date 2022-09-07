import axios from "axios";
import sharp = require("sharp");
var fs = require("fs");
const imageGetter = require("../utlities/imageGetter");

describe("testing endpoint", () => {
  it("expect the endpoint to return status 200", async () => {
    let res = await getReq();
    expect(res).toBe(200);
  });
});

async function getReq() {
  var response = await axios.get(
    "http://localhost:4000/?filename=fjord&height=1200&width=300"
  );
  let res = response.status;
  return res;
}

describe("testing sharp", () => {
  it("expect image getter to get image", async () => {
    let pic = await imageGetter(800, 300, "encenadaport");
    let path = "./output/encenadaport-300-800.jpg";
    expect(fs.existsSync(path));
  });
});
