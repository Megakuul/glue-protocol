import { build } from "tsdown";

await build({
  entry: ["./index.ts"],
  format: ["esm"],
  outDir: "./dist",
  dts: true,
});
