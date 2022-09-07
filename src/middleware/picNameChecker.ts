module.exports = async function (
  req: any,
  res: any,
  next: Function
): Promise<void> {
  const { filename } = req.query;
  let picNames: string[] = [
    "encenadaport",
    "fjord",
    "icelandwaterfall",
    "palmtunnel",
    "santamonica",
  ];

  if (picNames.includes(`${filename}`)) {
    next();
  } else {
    res.status(400).send("invalid Picture name");
  }
};
