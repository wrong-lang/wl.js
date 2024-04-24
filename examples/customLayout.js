import { WrongLang } from "../dist/index.js";
const wrongLang = new WrongLang();

wrongLang.addCustomLayout(
  {
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
  54,
);

wrongLang.addCustomLayout(
  {
    name: "Alphabet",
    keys: {
      normal: "abcdefghijklmnopqrstuvwxyz ".split(""),
      shift: "abcdefghijklmnopqrstuvwxyz ".toUpperCase().split(""),
    },
  },
  54,
);

const output = wrongLang.languageSwap({
  layout: {
    primary: "Alphabet",
    secondary: "Morse",
  },
  text: "Hello World",
});

console.log(output); // ".... . -.-- -.-- --- / .-- --- .-. -.-- -.."
