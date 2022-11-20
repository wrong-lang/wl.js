<p align="center">
  <img src="https://raw.githubusercontent.com/wrong-lang/WrongLang-Solid/main/public/web.png" width="150">
  <h1 align="center">
    WrongLang.js (wl.js)
  </h1>
  <p align="center">
    Javascript library for swapping languages
  </p>
</p>

# Table of Contents

- [Language Swap](#language-swap)
- [Unshift](#unshift)
- [Custom Keyboard Layouts](#custom-keyboard-layouts)

# Language Swap

```js
import { WrongLang } from "wl.js";
const wrongLang = new WrongLang();
const output = wrongLang.swap({
  layout: {
    from: "Kedmanee",
    to: "Qwerty",
  },
});
```

# Unshift

```js
import { WrongLang } from "wl.js";
const wrongLang = new WrongLang();
const output = wrongLang.unshift({
  layout: "Kedmanee",
  text: "ศซํศโ๊๕ณํฐ
})
```
