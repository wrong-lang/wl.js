import { WrongLang } from "../dist/index.js";
const wrongLang = new WrongLang();

let output = wrongLang.unshift({
  layout: "Kedmanee",
  text: "ศซํศโ๊๕ณํฐ(ุ็๙ฒ",
});

console.log(output); // "สวัสดีครับผู้ชม"

output = wrongLang.unshift({
  layout: "Qwerty",
  text: "hELLO EVERYNYAN. hOW ARE YOU? fINE, SANKYUU.",
  realShift: false, // Default: true
});

console.log(output); // "Hello everynyan. How are you? Fine, sankyuu."
