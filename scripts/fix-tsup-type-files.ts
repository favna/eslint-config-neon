import { rename } from "node:fs/promises";
import { findFilesRecursivelyStringEndsWith } from "@sapphire/node-utilities";

const distUrl = new URL("../dist/esm/", import.meta.url);

for await (const file of findFilesRecursivelyStringEndsWith(distUrl, ".d.ts")) {
	await rename(file, file.replace(/\.d\.ts$/, ".d.mts"));
}

console.log(`✅ Renamed .d.ts files in ${distUrl} to .d.mts`);
