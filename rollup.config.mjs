import typescript from "@rollup/plugin-typescript";

export default {
  input: "dist/index.js",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [typescript()],
};
