const { promises: fs } = require("fs");

async function writeText(text) {
  try {
    await fs.writeFile("jsonFlux.json", text);
    return true;
  } catch (e) {
    console.log("Error while writing the file", e);
    return false;
  }
}

module.exports = { writeText };
