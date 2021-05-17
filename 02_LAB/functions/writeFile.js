import fs from "fs";

export default function (file, json) {
  const data = fs.readFileSync(file, "utf8")
    ? `\n${JSON.stringify(json)},`
    : `[${JSON.stringify(json)},`;

  try {
    fs.appendFileSync(file, data);
  } catch (error) {
    console.log(error);
  }
}
