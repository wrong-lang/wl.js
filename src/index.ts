import { layout } from "./data/layout";

export class WrongLang {
  public layout = layout;

  constructor({
    ...data
  }: {
    defineKeyLength?: number;
    customLayouts?: Array<{
      name: string;
      keys: { normal: Array<string>; shift: Array<string> };
    }>;
  } = { defineKeyLength: 93 }) {
    if (data.customLayouts) {
      data.customLayouts.forEach((cLayout) => {
        if (cLayout.keys.normal.concat(cLayout.keys.shift).length !== data.defineKeyLength) {
          console.warn(
            `[WL.js] The length of keys in ${cLayout.name} does not match the defined key length (${data.defineKeyLength} keys). This may end up in unexpected behaviour.`
          );
        }

        layout[cLayout.name as keyof typeof layout] = cLayout.keys;
        this.layout = layout;
      });
    }
  }

  languageSwap({
    ...data
  }: {
    layout?: { primary?: keyof typeof layout | string; secondary?: keyof typeof layout | string };
    text: string;
  } = { layout: { primary: "Kedmanee", secondary: "Qwerty" }, text: "" }): string {
    let layoutPrimary = data.layout?.primary as keyof typeof layout,
        layoutSecondary   = data.layout?.secondary as keyof typeof layout;

    if (!layout[layoutPrimary] || !layout[layoutSecondary]) {
      throw new Error(`[WL.js] The layout "${data.layout?.primary}" or "${data.layout?.secondary}" does not exist.`);
    }

    return data.text
      .split("")
      .map((char) => {
        return (
          layout[layoutPrimary].shift.concat(
            layout[layoutPrimary].normal
          )[
            layout[layoutSecondary].shift
              .concat(layout[layoutSecondary].normal)
              .indexOf(char)
          ] ||
          layout[layoutSecondary].shift.concat(layout[layoutSecondary].normal)[
            layout[layoutPrimary].shift
              .concat(layout[layoutPrimary].normal)
              .indexOf(char)
          ] ||
          char
        );
      })
      .join("");
  }

  unshift({ ...data }: { layout: keyof typeof layout | string; text: string }): string {
    let selectedLayout = data.layout as keyof typeof layout;

    if (!layout[selectedLayout]) {
      throw new Error(`[WL.js] The layout "${data.layout}" does not exist.`);
    }

    return data.text
      .split("")
      .map((char) => {
        return layout[selectedLayout].shift.concat(layout[selectedLayout].normal)[
          layout[selectedLayout].normal
            .concat(layout[selectedLayout].shift)
            .indexOf(char)
          ] || char;
      })
      .map((char) => {
        return /[A-Z]/.test(char)
          ? char.toLowerCase()
          : char.toUpperCase()
      })
      .join("")
  }
}