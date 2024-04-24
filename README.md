<p align="center">
  <img src="https://raw.githubusercontent.com/wrong-lang/WrongLang-Solid/main/public/web.png" width="150">
  <h1 align="center">
    WrongLang.js (wl.js) 2
  </h1>
  <p align="center">
    Javascript library for swapping languages when you forgor 💀
    ...and faster than ever!
  </p>
</p>

# Table of Contents

- [Installiation](#installation)
- [Key Swap](#key-swap)
- [Unshift](#unshift)
- [Custom Keyboard Layouts](#custom-keyboard-layouts)

# Installation

With node package manager:

```bash
npm i wl.js@latest # or your preferred package manager
```

With a script tag:

```html
<script src="https://unpkg.com/wl.js"></script>
```

With pain (self-hosting):

1. Download the source code from [wrong-lang/wl.js](https://github.com/wrong-lang/wl.js)
2. Copy the `dist/index.min.js` file to your project
3. Add this script tag to your html file

```html
<script src="index.min.js"></script>
```

4. Have fun!

# Language Swap

```js
// File: ./examples/languageSwap.js
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
```

# Unshift

```js
// File: ./examples/unshift.js
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
```

# Custom Layouts

```js
// File: ./examples/customLayout.js
import { WrongLang } from "wl.js";
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
```
