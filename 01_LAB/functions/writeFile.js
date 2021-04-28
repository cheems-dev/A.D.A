import fs from "fs";

export default function (a, b, file) {
  const data = fs.readFileSync(file, "utf8") ? `\n${a} \n${b}` : `${a} \n${b}`;

  try {
    fs.appendFileSync(file, data);
  } catch (error) {
    console.log(error);
  }
}
