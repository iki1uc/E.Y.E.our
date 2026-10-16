// room.js - alle untergebracht
// bit, byte, kb, mb, gb, loop = low level sortiert
import { bit } from './bit.js';
import { byte } from './byte.js';
import { kb } from './kb.js';
import { mb } from './mb.js';
import { gb } from './gb.js';
import { loop } from './loop.js'; // 3→9→81→729→3

export const room = {
  low: { bit, byte, kb, mb, gb }, // sortiert bit→byte→KB→MB→GB
  cycle: loop({ win32:3, win64:9, mainwin:81, max:729, raound:3 }),
  seed: "⟁"
};

// room hat alle - wie du sagst: habe alle untergebracht
