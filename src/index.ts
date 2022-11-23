import { layout } from "./data/layout";

class WrongLang {
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
      data.customLayouts.forEach((clayout) => {
        if (clayout.keys.normal.concat(clayout.keys.shift).length !== data.defineKeyLength) {
          console.warn(
            `[WL.js] The length of keys in ${clayout.name} does not match the defined key length (${data.defineKeyLength} keys). This may end up in unexpected behaviour.`
          );
        }

        layout[clayout.name as keyof typeof layout] = clayout.keys;
        this.layout = layout;
      });
    }
  }

  languageSwap({
    ...data
  }: {
    layout: { from: keyof typeof layout | string; to: keyof typeof layout | string };
    text: string;
  }): string {
    let layoutFrom = data.layout.from as keyof typeof layout,
        layoutTo   = data.layout.to as keyof typeof layout;

    if (!layout[layoutFrom] || !layout[layoutTo]) {
      throw new Error(`[WL.js] The layout "${data.layout.from}" or "${data.layout.to}" does not exist.`);
    }

    return data.text
      .split("")
      .map((char) => {
        return (
          layout[layoutFrom].shift.concat(
            layout[layoutFrom].normal
          )[
            layout[layoutTo].shift
              .concat(layout[layoutTo].normal)
              .indexOf(char)
          ] ||
          layout[layoutTo].shift.concat(layout[layoutTo].normal)[
            layout[layoutFrom].shift
              .concat(layout[layoutFrom].normal)
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

export default WrongLang;