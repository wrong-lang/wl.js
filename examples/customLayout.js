import { WrongLang } from "../dist/index.js";
const wrongLang = new WrongLang();

wrongLang.addCustomLayout({
  customLayout: {
    name: "Morse",
    keys: {
      normal:
        ".- |-... |-.-. |-.. |. |..-. |--. |.... |.. |.--- |-.- |.-.. |-- |-. |--- |.--. |--.- |.-. |... |- |..- |...- |.-- |-..- |-.-- |--.. |/ ".split(
          "|",
        ),
      shift:
        ".- |-... |-.-. |-.. |. |..-. |--. |.... |.. |.--- |-.- |.-.. |-- |-. |--- |.--. |--.- |.-. |... |- |.-- |...- |.-- |-..- |-.-- |--.. |/ ".split(
          "|",
        ),
    },
  },
  defineKeyLength: 54,
});

wrongLang.addCustomLayout({
  customLayout: {
    name: "Alphabet",
    keys: {
      normal: "abcdefghijklmnopqrstuvwxyz ".split(""),
      shift: "abcdefghijklmnopqrstuvwxyz ".toUpperCase().split(""),
    },
  },
  defineKeyLength: 54,
});

const output = wrongLang.languageSwap({
  layout: {
    primary: "Alphabet",
    secondary: "Morse",
  },
  text: "Hello World",
});

console.log(output); // ".... . -.-- -.-- --- / .-- --- .-. -.-- -.."
