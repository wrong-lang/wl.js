declare module "wl.js" {
  export class WrongLang {
    /**
     * A list of all the layouts that are available.
     * @type {Object}
     */
    public layout: { [key: string]: { normal: Array<string>, shift: Array<string> } }

    /**
     * Creates an instance of WrongLang.
     * @param opts Options for the class.
     * @param opts.defineKeyLength The amount of shift and unshift keys that are in the layout.
     * @param opts.customLayouts Custom layouts that can be used.
     * @param opts.customLayouts.name The name of the layout.
     * @param opts.customLayouts.keys The keys of the layout.
     */
    constructor(opts?: { customLayouts?: Array<{ name: string, keys: { normal: Array<string>, shift: Array<string> }}>; defineKeyLength?: number; } | undefined);

    /**
     * Swap all characters in a string from one layout to another.
     * @param opts Options for the function.
     * @param opts.layout The layout to swap from and to.
     * @param opts.layout.from The layout to swap from.
     * @param opts.layout.to The layout to swap to.
     * @param opts.text The text to swap the layout of.
     * @returns The text with the layout swapped.
     */
    languageSwap(opts: {
      layout?: { from?: keyof typeof layout | string; to?: keyof typeof layout | string };
      text: string;
    }): string;

    /**
     * Convert shift and unshift characters.
     * @param opts
     * @param opts.layout Current text layout
     * @param opts.text Text to convert
     * @returns Converted text
     */
    unshift(opts: { layout: keyof typeof layout | string, text: string }): string;
  }
}