# lakka-playlists

Lakka / RetroArch game playlists for arcade games based on published console compilations.

Playlists use FBNeo original ROMS, falling back to working clones or mame2003-plus ROMS where required to make games work.

## How to use

[Download playlists here](https://github.com/balb/lakka-playlists/raw/main/playlists.zip) and unzip.
Copy the playlists to your Lakka / RetroArch `playlists` folder and restart.

These playlists are for Lakka. Depending on where your ROMs are stored you might need to update the "path"s.

For Windows users you will need to do some Find and Replace in a text editor or command line:

- Replace all `"path": "/storage/roms/fbneo/` and `"path": "/storage/roms/mame2003plus/`
  with `"path": "C:\\ROMs\\fbneo\\` and `"path": "C:\\ROMs\\mame2003plus\\` or wherever your ROMs are stored.
- Replace all `"core_path": "/tmp/cores/fbneo_libretro.so"` with `"core_path": "C:\\RetroArch-Win64\\cores\\fbneo_libretro.dll"` \*
- Replace all `"core_path": "/tmp/cores/mame2003_plus_libretro.so"` with `"core_path": "C:\\RetroArch-Win64\\cores\\mame2003_plus_libretro.dll"` \*

\* Assuming your RetroArch is installed in `C:\RetroArch-Win64\`

## Playlists

| Title                               | Source                                                             | Comments                                               |
| ----------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| Namco Museum                        | [Wikipedia](https://en.wikipedia.org/wiki/Namco_Museum)            | Based on the 30 games in Namco Museum Vol. 1 to Encore |
| Taito Legends                       | [Wikipedia](https://en.wikipedia.org/wiki/Taito_Legends)           |                                                        |
| Sega Astro City Mini                | [sega.jp](https://sega.jp/astrocitymini/original/titlelist.html)   |                                                        |
| Sega Astro City Mini V              | [sega.jp](https://sega.jp/astrocitymini/v/titlelist.html)          |                                                        |
| Midway Arcade Treasures and Origins | [Wikipedia Treasures](https://en.wikipedia.org/wiki/Midway_Arcade_Treasures) and [Wikipedia Origins](https://en.wikipedia.org/wiki/Midway_Arcade_Origins) | Based on the similar Treasures and Origins collections |
| Capcom Arcade Stadium               | [Wikipedia](https://en.wikipedia.org/wiki/Capcom_Arcade_Stadium)   |                                                        |
| Capcom Arcade 2nd Stadium           | [Wikipedia](https://en.wikipedia.org/wiki/Capcom_Arcade_Stadium#Capcom_Arcade_2nd_Stadium)||
| Konami Arcade Classics Anniversary Collection | [Konami](https://www.konami.com/games/50th/ac/arcade/eu/en/) |                                                    |
| SNK Arcade Classics 0               | [Wikipedia](https://en.wikipedia.org/wiki/SNK_Arcade_Classics_Vol._1) ||
| SNK Arcade Classics Vol. 1          | [Wikipedia](https://en.wikipedia.org/wiki/SNK_Arcade_Classics_Vol._1) ||

<!--
https://www.mobygames.com/game-group/classic-compilation-games
-->

## Source DAT files

DAT files from:

- https://github.com/libretro/mame2003-plus-libretro/blob/master/metadata/mame2003-plus.xml
- https://github.com/libretro/FBNeo/blob/master/dats/FinalBurn%20Neo%20(ClrMame%20Pro%20XML%2C%20Arcade%20only).dat

Converted to CSVs using https://codepen.io/balb-the-sasster/pen/qBoJzwX
