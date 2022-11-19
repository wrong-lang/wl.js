import { layout } from "./data/layout";

export class WrongLang {
  constructor({ ...data }: { customLayouts?: { name: string, keys: { normal: Array<string>, shift: Array<string> } }} = {}) {
    if (data.customLayouts) {
      layout[data.customLayouts.name as keyof typeof layout] = data.customLayouts.keys;
    }
  }

  languageSwap({ ...data }: { layout: { from: keyof typeof layout, to: keyof typeof layout }, text: string }): string {
    return data.text
      .split("")
      .map((char) => {
        return (
          layout[data.layout.from].shift.concat(
            layout[data.layout.from].normal
          )[
            layout[data.layout.to].shift
              .concat(layout[data.layout.to].normal)
              .indexOf(char)
            ] ||
          layout[data.layout.to].shift.concat(
            layout[data.layout.to].normal
          )[
            layout[data.layout.from].shift
              .concat(layout[data.layout.from].normal)
              .indexOf(char)
            ] || char
        );
      })
      .join("");
  }

  unshift({ ...data }: { layout: keyof typeof layout, text: string }): string {
    return data.text
      .split("")
      .map((char) => {
        return (
          layout[data.layout].shift[
            layout[data.layout].normal.indexOf(char)
            ] ||
          layout[data.layout].normal[
            layout[data.layout].shift.indexOf(char)
            ] ||
          /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()
            || char
        );
      })
      .join("");
  }
}