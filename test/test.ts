import * as assert from "assert";
import { WrongLang } from "../src";
import { describe } from "node:test";
const wrongLang = new WrongLang();

describe("WrongLang", function () {
  describe("#languageSwap()", function () {
    it('should return "สวัสดีครับ" when input "l;ylfu8iy[" in "Kedmanee to Qwerty" layout option', function () {
      assert.equal(
        wrongLang.languageSwap({
          layout: {
            from: "Kedmanee",
            to: "Qwerty",
          },
          text: "l;ylfu8iy[",
        }),
        "สวัสดีครับ"
      );
    });
  });

  describe("#unshift()", function () {
    it('should return "สวัสดีครับ" when input "ศซํศโ๊๕ณํฐ hello WORLD" in "Kedmanee" layout option', function () {
      assert.equal(
        wrongLang.unshift({
          layout: "Kedmanee",
          text: "ศซํศโ๊๕ณํฐ hELLO wORLD",
        }),
        "สวัสดีครับ Hello World"
      );
    });
  });

  describe("customLayout", function () {
    it('should works', function () {
      const wl = new WrongLang({
        customLayouts: [{
          name: "Number",
          keys: {
            normal: "12345678901234567890123456789012345678901234567890123456789012345678901234567890".split(""),
            shift: "12345678901234567890123456789012345678901234567890123456789012345678901234567890".split(""),
          },
        }]
      });

      assert.equal(wl.languageSwap({ layout: { from: "Kedmanee", to: "Number" }, text: "สวัสดีครับชาวโลก" }), "2362776861013026");
    });
  });
});
