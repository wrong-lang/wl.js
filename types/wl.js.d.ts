declare module "wl.js" {
  class WrongLang {
    constructor({ defineKeyLength = 93 }: { customLayouts: Array<{ name: string, keys: { normal: Array<string>, shift: Array<string> }}>; defineKeyLength: number; });
    languageSwap({}: { layout: { from: string, to: string }, text: string }): void;
    unshift({}: { layout: string, text: string }): void;
  }
}