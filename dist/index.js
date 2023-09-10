const layout = {
    Kedmanee: {
        normal: "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ".split(""),
        shift: '%+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ'.split(""),
    },
    Pattachotee: {
        normal: "_=๒๓๔๕ู๗๘๙๐๑๖็ตยอร่ดมวแใฌ้ทงกัีานเไขบปลหิคสะจพ".split(""),
        shift: '฿+"/,?ุ_.()-%๊ฤๆญษึฝซถฒฯฦํ๋ธำณ์ืผชโฆฑฎฏฐภัศฮฟฉฬ'.split(""),
    },
    Manoonchai: {
        normal: "`1234567890-=ใตหลสปักิบ็ฬฯงเรนมอา่้วืุไทยจคีดะู".split(""),
        shift: '~!@#$%^&*()_+ฒฏซญฟฉึธฐฎฆฑฌษถแชพผำขโภ"ฤฝๆณ๊๋์ศฮ?'.split(""),
    },
    Qwerty: {
        normal: "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,.".split(""),
        shift: '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'.split(""),
    },
    Dvorak: {
        normal: "1234567890[]',.pyfgcrl/=\\aoeuidhtns-;qjkxbmwvz".split(""),
        shift: '!@#$%^&*(){}"<>PYFGCRL?+|AOEUIDHTNS_:QJKXBMWVZ'.split(""),
    },
    Colemak: {
        normal: "1234567890-=qwfpgjluy;[]\\arstdhneio'zxcvbkm,./".split(""),
        shift: '!@#$%^&*()_+QWFGPJLUY:{}|ARSTDHNEIO"ZXCVBKM<>?'.split(""),
    },
};

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
class WrongLang {
    constructor(_a = { defineKeyLength: 93 }) {
        var data = __rest(_a, []);
        this.layout = layout;
        if (data.customLayouts) {
            data.customLayouts.forEach((cLayout) => {
                if (cLayout.keys.normal.concat(cLayout.keys.shift).length !== data.defineKeyLength) {
                    console.warn(`[WL.js] The length of keys in ${cLayout.name} does not match the defined key length (${data.defineKeyLength} keys). This may end up in unexpected behaviour.`);
                }
                layout[cLayout.name] = cLayout.keys;
                this.layout = layout;
            });
        }
    }
    languageSwap(_a = { layout: { primary: "Kedmanee", secondary: "Qwerty" }, text: "" }) {
        var _b, _c, _d, _e;
        var data = __rest(_a, []);
        let layoutPrimary = (_b = data.layout) === null || _b === void 0 ? void 0 : _b.primary, layoutSecondary = (_c = data.layout) === null || _c === void 0 ? void 0 : _c.secondary;
        if (!layout[layoutPrimary] || !layout[layoutSecondary]) {
            throw new Error(`[WL.js] The layout "${(_d = data.layout) === null || _d === void 0 ? void 0 : _d.primary}" or "${(_e = data.layout) === null || _e === void 0 ? void 0 : _e.secondary}" does not exist.`);
        }
        return data.text
            .split("")
            .map((char) => {
            return (layout[layoutPrimary].shift.concat(layout[layoutPrimary].normal)[layout[layoutSecondary].shift
                .concat(layout[layoutSecondary].normal)
                .indexOf(char)] ||
                layout[layoutSecondary].shift.concat(layout[layoutSecondary].normal)[layout[layoutPrimary].shift
                    .concat(layout[layoutPrimary].normal)
                    .indexOf(char)] ||
                char);
        })
            .join("");
    }
    unshift(_a) {
        var data = __rest(_a, []);
        let selectedLayout = data.layout;
        if (!layout[selectedLayout]) {
            throw new Error(`[WL.js] The layout "${data.layout}" does not exist.`);
        }
        return data.text
            .split("")
            .map((char) => {
            return layout[selectedLayout].shift.concat(layout[selectedLayout].normal)[layout[selectedLayout].normal
                .concat(layout[selectedLayout].shift)
                .indexOf(char)] || char;
        })
            .map((char) => {
            return /[A-Z]/.test(char)
                ? char.toLowerCase()
                : char.toUpperCase();
        })
            .join("");
    }
}

export { WrongLang };
