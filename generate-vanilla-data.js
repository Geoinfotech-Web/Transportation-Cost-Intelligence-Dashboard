import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import XLSX from "xlsx";

const dataDir = resolve(process.cwd(), "public", "data");
const outputPath = resolve(process.cwd(), "data.json");

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "Federal Capital Territory", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara",
];

const stateSet = new Set(states.map((s) => s.toLowerCase()));
const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Map partial month strings to short codes (handles typos like "februaury")
const monthMap = {
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec",
};

const toNumber = (v) => {
  if (typeof v === "number") return v;
  if (typeof v === "string") return Number(v.replace(/[^\d.-]/g, "")) || 0;
  return 0;
};

/** Extract short month code from a column name like "Air fare charge (January)" */
function monthFromCol(col) {
  const lower = String(col).toLowerCase();
  for (const [prefix, short] of Object.entries(monthMap)) {
    if (lower.includes(prefix)) return short;
  }
  return null;
}

/** Identify transport category from column name */
const TRANSPORT_KEYS = {
  air_fare:        (c) => c.includes("air fare") || c.includes("airfare"),
  bus_intercity:   (c) => c.includes("intercity"),
  bus_within_city: (c) => c.includes("within"),
  motorcycle_okada:(c) => c.includes("motorcycle") || c.includes("okada"),
  water_transport: (c) => c.includes("water"),
};

function transportCategoryFromCol(col) {
  const lower = col.toLowerCase();
  for (const [key, test] of Object.entries(TRANSPORT_KEYS)) {
    if (test(lower)) return key;
  }
  return null;
}

const readRows = (filename, preferredSheet) => {
  const workbook = XLSX.readFile(resolve(dataDir, filename));
  const sheetName = preferredSheet && workbook.SheetNames.includes(preferredSheet)
    ? preferredSheet
    : workbook.SheetNames[0];
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
};

// ── PMS data (unchanged logic) ──────────────────────────────────────────────
const pmsByKey = new Map(); // key: "State-year-Mon"
const months = {
  jan:"Jan",january:"Jan",feb:"Feb",february:"Feb",mar:"Mar",march:"Mar",
  apr:"Apr",april:"Apr",may:"May",jun:"Jun",june:"Jun",jul:"Jul",july:"Jul",
  aug:"Aug",august:"Aug",sep:"Sep",sept:"Sep",september:"Sep",
  oct:"Oct",october:"Oct",nov:"Nov",november:"Nov",dec:"Dec",december:"Dec",
};
const normalizeMonth = (v) => {
  const raw = String(v ?? "").trim().toLowerCase();
  return months[raw] ?? months[raw.slice(0, 3)] ?? raw;
};

for (const year of [2024, 2025, 2026]) {
  for (const row of readRows(`PMS_${year}.xlsx`)) {
    const name1Key = Object.keys(row).find((k) => k.trim() === "NAME_1") || "NAME_1";
    const state = String(row[name1Key] ?? row.State ?? row.state ?? "").trim();
    if (!stateSet.has(state.toLowerCase())) continue;
    for (const [column, rawValue] of Object.entries(row)) {
      const month = normalizeMonth(column);
      const value = toNumber(rawValue);
      if (months[String(column).trim().toLowerCase()] && value) {
        pmsByKey.set(`${state}-${year}-${month}`, value);
      }
    }
  }
}

// ── Transport data (separate categories) ────────────────────────────────────
// Key: "State-year-Mon-category"
const transportByKey = new Map();

for (const year of [2024, 2025, 2026]) {
  for (const row of readRows(`Transport cost_${year}.xlsx`, "State Transport")) {
    const state = String(row.NAME_1 ?? row.State ?? row.state ?? "").trim();
    if (!stateSet.has(state.toLowerCase())) continue;

    for (const [column, rawValue] of Object.entries(row)) {
      const value = toNumber(rawValue);
      if (!value) continue;

      const month = monthFromCol(column);
      if (!month) continue;

      const category = transportCategoryFromCol(column);
      if (!category) continue;

      const key = `${state}-${year}-${month}-${category}`;
      // Average multiple readings for the same period/category if present
      const existing = transportByKey.get(key);
      if (existing === undefined) {
        transportByKey.set(key, { sum: value, count: 1 });
      } else {
        existing.sum += value;
        existing.count += 1;
      }
    }
  }
}

const getTransport = (state, year, month, category) => {
  const entry = transportByKey.get(`${state}-${year}-${month}-${category}`);
  if (!entry) return 0;
  return Math.round((entry.sum / entry.count) * 100) / 100;
};

// ── Build records ────────────────────────────────────────────────────────────
const records = [];
for (const [key, fuelPrice] of pmsByKey.entries()) {
  const [state, yearStr, month] = key.split("-");
  const year = Number(yearStr);

  const air_fare        = getTransport(state, year, month, "air_fare");
  const bus_intercity   = getTransport(state, year, month, "bus_intercity");
  const bus_within_city = getTransport(state, year, month, "bus_within_city");
  const motorcycle_okada= getTransport(state, year, month, "motorcycle_okada");
  const water_transport = getTransport(state, year, month, "water_transport");

  // transportCost: sum of the 4 ground/water modes (excluding air, which skews the scale)
  const transportCost = bus_intercity + bus_within_city + motorcycle_okada + water_transport;

  records.push({
    state, year, month, fuelPrice,
    transportCost,
    air_fare, bus_intercity, bus_within_city, motorcycle_okada, water_transport,
  });
}

records.sort((a, b) =>
  a.year - b.year ||
  monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month) ||
  a.state.localeCompare(b.state),
);

writeFileSync(outputPath, JSON.stringify(records, null, 2));
console.log(`Wrote ${records.length} records to ${outputPath}`);
