(function (exports) {
    'use strict';

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
                data.customLayouts.forEach((clayout) => {
                    if (clayout.keys.normal.concat(clayout.keys.shift).length !== data.defineKeyLength) {
                        console.warn(`[WL.js] The length of keys in ${clayout.name} does not match the defined key length (${data.defineKeyLength} keys). This may end up in unexpected behaviour.`);
                    }
                    layout[clayout.name] = clayout.keys;
                    this.layout = layout;
                });
            }
        }
        languageSwap(_a) {
            var data = __rest(_a, []);
            let layoutFrom = data.layout.from, layoutTo = data.layout.to;
            if (!layout[layoutFrom] || !layout[layoutTo]) {
                throw new Error(`[WL.js] The layout "${data.layout.from}" or "${data.layout.to}" does not exist.`);
            }
            return data.text
                .split("")
                .map((char) => {
                return (layout[layoutFrom].shift.concat(layout[layoutFrom].normal)[layout[layoutTo].shift
                    .concat(layout[layoutTo].normal)
                    .indexOf(char)] ||
                    layout[layoutTo].shift.concat(layout[layoutTo].normal)[layout[layoutFrom].shift
                        .concat(layout[layoutFrom].normal)
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

    exports.WrongLang = WrongLang;

    return exports;

})({});
