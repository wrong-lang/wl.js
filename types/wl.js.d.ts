declare module "wl.js" {
  export class WrongLang {
    public layout: { [key: string]: { normal: Array<string>, shift: Array<string> } }
    constructor({}: { customLayouts?: Array<{ name: string, keys: { normal: Array<string>, shift: Array<string> }}>; defineKeyLength?: number; } | undefined);
    languageSwap({}: { layout: { from: string, to: string }, text: string }): string;
    unshift({}: { layout: string, text: string }): string;
  }
}