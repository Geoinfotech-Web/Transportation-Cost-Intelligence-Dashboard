import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const root = process.cwd();
const dashboardDir = resolve(root, "Dashboard Data");
const publicDataDir = resolve(root, "public", "data");
const shapefileDir = resolve(dashboardDir, "NGA_Adm_Boundaries");
const shapefileZip = resolve(publicDataDir, "gadm41_NGA_shp.zip");

const files = [
  "PMS_2024.xlsx",
  "PMS_2025.xlsx",
  "PMS_2026.xlsx",
  "Transport cost_2024.xlsx",
  "Transport cost_2025.xlsx",
  "Transport cost_2026.xlsx",
];

if (!existsSync(dashboardDir)) {
  console.error(`Dashboard Data folder not found at ${dashboardDir}`);
  process.exit(1);
}

mkdirSync(publicDataDir, { recursive: true });

const copied = files.reduce((count, file) => {
  const src = resolve(dashboardDir, file);
  const dest = resolve(publicDataDir, file);
  if (!existsSync(src)) {
    console.warn(`Skipped missing source file: ${src}`);
    return count;
  }

  copyFileSync(src, dest);
  return count + 1;
}, 0);

console.log(`Copied ${copied}/${files.length} Excel files from Dashboard Data to public/data`);

if (existsSync(shapefileDir)) {
  try {
    const parts = ["Compress-Archive", "-Path", `${shapefileDir}\\*`, "-DestinationPath", shapefileZip, "-Force"].map((part) => `"${part.replace(/"/g, "\"")}"`).join(" ");
    execSync(`powershell -NoProfile -Command ${parts}`, { stdio: "inherit" });
    console.log(`Created shapefile archive from ${shapefileDir} to ${shapefileZip}`);
  } catch (error) {
    console.warn(`Unable to create shapefile archive from ${shapefileDir}:`, error);
    if (!existsSync(shapefileZip)) {
      console.warn(`No shapefile ZIP exists at ${shapefileZip}. Map boundaries may not load.`);
    }
  }
} else {
  console.warn(`Shapefile source folder not found at ${shapefileDir}.`);
}
