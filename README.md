<p align="center">
  <img src="https://raw.githubusercontent.com/wrong-lang/WrongLang-Solid/main/public/web.png" width="150">
  <h1 align="center">
    WrongLang.js (wl.js)
  </h1>
  <p align="center">
    Javascript library for swapping languages when you forgor 💀
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
import { WrongLang } from "wl.js";
const wrongLang = new WrongLang();
const output = wrongLang.languageSwap({
  layout: {
    primary: "Kedmanee", // Default: Kedmanee
    secondary: "Qwerty", // Default: Qwerty
  },
  text: "l;ylfu8iy["
});

console.log(output); // "สวัสดีครับ"
```

# Unshift

```js
import { WrongLang } from "wl.js";
const wrongLang = new WrongLang();
const output = wrongLang.unshift({
  layout: "Kedmanee",
  text: "ศซํศโ๊๕ณํฐ",
})

console.log(output); // "สวัสดีครับ"
```

# Custom Layouts

```js
import { WrongLang } from "wl.js";
const wrongLang = new WrongLang({
  customLayouts: [
    {
      name: "MyLayout",
      keys: {
        normal: "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./".split(""),
        shift: "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?".split("")
      }
    }
  ],
  defineKeyLength: 93 // (Default)
});

const output = wrongLang.languageSwap({
  layout: {
    from: "MyLayout",
    to: "Kedmanee",
  },
  text: "l;ylfu8iy["
});

console.log(output); // "สวัสดีครับ"
```