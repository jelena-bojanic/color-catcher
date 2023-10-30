import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./tsc/index.js",
  output: [
    {
      file: "dist/main.js", // Output file for CommonJS format
      format: "cjs", // CommonJS format
      sourcemap: true,
    },
    {
      file: "dist/main.mjs", // Output file for ES6 module format
      format: "es", // ES6 module format
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    nodeResolve(),
  ],
  external: [],
};
