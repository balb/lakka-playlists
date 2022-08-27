const csv = require("csv-parser");
const fs = require("fs");

loadCsvs((data) => {
  console.log("arcadePlaylists", data.arcadePlaylists.length);
  console.log("fbNeo", data.fbNeo.length);
  console.log("mame", data.mame.length);

  const playlistNames = [
    ...new Set(data.arcadePlaylists.map((x) => x.Playlist)),
  ];

  playlistNames.forEach((playlistName) => {
    const playlist = data.arcadePlaylists.filter(
      (x) => x.Playlist === playlistName
    );

    if (!playlist.some((x) => !x.ROM)) {
      console.log("*** " + playlistName + " ***");
      console.log(playlist.map((x) => x.ROM));
    }
  });
});

function loadCsvs(callback) {
  loadCsv("../ArcadePlaylists.csv", (records) => {
    const arcadePlaylists = records;
    loadCsv("../FBNeo.csv", (records) => {
      const fbNeo = records;
      loadCsv("../mame2003-plus.csv", (records) => {
        const mame = records;
        callback({ arcadePlaylists, fbNeo, mame });
      });
    });
  });
}

function loadCsv(path, callback) {
  const records = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on("data", (data) => records.push(data))
    .on("end", () => {
      callback(records);
    });
}
