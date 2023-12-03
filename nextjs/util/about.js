import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "public", "data");

export function getAboutJSONData() {
  const filePath = path.join(dataDirectory, "about-me.json");
  const aboutData = fs.readFileSync(filePath, "utf8");
  const aboutJSON = JSON.parse(aboutData);

  return aboutJSON;
}
