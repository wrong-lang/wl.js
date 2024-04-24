import { WrongLang } from "../dist/index.js";
const wrongLang = new WrongLang();

const output = wrongLang.languageSwap({
  layout: {
    primary: "Kedmanee", // Default: Kedmanee
    secondary: "Qwerty", // Default: Qwerty
  },
  text: "l;ylfu8iy[",
});

console.log(output); // "สวัสดีครับ"
