const csv = require("csv-parser");
const fs = require("fs");

loadCsvs((data) => {
  const playlistNames = [
    ...new Set(data.arcadePlaylists.map((x) => x.Playlist)),
  ];

  playlistNames.forEach((name) => {
    const playlist = data.arcadePlaylists.filter((x) => x.Playlist === name);
    if (!playlist.some((x) => !x.ROM)) {
      buildPlaylistFile(name, playlist, { FBNeo: data.fbNeo, MAME: data.mame });
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

function buildPlaylistFile(name, playlist, dats) {
  const pl = {
    version: "1.5",
    default_core_path: "",
    default_core_name: "",
    label_display_mode: 0,
    right_thumbnail_mode: 0,
    left_thumbnail_mode: 0,
    sort_mode: 0,
    items: [],
  };

  playlist.forEach((item) => {
    const datEntry = dats[item.Emulator].find((x) => x.name === item.ROM);
    if (item.Emulator === "FBNeo") {
      pl.items.push(getFBNeoEntry(datEntry.name, datEntry.description));
    } else if (item.Emulator === "MAME") {
      pl.items.push(getMameEntry(datEntry.name, datEntry.description));
    }
  });

  fs.writeFile(
    `../playlists/A - Arcade - ${name}.lpl`,
    JSON.stringify(pl, null, 2) + "\n",
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
}

function getFBNeoEntry(name, label) {
  return {
    path: `/storage/roms/fbneo/${name}.zip`,
    label: label,
    core_path: "/tmp/cores/fbneo_libretro.so",
    core_name: "Arcade (FinalBurn Neo)",
    crc32: "00000000|crc",
    db_name: "FBNeo - Arcade Games.lpl",
  };
}

function getMameEntry(name, label) {
  return {
    path: `/storage/roms/mame2003plus/${name}.zip`,
    label: label,
    core_path: "/tmp/cores/mame2003_plus_libretro.so",
    core_name: "Arcade (MAME 2003-Plus)",
    crc32: "00000000|crc",
    db_name: "MAME 2003-Plus.lpl",
  };
}
