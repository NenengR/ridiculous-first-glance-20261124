import { mkdirSync, writeFileSync } from "node:fs";

// Angle: an absurd premise (pigeon couriers) that turns plausible because the
// customer is specific (divorce lawyers) and the problem is real (one signed
// page, gridlocked city, the birds already know the rooftops).
const line =
  "We rent retired racing pigeons as same-day couriers for divorce lawyers who need one signed page across town faster than traffic, and the birds already know every rooftop.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log("entry.txt written");
