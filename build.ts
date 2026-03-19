import { build } from "tsdown";

await build({
  entry: ["./index.ts"],
  format: ["esm", "cjs"],
  outDir: "./dist",
  dts: true,
});
