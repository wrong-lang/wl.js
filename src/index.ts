const layout = {
  Kedmanee: {
    normal: "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ".split(""),
    shift: '%+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ'.split(""),
  },
  Pattachote: {
    normal: "_=๒๓๔๕ู๗๘๙๐๑๖็ตยอร่ดมวแใฌ้ทงกัีานเไขบปลหิคสะจพ".split(""),
    shift: '฿+"/,?ุ_.()-%๊ฤๆญษึฝซถฒฯฦํ๋ธำณ์ืผชโฆฑฎฏฐภัศฮฟฉฬ'.split(""),
  },
  Manoonchai: {
    normal: "`1234567890-=ใตหลสปักิบ็ฬฯงเรนมอา่้วืุไทยจคีดะู".split(""),
    shift: '~!@#$%^&*()_+ฒฏซญฟฉึธฐฎฆฑฌษถแชพผำขโภ"ฤฝๆณ๊๋์ศฮ?'.split(""),
  },
  Qwerty: {
    normal: "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./".split(""),
    shift: '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'.split(""),
  },
  Dvorak: {
    normal: "`1234567890[]',.pyfgcrl/=\\aoeuidhtns-;qjkxbmwvz".split(""),
    shift: '~!@#$%^&*(){}"<>PYFGCRL?+|AOEUIDHTNS_:QJKXBMWVZ'.split(""),
  },
  Colemak: {
    normal: "`1234567890-=qwfpgjluy;[]\\arstdhneio'zxcvbkm,./".split(""),
    shift: '~!@#$%^&*()_+QWFGPJLUY:{}|ARSTDHNEIO"ZXCVBKM<>?'.split(""),
  },
};

interface CustomLayout {
  name: string;
  keys: { normal: string[]; shift: string[] };
}

export class WrongLang {
  public layout: Record<string, { normal: string[]; shift: string[] }>;

  constructor({
    customLayouts = [],
    defineKeyLength = 94,
  }: { customLayouts?: CustomLayout[]; defineKeyLength?: number } = {}) {
    this.layout = { ...layout };
    customLayouts.forEach((customLayout) => {
      if (
        customLayout.keys.normal.concat(customLayout.keys.shift).length !==
        defineKeyLength
      ) {
        console.warn(
          `[WL.js] The length of keys in ${customLayout.name} does not match the defined key length (${defineKeyLength} keys). This may result in unexpected behavior.`,
        );
      }
      this.layout[customLayout.name] = customLayout.keys;
    });
  }

  languageSwap({
    layout: { primary = "Kedmanee", secondary = "Qwerty" } = {},
    text = "",
  } = {}): string {
    const layoutPrimary = this.layout[primary];
    const layoutSecondary = this.layout[secondary];

    if (!layoutPrimary || !layoutSecondary) {
      throw new Error(
        `[WL.js] The layout "${primary}" or "${secondary}" does not exist.`,
      );
    }

    const primaryNormal = layoutPrimary.normal;
    const primaryShift = layoutPrimary.shift;
    const secondaryNormal = layoutSecondary.normal;
    const secondaryShift = layoutSecondary.shift;

    const primaryNormalCodes = primaryNormal.map((char) => char.charCodeAt(0));
    const primaryShiftCodes = primaryShift.map((char) => char.charCodeAt(0));
    const secondaryNormalCodes = secondaryNormal.map((char) =>
      char.charCodeAt(0),
    );
    const secondaryShiftCodes = secondaryShift.map((char) =>
      char.charCodeAt(0),
    );

    return text
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        let index;

        if ((index = primaryNormalCodes.indexOf(charCode)) !== -1) {
          return secondaryNormal[index] || char;
        } else if ((index = primaryShiftCodes.indexOf(charCode)) !== -1) {
          return secondaryShift[index] || char;
        }

        if ((index = secondaryNormalCodes.indexOf(charCode)) !== -1) {
          return primaryNormal[index] || char;
        } else if ((index = secondaryShiftCodes.indexOf(charCode)) !== -1) {
          return primaryShift[index] || char;
        }

        return char;
      })
      .join("");
  }

  unshift({
    layout: selectedLayout = "Qwerty",
    text = "",
    realShift = true,
  } = {}): string {
    const layoutSelected = this.layout[selectedLayout];

    if (!realShift) {
      return text
        .split("")
        .map((char) =>
          /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase(),
        )
        .join("");
    }

    if (!layoutSelected) {
      throw new Error(`[WL.js] The layout "${selectedLayout}" does not exist.`);
    }

    const normalKeys = layoutSelected.normal;
    const shiftKeys = layoutSelected.shift;

    const normalCodes = normalKeys.map((char) => char.charCodeAt(0));
    const shiftCodes = shiftKeys.map((char) => char.charCodeAt(0));

    return text
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        let index;

        if ((index = shiftCodes.indexOf(charCode)) !== -1) {
          return normalKeys[index] || char;
        }

        if ((index = normalCodes.indexOf(charCode)) !== -1) {
          return shiftKeys[index] || char;
        }

        return char;
      })
      .map((char) =>
        /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase(),
      )
      .join("");
  }

  addCustomLayout({
    customLayout,
    defineKeyLength = 94,
  }: {
    customLayout: CustomLayout;
    defineKeyLength: number;
  }): void {
    if (
      customLayout.keys.normal.concat(customLayout.keys.shift).length !==
      defineKeyLength
    ) {
      console.warn(
        `[WrongLang] The length of keys in ${customLayout.name} does not match the defined key length (${defineKeyLength} keys). This may result in unexpected behavior.`,
      );
    }
    this.layout[customLayout.name] = customLayout.keys;
  }
}
