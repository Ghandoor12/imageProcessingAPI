var fs = require("fs").promises;

module.exports = async function (
  filename: string,
  height: string,
  width: string
): Promise<object> {
  try {
    const data = await fs.readFile(
      `./output/${filename}-${width}-${height}.jpg`
    );

    return data;
  } catch (error) {
    return {};
  }
};
