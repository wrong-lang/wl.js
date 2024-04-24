import { WrongLang } from "../dist/index.js";
import { convert } from "gode.js";

const wrongLang = new WrongLang();

// ========= A Million Hello =========
let wlStart = Date.now();
wrongLang.languageSwap({
  layout: {
    primary: "Kedmanee", // Default: Kedmanee
    secondary: "Qwerty", // Default: Qwerty
  },
  text: "l;ylfu8iy[".repeat(1000000)
});
let wlEnd = Date.now();

console.log(`[WL.js] A Million Hello: ${(wlEnd - wlStart) / 1000}s`);

let godeStart = Date.now();
convert("QWERTY", "Kedmanee", "l;ylfu8iy[".repeat(1000000));
let godeEnd = Date.now();

console.log(`[G;ode.js] A Million Hello: ${(godeEnd - godeStart) / 1000}s`);
// ===================================