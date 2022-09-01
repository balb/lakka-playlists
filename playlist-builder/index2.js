const fs = require("fs");
const { JSDOM } = require("jsdom");

// Just messing around with jsdom

buildJson(
  "../dats/FinalBurn Neo (ClrMame Pro XML, Arcade only).dat",
  "../dats/FbNeo.json"
);

buildJson("../dats/mame2003-plus.xml", "../dats/mame2003-plus.json");

function buildJson(datPath, jsonPath) {
  const datXml = fs.readFileSync(datPath, "utf8");
  const games = new JSDOM(datXml).window.document.getElementsByTagName("game");
  const len = games.length;
  const obj = {};
  for (let i = 0; i < len; i++) {
    const key = games[i].getAttribute("name");
    const description =
      games[i].getElementsByTagName("description")[0].innerHTML;
    const cloneof = games[i].getAttribute("cloneof") ?? undefined;
    obj[key] = { dsc: description, cloneof };
  }

  fs.writeFileSync(jsonPath, JSON.stringify(obj, null, 2));
}
