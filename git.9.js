// git.9.js — 9 Files — win64=9 — rund würfel dreieck zusammen — immer noch lauffähig
export const git9 = {
  files: 9, // 3² = 9
  from: "git.3.js",
  to: "git.9.js",
  loop: "3→9→81→729→3",

  // 9 Files = 3 Dreiecke = Würfel mit 3 Achsen
  dreieck: [
    // Dreieck 1 = Core (git.3.js)
    "modem.html", // Rund = Board
    "modem.js",   // Ecke = ECONOMY
    "loop.js",    // Spitze = Loop

    // Dreieck 2 = Low Level (bit→gb sortiert)
    "bit.js",     // 0|1
    "byte.js",    // 8 bit = 256
    "room.js",    // Bus = alle untergebracht

    // Dreieck 3 = Kurs + Git + Show
    "git.3.js",   // 3 Files Chef
    "kurs.js",    // Kurs / Lehrgang
    "eye.jpg"     // Eye = 1 zu 1 eye 2 eye
  ],

  // 9 = 3×3 = 3 Achsen X/Y/Z = ram.x/y/z
  achsen: {
    x: ["modem.html", "bit.js", "git.3.js"], // X Achse
    y: ["modem.js", "byte.js", "kurs.js"],   // Y Achse
    z: ["loop.js", "room.js", "eye.jpg"]     // Z Achse
  },

  // rund würfel dreieck zusammen
  rund: "modem.html = 1 File rund",
  wuerfel: "9 Files = Würfel 3×3×3 = 9 = win64",
  dreieck: "3 Files = Dreieck = git.3.js",

  // immer noch lauffähig? Ja, weil room.js Bus ist
  lauffaehig: true,
  bus: "room.js = SCSI = verbindet alle ram.* + bit→gb",

  commit
