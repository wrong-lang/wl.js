declare module "wl.js" {
  interface CustomLayout {
    name: string;
    keys: { normal: string[]; shift: string[] };
  }

  export class WrongLang {
    /**
     * A list of all the layouts that are available.
     * @type { Record<string, { normal: string[]; shift: string[] }> }
     */
    public layout: Record<string, { normal: string[]; shift: string[] }>;

    /**
     * Creates an instance of WrongLang.
     * @param customLayouts Custom layouts that can be used.
     * @param defineKeyLength The amount of shift and unshift keys that are in the layout.
     * @param customLayouts.name The name of the layout.
     * @param customLayouts.keys The keys of the layout.
     * @param customLayouts.keys.normal The normal "un-shifted" keys of the layout.
     * @param customLayouts.keys.shift The "shifted" keys of the layout.
     * @example
     * const wl = new WrongLang({
     *  customLayouts: [{
     *    name: "Custom",
     *    keys: {
     *      normal: "1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,.".split(""),
     *      shift: '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'.split(""),
     *    },
     *  }],
     *  defineKeyLength: 94,
     * });
     */
    constructor({
      customLayouts = [],
      defineKeyLength = 94,
    }: { customLayouts?: CustomLayout[]; defineKeyLength?: number } = {});

    /**
     * Swap all characters in a string from one layout to another.
     * @param layout The layout to swap from and to.
     * @param primary The layout to swap from.
     * @param secondary The layout to swap to.
     * @param text The text to swap the layout of.
     * @returns Converted text
     */
    languageSwap({
      layout: { primary = "Kedmanee", secondary = "Qwerty" } = {},
      text = "",
    } = {}): string;

    /**
     * Convert shift and unshift characters.
     * @param selectedLayout Current text layout
     * @param text Text to convert
     * @param realShift Convert the "shifted" characters, otherwise convert the "capped" characters (Only works with English layouts)
     * @returns Converted text
     */
    unshift({
      layout: selectedLayout = "Qwerty",
      text = "",
      realShift = true,
    } = {}): string;

    /**
     * Add a custom layout to the list of available layouts.
     * @param customLayout The custom layout to add.
     * @param customLayout.name The name of the layout.
     * @param customLayout.keys The keys of the layout.
     * @param customLayout.keys.normal The normal "un-shifted" keys of the layout.
     * @param customLayout.keys.shift The "shifted" keys of the layout.
     * @param defineKeyLength The amount of shift and unshift keys that are in the layout.
     */
    addCustomLayout({
      customLayout,
      defineKeyLength = 94,
    }: {
      customLayout: CustomLayout;
      defineKeyLength: number;
    }): void;
  }
}
