import { WrongLang } from "../dist/index.js";
import { convert } from "gode.js";

const wrongLang = new WrongLang();
let godeT = 0;
let wlT = 0;

for (let i = 0; i < 100; i++) {
  let wlStart = performance.now();
  wrongLang.languageSwap({
    layout: {
      primary: "Kedmanee", // Default: Kedmanee
      secondary: "Qwerty", // Default: Qwerty
    },
    text: "l;ylfu8iy[".repeat(10000),
  });
  let wlEnd = performance.now();

  wlT = wlT + (wlEnd - wlStart);

  let godeStart = performance.now();
  convert("QWERTY", "Kedmanee", "l;ylfu8iy[".repeat(10000));
  let godeEnd = performance.now();

  godeT = godeT + (godeEnd - godeStart);
}

godeT = (godeT / 100).toFixed(2);
wlT = (wlT / 100).toFixed(2);

console.log("\n[G;ode.js] Average time: ", godeT + " ms");
console.log("[WL.js]    Average time: ", wlT + " ms");

let fasterPercent = (((godeT - wlT) / wlT) * 100).toFixed(2);

console.log(
  `\n==========[ WL.js is ${(godeT / wlT).toFixed(1)} times (${fasterPercent}%) faster than G;ode.js ]==========\n`,
);
