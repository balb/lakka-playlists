# lakka-playlists

Lakka / RetroArch game playlists for arcade games based on published console compilations.

Playlists use FBNeo original ROMS, falling back to working clones or mame2003-plus ROMS where required to make games work.

## How to use

These playlists are for Lakka. Depending on where your ROMs are stored you might need to update the "path"s.

For Windows users you will need to do some Find and Replace in Notepad++

- Replace all `"path": "/storage/roms/` with `"path": "C:\\ROMs\\` or wherever your ROMs are stored.
  You might need to change the `fbneo` and `mame2003plus` sub-folders depending on your setup.
- Replace all `"core_path": "/tmp/cores/fbneo_libretro.so"` with `"core_path": "C:\\RetroArch-Win64\\cores\\fbneo_libretro.dll"` \*
- Replace all `"core_path": "/tmp/cores/mame2003_plus_libretro.so"` with `"core_path": "C:\\RetroArch-Win64\\cores\\mame2003_plus_libretro.dll"` \*

\* Assuming your RetroArch is installed in `C:\RetroArch-Win64\`

Download and save the playlists to your Lakka / RetroArch `playlists` folder and restart.

## Playlists

- [Namco Museum](https://raw.githubusercontent.com/balb/lakka-playlists/main/playlists/A%20-%20Arcade%20-%20Namco%20Museum.lpl)
  Based on the 30 games in Namco Museum Vol. 1 to Encore - [Wikipedia](https://en.wikipedia.org/wiki/Namco_Museum)

- [Taito Legends](https://raw.githubusercontent.com/balb/lakka-playlists/main/playlists/A%20-%20Arcade%20-%20Taito%20Legends.lpl)
  from [Wikipedia](https://en.wikipedia.org/wiki/Taito_Legends)

- [Sega Astro City Mini](https://raw.githubusercontent.com/balb/lakka-playlists/main/playlists/A%20-%20Arcade%20-%20Sega%20Astro%20City%20Mini.lpl)
  from [Sega Fandom](https://sega.fandom.com/wiki/Astro_City_Mini)

- [Midway Arcade Treasures and Origins](https://raw.githubusercontent.com/balb/lakka-playlists/main/playlists/A%20-%20Arcade%20-%20Midway%20Arcade%20Treasures%20and%20Origins.lpl)
  combined from the similar [Treasures](https://en.wikipedia.org/wiki/Midway_Arcade_Treasures)
  and [Origins](https://en.wikipedia.org/wiki/Midway_Arcade_Origins) collections

- [Capcom Arcade Stadium](https://github.com/balb/lakka-playlists/blob/main/playlists/A%20-%20Arcade%20-%20Capcom%20Arcade%20Stadium.lpl)
  from [Wikipedia](https://en.wikipedia.org/wiki/Capcom_Arcade_Stadium)

- [Capcom Arcade 2nd Stadium](https://github.com/balb/lakka-playlists/blob/main/playlists/A%20-%20Arcade%20-%20Capcom%20Arcade%202nd%20Stadium.lpl)
  from [Wikipedia](https://en.wikipedia.org/wiki/Capcom_Arcade_Stadium#Capcom_Arcade_2nd_Stadium)

## Source DAT files

DAT files from:

- https://github.com/libretro/mame2003-plus-libretro/blob/master/metadata/mame2003-plus.xml
- https://github.com/libretro/FBNeo/blob/master/dats/FinalBurn%20Neo%20(ClrMame%20Pro%20XML%2C%20Arcade%20only).dat

Converted to CSVs using https://codepen.io/balb-the-sasster/pen/qBoJzwX
