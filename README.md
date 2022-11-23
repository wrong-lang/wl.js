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

- [Key Swap](#key-swap)
- [Unshift](#unshift)
- [Custom Keyboard Layouts](#custom-keyboard-layouts)

# Key Swap

```js
import { WrongLang } from "wl.js";
const wrongLang = new WrongLang();
const output = wrongLang.keySwap({
  layout: {
    from: "Kedmanee",
    to: "Qwerty",
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

const output = wrongLang.keySwap({
  layout: {
    from: "MyLayout",
    to: "Kedmanee",
  },
  text: "l;ylfu8iy["
});

console.log(output); // "สวัสดีครับ"
```