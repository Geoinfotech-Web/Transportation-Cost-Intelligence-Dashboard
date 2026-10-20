const stateNames = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "Federal Capital Territory", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara",
];

const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const mapColors  = ["#65a30d", "#84cc16", "#fbbf24", "#f97316", "#ef4444"];

const TRANSPORT_MODES = [
  { key: "bus_intercity",    label: "Bus Intercity",      color: "#60a5fa" },
  { key: "bus_within_city",  label: "Bus Within City",    color: "#34d399" },
  { key: "motorcycle_okada", label: "Okada (Motorcycle)", color: "#fbbf24" },
  { key: "water_transport",  label: "Water Transport",    color: "#22d3ee" },
  { key: "air_fare",         label: "Air Fare",           color: "#f87171" },
];

/* ── State known-for descriptions ────────────────────────── */
const STATE_KNOWN_FOR = {
  "Abia":                     "commerce, Ariaria International Market, Aba textile manufacturing and leather goods",
  "Adamawa":                  "Mandara Mountains, tourism, agriculture (groundnuts, cotton), River Benue headwaters",
  "Akwa Ibom":                "crude oil and gas production, Ibom tropicana, Akwa Ibom airport, fishing communities",
  "Anambra":                  "trade and commerce, Onitsha Main Market (one of Africa's largest), Igbo cultural heritage",
  "Bauchi":                   "Yankari Game Reserve (wildlife tourism), groundnut production, distinctive rock formations",
  "Bayelsa":                  "oil and gas exploration, Niger Delta wetlands, Ijaw cultural heritage and fishing",
  "Benue":                    "yam and cassava farming ('Food Basket of the Nation'), River Benue, Tiv and Idoma culture",
  "Borno":                    "Kanuri culture, Lake Chad Basin, ancient Borno Empire and historical settlements",
  "Cross River":              "Calabar Carnival (Africa's biggest street party), Obudu Ranch, Cross River National Park",
  "Delta":                    "oil and gas production, Niger Delta waterways, Warri city commerce and petrochemicals",
  "Ebonyi":                   "rice cultivation, lead and zinc mining, salt lakes in Uburu, Ohozara community",
  "Edo":                      "ancient Benin Kingdom, UNESCO Benin bronzes, rubber and timber production",
  "Ekiti":                    "cocoa farming, Yoruba cultural heritage, Ikogosi Warm Springs, 'Land of Honour'",
  "Enugu":                    "coal mining ('Coal City State'), Enugu coal mines, trade and higher education institutions",
  "Federal Capital Territory": "Nigeria's federal capital Abuja, Aso Rock Villa, National Assembly, Zuma Rock",
  "Gombe":                    "commerce (Gombe Suq), agriculture (groundnuts, millet), Tangale-Waja forest reserve",
  "Imo":                      "Owerri commerce, Oguta Lake, Mbari cultural centres, eastern trade hub",
  "Jigawa":                   "sesame and cotton farming, Hadejia-Nguru wetlands, historic Birnin Kudu and Dutse towns",
  "Kaduna":                   "Kaduna Textile industry, railway junction, commerce, multi-ethnic cultural diversity",
  "Kano":                     "ancient Kano Emirate, leather goods and dye pits, Kurmi Market, groundnut exports",
  "Katsina":                  "groundnut production, pottery, historical walls of Katsina, Emir's palace",
  "Kebbi":                    "Argungu International Fishing Festival (UNESCO heritage), rice cultivation, Kanta Museum",
  "Kogi":                     "'Confluence State' (Niger & Benue rivers meet), iron ore, agriculture, Lokoja historic city",
  "Kwara":                    "'State of Harmony', Esie Museum (world's largest soapstone figure collection), cotton",
  "Lagos":                    "Nigeria's commercial capital, largest economy, entertainment and fashion hub, Bight of Benin coastline",
  "Nasarawa":                 "solid minerals (tin, iron ore, baryte), Eggon Hills, 'Home of Solid Minerals' tagline",
  "Niger":                    "Kainji Dam and hydroelectric power, largest state by land area, River Niger",
  "Ogun":                     "Olumo Rock in Abeokuta, gateway to Lagos, pottery industry, cocoa farming",
  "Ondo":                     "bitumen deposits, cocoa and timber, Idanre Hills UNESCO candidate, Ondo Kingdom",
  "Osun":                     "Osun-Osogbo Sacred Grove (UNESCO World Heritage), Ile-Ife as cradle of Yoruba civilisation",
  "Oyo":                      "Ibadan city (Nigeria's third largest), cocoa farming, Oyo Empire historic heritage",
  "Plateau":                  "tin and columbite mining, temperate climate, Shere Hills, 'Home of Peace and Tourism'",
  "Rivers":                   "Port Harcourt (oil capital of Nigeria), largest crude oil reserves, Garden City reputation",
  "Sokoto":                   "Sokoto Caliphate, leather craftsmanship, millet farming, 'Seat of the Caliphate'",
  "Taraba":                   "biodiversity, Mambilla Plateau (highest in Nigeria), tea cultivation, Taraba River",
  "Yobe":                     "agriculture (millet, sorghum, cowpeas), Hadejia River, Chad Basin proximity",
  "Zamfara":                  "gold mining, first state to adopt sharia legal framework (1999), cotton cultivation",
};

/* ── Nigeria state geographic / demographic reference ─────── */
const STATE_GEO_DATA = {
  "Abia":                     { lat: 5.454,  lng: 7.524,  area: 6320,  pop: 3727574,  stationsEst: 48  },
  "Adamawa":                  { lat: 9.333,  lng: 12.398, area: 36917, pop: 4253641,  stationsEst: 35  },
  "Akwa Ibom":                { lat: 4.859,  lng: 7.874,  area: 7081,  pop: 5450758,  stationsEst: 62  },
  "Anambra":                  { lat: 6.210,  lng: 7.069,  area: 4844,  pop: 5527809,  stationsEst: 73  },
  "Bauchi":                   { lat: 10.311, lng: 9.844,  area: 49119, pop: 6537314,  stationsEst: 44  },
  "Bayelsa":                  { lat: 4.772,  lng: 6.098,  area: 10773, pop: 2277961,  stationsEst: 22  },
  "Benue":                    { lat: 7.340,  lng: 8.741,  area: 30955, pop: 5741815,  stationsEst: 38  },
  "Borno":                    { lat: 11.833, lng: 13.151, area: 69435, pop: 5860982,  stationsEst: 29  },
  "Cross River":              { lat: 5.874,  lng: 8.598,  area: 20156, pop: 3737517,  stationsEst: 33  },
  "Delta":                    { lat: 5.520,  lng: 6.068,  area: 17698, pop: 5663362,  stationsEst: 71  },
  "Ebonyi":                   { lat: 6.264,  lng: 8.014,  area: 5533,  pop: 2880613,  stationsEst: 24  },
  "Edo":                      { lat: 6.335,  lng: 5.623,  area: 17802, pop: 4235709,  stationsEst: 58  },
  "Ekiti":                    { lat: 7.719,  lng: 5.298,  area: 5530,  pop: 3270798,  stationsEst: 31  },
  "Enugu":                    { lat: 6.460,  lng: 7.549,  area: 7161,  pop: 4411119,  stationsEst: 47  },
  "Federal Capital Territory":{ lat: 9.072,  lng: 7.491,  area: 7315,  pop: 3564126,  stationsEst: 89  },
  "Gombe":                    { lat: 10.284, lng: 11.168, area: 20265, pop: 3256329,  stationsEst: 27  },
  "Imo":                      { lat: 5.572,  lng: 7.058,  area: 5530,  pop: 4860614,  stationsEst: 56  },
  "Jigawa":                   { lat: 12.183, lng: 9.354,  area: 23154, pop: 5828163,  stationsEst: 29  },
  "Kaduna":                   { lat: 10.516, lng: 7.442,  area: 46053, pop: 8252366,  stationsEst: 74  },
  "Kano":                     { lat: 11.745, lng: 8.524,  area: 20131, pop: 13076891, stationsEst: 112 },
  "Katsina":                  { lat: 12.380, lng: 7.621,  area: 24192, pop: 7831319,  stationsEst: 48  },
  "Kebbi":                    { lat: 11.494, lng: 4.199,  area: 36985, pop: 4440085,  stationsEst: 31  },
  "Kogi":                     { lat: 7.800,  lng: 6.741,  area: 29833, pop: 4473490,  stationsEst: 39  },
  "Kwara":                    { lat: 8.966,  lng: 4.390,  area: 36825, pop: 3192705,  stationsEst: 33  },
  "Lagos":                    { lat: 6.524,  lng: 3.379,  area: 3345,  pop: 15388000, stationsEst: 185 },
  "Nasarawa":                 { lat: 8.499,  lng: 8.320,  area: 27117, pop: 2523395,  stationsEst: 27  },
  "Niger":                    { lat: 9.981,  lng: 5.598,  area: 76363, pop: 5556248,  stationsEst: 42  },
  "Ogun":                     { lat: 6.994,  lng: 3.347,  area: 16762, pop: 5217716,  stationsEst: 64  },
  "Ondo":                     { lat: 6.911,  lng: 5.148,  area: 15500, pop: 4671589,  stationsEst: 47  },
  "Osun":                     { lat: 7.563,  lng: 4.558,  area: 9251,  pop: 4705009,  stationsEst: 45  },
  "Oyo":                      { lat: 7.851,  lng: 3.931,  area: 28454, pop: 7840864,  stationsEst: 82  },
  "Plateau":                  { lat: 9.218,  lng: 9.518,  area: 26899, pop: 4200206,  stationsEst: 36  },
  "Rivers":                   { lat: 4.824,  lng: 6.921,  area: 10575, pop: 7303924,  stationsEst: 94  },
  "Sokoto":                   { lat: 13.062, lng: 5.240,  area: 25973, pop: 4968289,  stationsEst: 33  },
  "Taraba":                   { lat: 7.874,  lng: 10.964, area: 54473, pop: 3066678,  stationsEst: 21  },
  "Yobe":                     { lat: 12.294, lng: 11.439, area: 45502, pop: 3294137,  stationsEst: 18  },
  "Zamfara":                  { lat: 12.170, lng: 6.659,  area: 39762, pop: 4336444,  stationsEst: 22  },
};

let allData         = [];
let fuelStations    = [];
let _pdfLogoBase64  = "";
let activeState  = "Plateau";
let activeYear   = null;
let nigeriaGeoJson = null;
let nigeriaMap;
let stateLayer;
let stationLayer;
let currentTileLayer;
let currentReferenceLayer;
let highwayLayer = null;
let highwaysLoaded = false;

const BASEMAPS = {
  "osm": { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", options: {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  } },
  "esri-satellite": { url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", options: {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
  } },
  "esri-dark-gray": {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    referenceUrl: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      maxZoom: 19,
      attribution: 'Sources: Esri, HERE, Garmin, &copy; OpenStreetMap contributors, and the GIS User Community',
    },
  },
  "stadia-dark": { url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", options: {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/attribution/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  } },
};

function switchBasemap(key) {
  if (!nigeriaMap || !BASEMAPS[key]) return;
  if (currentTileLayer) currentTileLayer.remove();
  if (currentReferenceLayer) currentReferenceLayer.remove();
  const bm = BASEMAPS[key];
  currentTileLayer = L.tileLayer(bm.url, bm.options).addTo(nigeriaMap);
  currentReferenceLayer = bm.referenceUrl
    ? L.tileLayer(bm.referenceUrl, { maxZoom: bm.options.maxZoom }).addTo(nigeriaMap)
    : null;
  if (stateLayer) stateLayer.bringToFront();
  if (currentReferenceLayer) currentReferenceLayer.bringToFront();
  if (stationLayer) stationLayer.bringToFront();
  localStorage.setItem("dashBasemap", key);
}

const $  = (id) => document.getElementById(id);
const currency = (v, d = 2) => `₦${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d })}`;

/* ── Right panel multi-view ───────────────────────────────── */
const RIGHT_VIEWS = [
  "state-detail", "general-report", "hike-tracker", "reports",
  "compare-section", "fuel-stations-section", "settings-section",
];

function showRightView(sectionId) {
  RIGHT_VIEWS.forEach((id) => {
    const el = $(id);
    if (el) el.classList.toggle("hidden", id !== sectionId);
  });
  document.querySelectorAll(".nav-item").forEach((i) => i.classList.remove("active"));
  const navMap = {
    "state-detail":           "nav-overview",
    "general-report":         "nav-general-report",
    "hike-tracker":           "nav-hike-tracker",
    "reports":                "nav-reports",
    "compare-section":        "nav-compare",
    "fuel-stations-section":  "nav-fuel-stations",
    "settings-section":       "nav-settings",
  };
  const navId = navMap[sectionId];
  if (navId) $( navId)?.classList.add("active");
}

function renderChartLegend(containerId, items) {
  const el = $(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((i) => `<span class="clb-item"><span class="clb-line" style="background:${i.color}"></span>${i.name}</span>`)
    .join("");
}

const normalize = (name) =>
  String(name || "")
    .replace(/state/gi, "")
    .replace(/federal capital territory|fct|abuja/gi, "Federal Capital Territory")
    .trim()
    .toLowerCase();

const periodIndex  = (r)  => r.year * 12 + monthOrder.indexOf(r.month);
const sortRecords  = (rs) => [...rs].sort((a, b) => periodIndex(a) - periodIndex(b));

function latestRecord(records = allData) { return sortRecords(records).at(-1); }

function getStateData(state) {
  return sortRecords(allData.filter((r) => normalize(r.state) === normalize(state)));
}

function currentRecords() {
  const src    = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
  const latest = latestRecord(src);
  if (!latest) return [];
  return src.filter((r) => r.year === latest.year && r.month === latest.month);
}

function average(records, key) {
  const vals = records.map((r) => Number(r[key] || 0)).filter((v) => v > 0);
  return vals.length ? vals.reduce((s, v) => s + v, 0) / vals.length : 0;
}

function colorScale(value, min, max) {
  if (!value) return "#1e293b";
  const ratio = max === min ? 0.5 : (value - min) / (max - min);
  if (ratio < 0.2) return mapColors[0];
  if (ratio < 0.4) return mapColors[1];
  if (ratio < 0.6) return mapColors[2];
  if (ratio < 0.8) return mapColors[3];
  return mapColors[4];
}

function stateNameFromFeature(f) {
  const p = f?.properties || {};
  return p.NAME_1 || p.state || p.State || p.name || p.NAME || "";
}

const set  = (id, v) => { const el = $(id); if (el) el.textContent = v; };
const show = (id)    => { const el = $(id); if (el) el.style.display = ""; };
const hide = (id)    => { const el = $(id); if (el) el.style.display = "none"; };

/* ── Plotly base layout (theme-aware) ─────────────────────── */
function basePlotLayout(extra = {}) {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const isLight  = theme === "light";
  const isFlight = theme === "flight";
  return {
    margin: { t: 8, r: 10, b: 42, l: 58 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor:  "rgba(0,0,0,0)",
    font: {
      color:  isLight ? "#607090" : isFlight ? "#3a7a9a" : "#6b88a8",
      size:   9,
      family: "Inter, Segoe UI, sans-serif",
    },
    xaxis: { gridcolor: isLight ? "rgba(80,120,200,.1)" : "rgba(100,140,200,.07)", tickangle: -45, tickfont: { size: 8 } },
    yaxis: { gridcolor: isLight ? "rgba(80,120,200,.12)" : "rgba(100,140,200,.10)", tickfont: { size: 8 } },
    showlegend: false,
    legend: { orientation: "h", y: -0.28, font: { size: 9 } },
    ...extra,
  };
}
const plotCfg = { responsive: true, displayModeBar: false };

/* ── KPIs ─────────────────────────────────────────────────── */
function updateKpis() {
  const records  = currentRecords();
  const latest   = latestRecord();
  const prevBase = sortRecords(allData).filter((r) => periodIndex(r) < periodIndex(latest)).at(-1);
  const prev     = prevBase ? allData.filter((r) => r.year === prevBase.year && r.month === prevBase.month) : [];

  const avgFuel  = average(records, "fuelPrice");
  const avgTrn   = average(records, "transportCost");
  const prevFuel = average(prev, "fuelPrice");
  const prevTrn  = average(prev, "transportCost");
  const dFuel    = prevFuel ? ((avgFuel - prevFuel) / prevFuel) * 100 : 0;
  const dTrn     = prevTrn  ? ((avgTrn  - prevTrn)  / prevTrn) * 100  : 0;
  const hikes    = computeHikes();
  const avgHike  = average(hikes, "hike");

  set("side-pms",       currency(avgFuel));
  set("side-transport", currency(avgTrn));
  set("side-hike",      `${avgHike.toFixed(1)}%`);
  set("last-update",    latest ? `${latest.month} ${latest.year}` : "–");

  const pD = $("pms-delta");
  if (pD) { pD.textContent = `${dFuel >= 0 ? "↑" : "↓"} ${Math.abs(dFuel).toFixed(2)}%`; pD.className = `nat-badge ${dFuel >= 0 ? "up" : "down"}`; }
  const tD = $("transport-delta");
  if (tD) { tD.textContent = `${dTrn >= 0 ? "↑" : "↓"} ${Math.abs(dTrn).toFixed(2)}%`; tD.className = `nat-badge ${dTrn >= 0 ? "up" : "down"}`; }

  updateHighlightBoxes(records);
  updateTransportModeBadges(records);
}

function updateHighlightBoxes(records) {
  records = records || currentRecords();
  const wf = records.filter((r) => r.fuelPrice > 0).sort((a, b) => b.fuelPrice - a.fuelPrice);
  const wt = records.filter((r) => r.transportCost > 0).sort((a, b) => b.transportCost - a.transportCost);
  if (wf.length) {
    set("hi-pms-state", `${wf[0].state} State`);
    set("hi-pms-val",   currency(wf[0].fuelPrice));
    set("lo-pms-state", `${wf.at(-1).state} State`);
    set("lo-pms-val",   currency(wf.at(-1).fuelPrice));
  }
  if (wt.length) {
    set("hi-trn-state", `${wt[0].state} State`);
    set("hi-trn-val",   currency(wt[0].transportCost));
    set("lo-trn-state", `${wt.at(-1).state} State`);
    set("lo-trn-val",   currency(wt.at(-1).transportCost));
  }
}

function updateTransportModeBadges(records) {
  records = records || currentRecords();
  set("tm-bus-ic",   currency(average(records, "bus_intercity"),   0));
  set("tm-bus-city", currency(average(records, "bus_within_city"), 0));
  set("tm-okada",    currency(average(records, "motorcycle_okada"),0));
  set("tm-water",    currency(average(records, "water_transport"), 0));
  set("tm-air",      currency(average(records, "air_fare"),        0));
}

/* ── State dropdown ───────────────────────────────────────── */
function populateStateDropdown() {
  ["state-dropdown", "compare-a", "compare-b", "report-state-sel"].forEach((id) => {
    const sel = $(id);
    if (!sel) return;
    sel.innerHTML = stateNames.map((s) => `<option value="${s}">${s}</option>`).join("");
    if (id === "state-dropdown")    sel.value = activeState;
    if (id === "compare-a")         sel.value = stateNames[0];
    if (id === "compare-b")         sel.value = stateNames[1];
    if (id === "report-state-sel")  sel.value = "";
  });
  /* Report state select initial empty option */
  const rSel = $("report-state-sel");
  if (rSel) {
    rSel.innerHTML = `<option value="">— Select state —</option>` + stateNames.map((s) => `<option value="${s}">${s}</option>`).join("");
  }
}

/* ── Period labels ────────────────────────────────────────── */
function updatePeriodLabels() {
  const src    = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
  const sorted = sortRecords(src);
  if (!sorted.length) return;
  const first = sorted[0];
  const last  = sorted.at(-1);
  const text  = `${first.month} ${first.year}${first !== last ? ` – ${last.month} ${last.year}` : ""}`;
  document.querySelectorAll(".period-chip").forEach((el) => { el.textContent = text; });
  set("period-label", text);
}

/* ── Hike list ────────────────────────────────────────────── */
function computeHikes() {
  const src = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
  return stateNames.map((state) => {
    const recs  = sortRecords(src.filter((r) => normalize(r.state) === normalize(state)));
    const first = recs.find((r) => r.fuelPrice > 0);
    const last  = [...recs].reverse().find((r) => r.fuelPrice > 0);
    const hike  = first && last ? ((last.fuelPrice - first.fuelPrice) / first.fuelPrice) * 100 : 0;
    return { state, hike, first, last };
  }).filter((r) => r.first && r.last);
}

function renderHikeList() {
  const all  = computeHikes().sort((a, b) => b.hike - a.hike);
  const rows = all.slice(0, 5);
  const max  = Math.max(...rows.map((r) => Math.abs(r.hike)), 1);
  const el   = $("top-hikes");
  if (el) {
    el.innerHTML = rows.map((row, i) => `
      <div class="hike-row">
        <span>${i + 1}</span>
        <strong>${row.state}</strong>
        <span class="hike-bar"><span style="width:${Math.max(8, (Math.abs(row.hike) / max) * 100)}%"></span></span>
        <b>${row.hike.toFixed(1)}%</b>
      </div>`).join("");
  }
  document.querySelectorAll(".period-chip-inline").forEach((el2) => {
    const src    = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
    const sorted = sortRecords(src);
    if (sorted.length) el2.textContent = `${sorted[0].month} ${sorted[0].year} – ${sorted.at(-1).month} ${sorted.at(-1).year}`;
  });
}

/* ── Map ──────────────────────────────────────────────────── */
async function loadNigeriaBoundaries() {
  const res = await fetch("./public/data/nigeria_states.geojson");
  if (res.ok) return res.json();
  const r2  = await fetch("./public/data/gadm41_NGA_shp.zip");
  if (!r2.ok || typeof shp !== "function") throw new Error("Unable to load Nigeria boundaries");
  const geo    = await shp(await r2.arrayBuffer());
  const layers = Array.isArray(geo) ? geo : [geo];
  return layers.find((l) => l.fileName === "gadm41_NGA_1") || layers.find((l) => l.features?.length === 37) || layers[0];
}

function renderMap(geoJson) {
  nigeriaGeoJson = geoJson;
  if (typeof L === "undefined") { renderSvgMap(geoJson); return; }

  const records = currentRecords();
  const byState = new Map(records.map((r) => [normalize(r.state), r]));
  const vals    = records.map((r) => r.fuelPrice).filter(Boolean);
  const min     = Math.min(...vals);
  const max     = Math.max(...vals);

  nigeriaMap = L.map("nigeria-map", {
    center: [9.07, 8.68],
    zoom: 5.55,
    minZoom: 5,
    maxZoom: 9,
    attributionControl: true,
  });

  const savedBasemap = localStorage.getItem("dashBasemap") || "osm";
  const bmCfg = BASEMAPS[savedBasemap] || BASEMAPS.osm;
  currentTileLayer = L.tileLayer(bmCfg.url, bmCfg.options).addTo(nigeriaMap);
  currentReferenceLayer = bmCfg.referenceUrl
    ? L.tileLayer(bmCfg.referenceUrl, { maxZoom: bmCfg.options.maxZoom }).addTo(nigeriaMap)
    : null;

  stateLayer = L.geoJSON(geoJson, {
    style: (feature) => {
      const rec = byState.get(normalize(stateNameFromFeature(feature)));
      return { color: "rgba(255,255,255,0.48)", weight: 1, fillColor: colorScale(rec?.fuelPrice, min, max), fillOpacity: 0.88 };
    },
    onEachFeature: (feature, layer) => {
      const state = stateNameFromFeature(feature);
      const rec   = byState.get(normalize(state));
      layer.bindTooltip(buildTooltip(state, rec), { className: "map-tooltip" });
      layer.on("click", () => selectState(rec?.state || state));
    },
  });
  if (localStorage.getItem("dashStatesVisible") !== "false") stateLayer.addTo(nigeriaMap);
  if (currentReferenceLayer) currentReferenceLayer.bringToFront();

  nigeriaMap.fitBounds(stateLayer.getBounds(), { padding: [12, 12] });

  /* Fit-to-extent custom control */
  const FitControl = L.Control.extend({
    options: { position: "topleft" },
    onAdd() {
      const btn = L.DomUtil.create("button", "leaflet-fit-btn");
      btn.title = "Fit to extent";
      btn.innerHTML = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path d="M3 7V3h4M13 3h4v4M17 13v4h-4M7 17H3v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="7" y="7" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
      </svg>`;
      L.DomEvent.on(btn, "click", (e) => {
        L.DomEvent.stopPropagation(e);
        if (stateLayer) nigeriaMap.fitBounds(stateLayer.getBounds(), { padding: [12, 12] });
      });
      return btn;
    },
  });
  new FitControl().addTo(nigeriaMap);

  renderFuelStations();

  const rdState = $("report-state-sel")?.value;
  if (rdState) renderReportStateDetail(rdState);
}

function buildTooltip(state, rec) {
  return `<strong>${state} State</strong><br>
    PMS: ${currency(rec?.fuelPrice)}<br>
    Bus IC: ${currency(rec?.bus_intercity)}<br>
    Bus City: ${currency(rec?.bus_within_city)}<br>
    Okada: ${currency(rec?.motorcycle_okada)}<br>
    Water: ${currency(rec?.water_transport)}<br>
    Air Fare: ${currency(rec?.air_fare)}<br>
    ${rec?.month || ""} ${rec?.year || ""}`;
}

function refreshMapColors() {
  const records = currentRecords();
  const byState = new Map(records.map((r) => [normalize(r.state), r]));
  const vals    = records.map((r) => r.fuelPrice).filter(Boolean);
  const min     = Math.min(...vals);
  const max     = Math.max(...vals);
  if (stateLayer) {
    stateLayer.setStyle((feature) => {
      const rec = byState.get(normalize(stateNameFromFeature(feature)));
      return { color: "rgba(255,255,255,0.48)", weight: 1, fillColor: colorScale(rec?.fuelPrice, min, max), fillOpacity: 0.88 };
    });
    stateLayer.eachLayer((layer) => {
      const state = stateNameFromFeature(layer.feature);
      const rec   = byState.get(normalize(state));
      layer.setTooltipContent(buildTooltip(state, rec));
    });
    return;
  }
  if (nigeriaGeoJson && $("nigeria-map").querySelector("svg")) renderSvgMap(nigeriaGeoJson);
}

/* Fuel station map-pin icon — red pin with fuel pump inside */
const FUEL_PUMP_SVG = `
<svg viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 2C11.163 2 4 9.163 4 18c0 11.25 16 30 16 30S36 29.25 36 18C36 9.163 28.837 2 20 2z" fill="#E53935"/>
  <circle cx="20" cy="18" r="11" fill="#ffffff"/>
  <rect x="13.5" y="11.5" width="8" height="11" rx="1.2" fill="#8B1A1A"/>
  <rect x="14.5" y="12.5" width="6" height="3.5" rx="0.6" fill="#ffffff"/>
  <rect x="13" y="21.5" width="9" height="1.5" rx="0.5" fill="#8B1A1A"/>
  <path d="M21.5 15.5 Q25 15.5 25.5 13.5" stroke="#8B1A1A" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <rect x="23.5" y="11" width="3.5" height="3" rx="0.8" fill="#8B1A1A" transform="rotate(20 25.2 12.5)"/>
</svg>`;

function makeOilDropIcon() {
  return L.divIcon({
    className: "fuel-pin",
    html: FUEL_PUMP_SVG,
    iconSize:   [14, 18],
    iconAnchor: [7, 18],
    tooltipAnchor: [0, -18],
  });
}

function renderFuelStations() {
  if (!nigeriaMap) return;
  if (stationLayer) stationLayer.remove();
  stationLayer = L.layerGroup();
  const icon = makeOilDropIcon();
  fuelStations.forEach((s) => {
    const marker = L.marker([s.latitude, s.longitude], { icon });
    marker.bindTooltip(
      `<strong>${s.name || s.brand || "Fuel station"}</strong><br>Lat: ${Number(s.latitude).toFixed(4)}<br>Lon: ${Number(s.longitude).toFixed(4)}`,
      { className: "map-tooltip" },
    );
    marker.addTo(stationLayer);
  });
  stationLayer.addTo(nigeriaMap);
}

/* ── Nigeria major highways — auto-loads with localStorage cache ── */
const HW_CACHE_KEY = "ng_hw_v2";
const HW_CACHE_TTL = 7 * 24 * 60 * 60 * 1000; /* 7 days */

function buildHighwayLayer(features) {
  const hwStyle = {
    motorway: { color: "#b0a492", weight: 1.8, opacity: 0.9 },
    trunk:    { color: "#a09480", weight: 1.3, opacity: 0.85 },
    primary:  { color: "#8c8070", weight: 0.9, opacity: 0.8 },
  };
  const hwLabel = { motorway: "Motorway", trunk: "Trunk Road", primary: "Primary Road" };

  highwayLayer = L.geoJSON({ type: "FeatureCollection", features }, {
    style: (f) => hwStyle[f.properties.highway] || { color: "#a09480", weight: 0.9, opacity: 0.75 },
    onEachFeature: (f, layer) => {
      const p = f.properties;
      layer.bindTooltip(p.name || p.ref || hwLabel[p.highway] || "Road",
        { sticky: true, className: "map-tooltip" });

      layer.on("click", () => {
        const oway = p.oneway === "yes" ? "Yes" : p.oneway === "-1" ? "Yes (reverse)" : "No";
        const roadTitle = p.name || p.ref || hwLabel[p.highway] || "Road";
        const vals = {
          "hap-name":     p.name     || "—",
          "hap-type":     hwLabel[p.highway] || p.highway || "—",
          "hap-ref":      p.ref      || "—",
          "hap-lanes":    p.lanes    || "—",
          "hap-surface":  p.surface  || "—",
          "hap-maxspeed": p.maxspeed ? p.maxspeed + " km/h" : "—",
          "hap-oneway":   oway,
        };
        Object.entries(vals).forEach(([id, val]) => { const el=$(id); if(el) el.textContent=val; });

        const hint  = $("hw-attr-hint");
        const table = $("hw-attr-table");
        if (hint)  hint.style.display  = "none";
        if (table) table.style.display = "";

        /* Ensure attribute panel is open */
        const panel = $("hw-attr-panel");
        const attrBtn = $("hw-attr-btn");
        if (panel) panel.style.display = "block";
        if (attrBtn) attrBtn.classList.add("hw-attr-btn-open");

        layer.bindPopup(
          `<div class="hw-attr-popup">
             <div class="hw-attr-title">${roadTitle}</div>
             <table class="hw-attr-table">
               ${Object.entries(vals).map(([,v],i)=>{
                 const k=["Name","Type","Ref / No.","Lanes","Surface","Max Speed","One Way"][i];
                 return `<tr><td class="hw-attr-key">${k}</td><td class="hw-attr-val">${v}</td></tr>`;
               }).join("")}
             </table>
           </div>`,
          { maxWidth: 230, className: "hw-attr-popup-wrap" }
        ).openPopup();
      });
    },
  }).addTo(nigeriaMap);

  /* Roads sit above state fill polygons; stations stay on top of roads */
  highwayLayer.bringToFront();
  if (stationLayer) stationLayer.bringToFront();
}

async function loadNigeriaHighways() {
  if (!nigeriaMap || highwaysLoaded) return;
  highwaysLoaded = true;

  const status = $("hw-load-status");

  function finishLoad(features) {
    buildHighwayLayer(features);
    if (status) status.textContent = `${features.length} road segments loaded`;
  }

  /* ── 1. Local GeoJSON file (instant — bundled with app) ── */
  try {
    const resp = await fetch("./public/data/nigeria_highways.geojson");
    if (resp.ok) {
      const gj = await resp.json();
      const features = Array.isArray(gj.features) ? gj.features : [];
      if (features.length > 0) { finishLoad(features); return; }
    }
  } catch (_) {}

  /* ── 2. localStorage cache (instant if previously fetched) ── */
  let features = null;
  try {
    const raw = localStorage.getItem(HW_CACHE_KEY);
    if (raw) {
      const { ts, f } = JSON.parse(raw);
      if (Date.now() - ts < HW_CACHE_TTL) features = f;
    }
  } catch (_) {}

  if (features) { finishLoad(features); return; }

  /* ── 3. Overpass API fallback (first visit, no local file) ── */
  if (status) status.textContent = "Loading roads…";

  const query = `[out:json][timeout:90];
area(3600192787)->.a;
(
  way["highway"~"^(motorway|trunk|primary)$"](area.a);
);
out geom;`;

  const endpoints = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
  ];

  let data = null;
  for (const url of endpoints) {
    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "data=" + encodeURIComponent(query),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      data = await resp.json();
      break;
    } catch (e) {
      console.warn("Overpass endpoint failed:", url, e.message);
    }
  }

  if (!data || !data.elements) {
    highwaysLoaded = false;
    if (status) status.textContent = "Failed to load roads";
    return;
  }

  features = data.elements
    .filter((el) => el.type === "way" && el.geometry)
    .map((el) => ({
      type: "Feature",
      properties: {
        highway:  el.tags?.highway  || "",
        name:     el.tags?.name     || "",
        ref:      el.tags?.ref      || "",
        lanes:    el.tags?.lanes    || "",
        surface:  el.tags?.surface  || "",
        maxspeed: el.tags?.maxspeed || "",
        oneway:   el.tags?.oneway   || "",
      },
      geometry: {
        type: "LineString",
        coordinates: el.geometry.map((pt) => [pt.lon, pt.lat]),
      },
    }));

  try {
    localStorage.setItem(HW_CACHE_KEY, JSON.stringify({ ts: Date.now(), f: features }));
  } catch (_) {}

  finishLoad(features);
}

function toggleHighways(show) {
  if (!nigeriaMap) return;
  /* Loading hasn't finished yet or previously failed — try again */
  if (show && !highwayLayer) { if (!highwaysLoaded) loadNigeriaHighways(); return; }
  if (!highwayLayer) return;
  if (show) {
    highwayLayer.addTo(nigeriaMap);
    highwayLayer.bringToFront();
    if (stationLayer) stationLayer.bringToFront();
  } else {
    highwayLayer.remove();
    const hint  = $("hw-attr-hint");
    const table = $("hw-attr-table");
    if (hint)  { hint.textContent = "Enable Major Highways first, then click any road on the map."; hint.style.display = ""; }
    if (table) table.style.display = "none";
  }
}

/* SVG fallback map */
function allCoordinateRings(geometry) {
  if (!geometry) return [];
  if (geometry.type === "Polygon") return geometry.coordinates;
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flat();
  return [];
}

function renderSvgMap(geoJson) {
  const host    = $("nigeria-map");
  const records = currentRecords();
  const byState = new Map(records.map((r) => [normalize(r.state), r]));
  const vals    = records.map((r) => r.fuelPrice).filter(Boolean);
  const min     = Math.min(...vals);
  const max     = Math.max(...vals);
  const allPts  = geoJson.features.flatMap((f) => allCoordinateRings(f.geometry).flat());
  const xs = allPts.map((p) => p[0]); const ys = allPts.map((p) => p[1]);
  const minX = Math.min(...xs); const maxX = Math.max(...xs);
  const minY = Math.min(...ys); const maxY = Math.max(...ys);
  const W = 900; const H = 680; const pad = 24;
  const proj = ([lon, lat]) => {
    const x = pad + ((lon - minX) / (maxX - minX)) * (W - pad * 2);
    const y = H - pad - ((lat - minY) / (maxY - minY)) * (H - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };
  const polygons = geoJson.features.map((f) => {
    const state = stateNameFromFeature(f);
    const rec   = byState.get(normalize(state));
    return allCoordinateRings(f.geometry).map((ring) =>
      `<polygon points="${ring.map(proj).join(" ")}" fill="${colorScale(rec?.fuelPrice, min, max)}" stroke="rgba(255,255,255,.55)" stroke-width="1"><title>${state} – PMS ${currency(rec?.fuelPrice)}</title></polygon>`
    ).join("");
  }).join("");

  /* Fuel-pump SVG markers for stations */
  const drops = fuelStations.slice(0, 1200).map((s) => {
    const x = pad + ((s.longitude - minX) / (maxX - minX)) * (W - pad * 2);
    const y = H - pad - ((s.latitude  - minY) / (maxY - minY)) * (H - pad * 2);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return "";
    return `<g transform="translate(${(x - 3.5).toFixed(1)},${(y - 9).toFixed(1)})">
      <rect x="1" y="2.5" width="6" height="8" rx="0.9" fill="#ffffff" stroke="#1a1a1a" stroke-width="0.5"/>
      <rect x="1.7" y="3.8" width="4.5" height="2.5" rx="0.5" fill="#1a1a1a"/>
      <rect x="0.5" y="10" width="7" height="1.2" rx="0.5" fill="#1a1a1a"/>
      <path d="M7 5 Q9 5 9.5 3.5" stroke="#1a1a1a" stroke-width="1.1" fill="none" stroke-linecap="round"/>
      <title>${s.name || s.brand || "Fuel station"}</title>
    </g>`;
  }).join("");

  host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Nigeria state map" style="display:block;width:100%;height:100%">${polygons}${drops}</svg>`;
}

/* ── Mini Nigeria SVG map for reports detail ──────────────── */
function renderStatePolygonSvg(selectedState, containerId) {
  const container = $(containerId);
  if (!container || !nigeriaGeoJson) { if (container) container.innerHTML = ""; return; }

  const allPts = nigeriaGeoJson.features.flatMap((f) => allCoordinateRings(f.geometry).flat());
  const xs = allPts.map((p) => p[0]); const ys = allPts.map((p) => p[1]);
  const minX = Math.min(...xs); const maxX = Math.max(...xs);
  const minY = Math.min(...ys); const maxY = Math.max(...ys);
  const W = 220; const H = 180; const pad = 10;
  const proj = ([lon, lat]) => {
    const x = pad + ((lon - minX) / (maxX - minX)) * (W - pad * 2);
    const y = H - pad - ((lat - minY) / (maxY - minY)) * (H - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };

  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const isLight = theme === "light";
  const baseFill   = isLight ? "#c8d8f0" : "#0f2040";
  const baseStroke = isLight ? "rgba(80,120,200,.35)" : "rgba(255,255,255,.3)";
  const hiColor    = "#a855f7";

  const polygons = nigeriaGeoJson.features.map((f) => {
    const name   = stateNameFromFeature(f);
    const isThis = normalize(name) === normalize(selectedState);
    const fill   = isThis ? hiColor : baseFill;
    const sw     = isThis ? 1.5 : 0.6;
    return allCoordinateRings(f.geometry).map((ring) =>
      `<polygon points="${ring.map(proj).join(" ")}" fill="${fill}" stroke="${baseStroke}" stroke-width="${sw}" opacity="${isThis ? 1 : 0.7}"/>`
    ).join("");
  }).join("");

  container.innerHTML = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:${H}px;display:block" aria-label="${selectedState} map">${polygons}</svg>`;
}

/* ── Fuel stations panel ──────────────────────────────────── */
let stationsFilter  = "";
let stationsShowAll = false;

function stateFromCoords(lat, lng) {
  if (!lat || !lng) return "";
  let nearest = "", minDist = Infinity;
  for (const [name, geo] of Object.entries(STATE_GEO_DATA)) {
    if (geo.lat == null || geo.lng == null) continue;
    const d = Math.abs(lat - geo.lat) + Math.abs(lng - geo.lng);
    if (d < minDist) { minDist = d; nearest = name; }
  }
  return minDist < 4 ? nearest : "";
}

function stationStateStr(s) {
  const candidates = [
    s.state, s["addr:state"], s["is_in:state"], s.county,
    s["addr:city"], s.city, s.town, s.village,
  ].filter(Boolean).map(String);

  for (const val of candidates) {
    const matched = stateNames.find((n) => normalize(val).includes(normalize(n)));
    if (matched) return matched;
  }

  const lat = parseFloat(s.latitude || s.lat || 0);
  const lng = parseFloat(s.longitude || s.lon || s.lng || 0);
  return stateFromCoords(lat, lng);
}

function renderStationsTable() {
  const tbody  = $("stations-tbody");
  const footer = $("stations-footer");
  if (!tbody) return;
  const q = stationsFilter.toLowerCase();
  const filtered = stationsFilter
    ? fuelStations.filter((s) => {
        const st = stationStateStr(s).toLowerCase();
        return (s.name || "").toLowerCase().includes(q) || (s.brand || "").toLowerCase().includes(q)
          || (s.operator || "").toLowerCase().includes(q) || st.includes(q)
          || (s.city || "").toLowerCase().includes(q);
      })
    : fuelStations;

  const PAGE = 500;
  const rows = stationsShowAll ? filtered : filtered.slice(0, PAGE);

  tbody.innerHTML = rows.map((s, i) => {
    const name = s.name || s.brand || "—";
    const st   = stationStateStr(s) || "—";
    const city = s.city || s.town || s.village || "—";
    return `<tr><td>${i + 1}</td><td class="td-name" title="${name}">${name}</td><td class="td-muted">${st}</td><td class="td-muted">${city}</td><td class="td-coord">${Number(s.latitude).toFixed(5)}</td><td class="td-coord">${Number(s.longitude).toFixed(5)}</td></tr>`;
  }).join("");

  if (footer) {
    const shown = rows.length;
    const total = filtered.length;
    let html = `Showing ${shown.toLocaleString()} of ${total.toLocaleString()} station${total !== 1 ? "s" : ""}`;
    if (!stationsShowAll && total > PAGE) {
      html += ` <button class="show-all-btn" onclick="stationsShowAll=true;renderStationsTable()">Show all ${total.toLocaleString()}</button>`;
    } else if (stationsShowAll && total > PAGE) {
      html += ` <button class="show-all-btn" onclick="stationsShowAll=false;renderStationsTable()">Show less</button>`;
    }
    footer.innerHTML = html;
  }
}

function initStationsPanel() {
  const countEl = $("stations-count");
  if (countEl) countEl.textContent = fuelStations.length.toLocaleString();
  const toggle = $("stations-toggle");
  const search = $("stations-search");
  toggle?.addEventListener("click", () => {
    stationsShowAll = false;
    showRightView("fuel-stations-section");
    renderStationsTable();
  });
  search?.addEventListener("input", (e) => {
    stationsFilter = e.target.value.trim();
    stationsShowAll = false;
    renderStationsTable();
  });
}

/* ── STATE CHARTS ─────────────────────────────────────────── */
function currentStateTab() {
  return document.querySelector(".stab.active")?.dataset.tab || "pms";
}

function plotStateCharts(state, tab) {
  if (typeof Plotly === "undefined") return;
  tab = tab || currentStateTab();
  const records = getStateData(state);
  const src     = activeYear ? records.filter((r) => r.year === activeYear) : records;
  const labels  = src.map((r) => `${r.month} ${String(r.year).slice(2)}`);
  const lay     = basePlotLayout();

  if (tab === "pms") {
    show("state-pms-chart"); hide("state-transport-chart");
    set("state-chart-lbl-1", "PMS Price Over Time (₦/L)"); set("state-chart-lbl-2", "");
    Plotly.newPlot("state-pms-chart", [{
      x: labels, y: src.map((r) => r.fuelPrice),
      mode: "lines+markers", name: "PMS Price",
      line:   { color: "#a855f7", width: 2.2, shape: "spline" },
      marker: { color: "#a855f7", size: 4.5 },
      fill: "tozeroy", fillcolor: "rgba(168,85,247,.12)",
    }], lay, plotCfg);

  } else if (tab === "transport") {
    hide("state-pms-chart"); show("state-transport-chart");
    set("state-chart-lbl-1", ""); set("state-chart-lbl-2", "Transport Modes Over Time (₦)");
    const hasT = src.filter((r) => TRANSPORT_MODES.some((m) => r[m.key]));
    const tLbl = hasT.map((r) => `${r.month} ${String(r.year).slice(2)}`);
    const traces = TRANSPORT_MODES.map((m) => ({
      x: tLbl, y: hasT.map((r) => r[m.key] || 0),
      name: m.label, type: "bar",
      marker: { color: m.color, opacity: 0.88 },
    }));
    Plotly.newPlot("state-transport-chart", traces, {
      ...lay, barmode: "stack", showlegend: true,
      height: 280,
      yaxis: { ...lay.yaxis, tickprefix: "₦" },
      legend: { orientation: "h", y: -0.48, x: 0, font: { size: 9 }, bgcolor: "rgba(0,0,0,0)" },
      margin: { t: 8, r: 10, b: 120, l: 58 },
    }, plotCfg);

  } else {
    hide("state-pms-chart"); show("state-transport-chart");
    set("state-chart-lbl-1", ""); set("state-chart-lbl-2", "Price Hike Over Time (%)");
    const baseline = src.find((r) => r.fuelPrice > 0);
    const pcts = src.map((r) => baseline?.fuelPrice ? ((r.fuelPrice - baseline.fuelPrice) / baseline.fuelPrice) * 100 : 0);
    Plotly.newPlot("state-transport-chart", [{
      x: labels, y: pcts, type: "bar",
      marker: { color: pcts.map((v) => v >= 0 ? "#f97316" : "#22c55e"), opacity: 0.88 },
    }], { ...lay, yaxis: { ...lay.yaxis, ticksuffix: "%" } }, plotCfg);
  }
}

/* ── PMS vs Transport relationship diagram ────────────────── */
function plotPmsTransportDiagram(state) {
  if (typeof Plotly === "undefined") return;
  const el = $("pmt-chart");
  if (!el) return;

  const records = getStateData(state);
  const src     = activeYear ? records.filter((r) => r.year === activeYear) : records;
  if (!src.length) { set("pmt-state-label", state); return; }

  set("pmt-state-label", state);

  const labels = src.map((r) => `${r.month} ${String(r.year).slice(2)}`);

  const normalize100 = (arr) => {
    const base = arr.find((v) => v > 0) || 1;
    return arr.map((v) => v > 0 ? (v / base) * 100 : null);
  };

  const pmsVals = src.map((r) => r.fuelPrice);
  const traces = [
    {
      x: labels, y: normalize100(pmsVals),
      mode: "lines+markers", name: "PMS Price",
      line:   { color: "#a855f7", width: 2.5, shape: "spline" },
      marker: { color: "#a855f7", size: 4 },
    },
    ...TRANSPORT_MODES.map((m) => ({
      x: labels,
      y: normalize100(src.map((r) => r[m.key] || 0)),
      mode: "lines", name: m.label,
      line: { color: m.color, width: 1.8, shape: "spline" },
      opacity: 0.88,
    })),
  ];

  const lay = basePlotLayout({
    showlegend: false,
    yaxis:      { ...basePlotLayout().yaxis, ticksuffix: "", title: { text: "Index (base=100)", font: { size: 8 } } },
    margin:     { t: 8, r: 10, b: 36, l: 58 },
  });

  Plotly.newPlot("pmt-chart", traces, lay, plotCfg);
  renderChartLegend("pmt-legend", [
    { name: "PMS Price", color: "#a855f7" },
    ...TRANSPORT_MODES.map((m) => ({ name: m.label, color: m.color })),
  ]);
}

/* ── Time Series section ──────────────────────────────────── */
function plotTimeSeries(state) {
  if (typeof Plotly === "undefined") return;
  const el = $("ts-chart");
  if (!el) return;

  /* Use ALL data (no year filter) for the full date range */
  const records = getStateData(state);
  if (!records.length) return;

  set("ts-state-label", state);
  set("ts-subtitle",    `PMS & all transport modes — ${records[0].month} ${records[0].year} to ${records.at(-1).month} ${records.at(-1).year}`);

  const labels = records.map((r) => `${r.month} ${String(r.year).slice(2)}`);

  const traces = [
    {
      x: labels, y: records.map((r) => r.fuelPrice),
      mode: "lines+markers", name: "PMS (₦/L)",
      line:   { color: "#a855f7", width: 2.5, shape: "spline" },
      marker: { size: 4, color: "#a855f7" },
      fill: "tozeroy", fillcolor: "rgba(168,85,247,.07)",
      yaxis: "y",
    },
    ...TRANSPORT_MODES.map((m) => ({
      x: labels,
      y: records.map((r) => r[m.key] || null),
      mode: "lines+markers", name: m.label,
      line:   { color: m.color, width: 1.8, shape: "spline" },
      marker: { size: 3, color: m.color },
      yaxis: "y2",
    })),
  ];

  const lay = basePlotLayout({
    showlegend: false,
    margin: { t: 10, r: 60, b: 40, l: 58 },
    yaxis:  { ...basePlotLayout().yaxis, title: { text: "PMS ₦/L", font: { size: 8 } }, tickprefix: "₦" },
    yaxis2: {
      overlaying: "y", side: "right",
      gridcolor: "rgba(100,140,200,.04)",
      tickfont: { size: 7 },
      title: { text: "Transport ₦", font: { size: 8 } },
      tickprefix: "₦",
    },
  });

  Plotly.newPlot("ts-chart", traces, lay, plotCfg);
  renderChartLegend("ts-legend", [
    { name: "PMS (₦/L)", color: "#a855f7" },
    ...TRANSPORT_MODES.map((m) => ({ name: m.label, color: m.color })),
  ]);
}

/* ── National Avg PMS trend chart (General Report) ────────── */
function renderNationalChart() {
  if (typeof Plotly === "undefined") return;
  const el = $("gr-national-chart");
  if (!el) return;

  /* Build period → avg PMS across all states */
  const byPeriod = new Map();
  allData.forEach((r) => {
    if (!r.fuelPrice) return;
    const key = `${r.year}-${String(monthOrder.indexOf(r.month)).padStart(2, "0")}`;
    const label = `${r.month} ${String(r.year).slice(2)}`;
    if (!byPeriod.has(key)) byPeriod.set(key, { label, sum: 0, cnt: 0 });
    const e = byPeriod.get(key);
    e.sum += r.fuelPrice; e.cnt += 1;
  });

  const sorted = [...byPeriod.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const labels = sorted.map(([, v]) => v.label);
  const avgs   = sorted.map(([, v]) => v.sum / v.cnt);

  const lay = basePlotLayout({
    margin: { t: 6, r: 10, b: 48, l: 54 },
    yaxis: { ...basePlotLayout().yaxis, tickprefix: "₦" },
  });

  Plotly.newPlot("gr-national-chart", [{
    x: labels, y: avgs,
    mode: "lines+markers", name: "Avg PMS",
    line:   { color: "#a855f7", width: 2.2, shape: "spline" },
    marker: { color: "#a855f7", size: 4 },
    fill: "tozeroy", fillcolor: "rgba(168,85,247,.1)",
  }], lay, plotCfg);
}

/* ── Report state detail ──────────────────────────────────── */
function renderReportStateDetail(state) {
  if (!state) return;

  const records = getStateData(state);
  const latest  = records.at(-1);
  const first   = records.find((r) => r.fuelPrice > 0);
  const hike    = first?.fuelPrice && latest?.fuelPrice
    ? ((latest.fuelPrice - first.fuelPrice) / first.fuelPrice) * 100 : 0;
  const rank    = rankState(state);

  set("rd-state-name", state);
  set("rd-pms",   currency(latest?.fuelPrice));
  set("rd-rank",  `${rank} / 37`);
  set("rd-hike",  `${hike >= 0 ? "+" : ""}${hike.toFixed(1)}%`);

  /* State overview description */
  const geo      = STATE_GEO_DATA[state] || {};
  const knownFor = STATE_KNOWN_FOR[state] || "diverse economic and cultural activities";
  const overviewEl = $("rd-overview");
  if (overviewEl) {
    const popStr  = geo.pop  ? `~${(geo.pop / 1e6).toFixed(1)}M people` : "";
    const areaStr = geo.area ? `${geo.area.toLocaleString()} km²` : "";
    const locStr  = geo.lat && geo.lng
      ? `${geo.lat.toFixed(2)}°N, ${geo.lng.toFixed(2)}°E` : "";
    const hikeDir = hike >= 0 ? "risen" : "fallen";
    overviewEl.innerHTML =
      `${state.replace("Federal Capital Territory","FCT")} State${popStr ? ` (${popStr})` : ""}${areaStr ? `, covering ${areaStr}` : ""}${locStr ? ` — ${locStr}` : ""}. ` +
      `Known for <strong>${knownFor}</strong>. ` +
      `PMS price has ${hikeDir} by <strong>${Math.abs(hike).toFixed(1)}%</strong> since ` +
      `${first?.month || ""} ${first?.year || ""}, ranking <strong>${rank} of 37</strong> states nationally.`;
  }

  /* Transport mode prices */
  const modesEl = $("rd-modes");
  if (modesEl) {
    modesEl.innerHTML = TRANSPORT_MODES.map((m) => `
      <div class="rd-mode-item">
        <span class="rd-mode-dot" style="background:${m.color}"></span>
        <span class="rd-mode-label">${m.label}</span>
        <strong class="rd-mode-val">${currency(latest?.[m.key] || 0, 0)}</strong>
      </div>`).join("");
  }

  /* PMS price hike chart */
  if (typeof Plotly !== "undefined") {
    const src     = activeYear ? records.filter((r) => r.year === activeYear) : records;
    const labels  = src.map((r) => `${r.month} ${String(r.year).slice(2)}`);
    const baseVal = src.find((r) => r.fuelPrice > 0)?.fuelPrice || 1;
    const pcts    = src.map((r) => r.fuelPrice ? ((r.fuelPrice - baseVal) / baseVal) * 100 : null);

    const lay = basePlotLayout({
      margin: { t: 6, r: 10, b: 60, l: 52 },
      yaxis:  { ...basePlotLayout().yaxis, ticksuffix: "%" },
      showlegend: false,
    });

    Plotly.newPlot("rd-chart", [
      {
        x: labels, y: src.map((r) => r.fuelPrice),
        mode: "lines+markers", name: "PMS ₦/L",
        line: { color: "#a855f7", width: 2, shape: "spline" },
        marker: { color: "#a855f7", size: 4 },
        fill: "tozeroy", fillcolor: "rgba(168,85,247,.1)",
        yaxis: "y",
      },
      {
        x: labels, y: pcts,
        mode: "lines", name: "Hike %",
        line: { color: "#f97316", width: 1.5, shape: "spline", dash: "dot" },
        yaxis: "y2",
      },
    ], {
      ...lay,
      yaxis:  { ...lay.yaxis, title: { text: "PMS ₦/L", font: { size: 8 } }, tickprefix: "₦" },
      yaxis2: {
        overlaying: "y", side: "right",
        gridcolor: "rgba(100,140,200,.04)",
        tickfont: { size: 7 },
        title: { text: "Hike %", font: { size: 8 } },
        ticksuffix: "%",
      },
      showlegend: true,
      legend: { orientation: "h", y: -0.28, font: { size: 8 } },
      margin: { t: 6, r: 50, b: 72, l: 52 },
    }, plotCfg);
  }

  /* Download btn for this state */
  const dlBtn = $("rd-dl-btn");
  if (dlBtn) {
    dlBtn.onclick = () => downloadStateReport(state);
  }
}

/* ── Download helpers ─────────────────────────────────────── */
function buildCsvRows(state) {
  const rows = getStateData(state);
  const header = ["State","Year","Month","PMS Price (₦/L)","Air Fare (₦)","Bus Intercity (₦)","Bus Within City (₦)","Motorcycle/Okada (₦)","Water Transport (₦)","Total Transport (₦)"];
  const data   = rows.map((r) => [
    r.state, r.year, r.month, r.fuelPrice,
    r.air_fare || 0, r.bus_intercity || 0, r.bus_within_city || 0,
    r.motorcycle_okada || 0, r.water_transport || 0, r.transportCost || 0,
  ]);
  return [header, ...data].map((row) => row.join(",")).join("\n");
}

function triggerDownload(content, filename, type = "text/csv;charset=utf-8") {
  const blob = new Blob([content], { type });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename; link.click();
  URL.revokeObjectURL(url);
}

async function downloadStateReport(state) {
  let chartImg = "";
  try { chartImg = await Plotly.toImage("rd-chart", { format: "png", width: 700, height: 240, scale: 2 }); } catch {}
  openPrintWindow(buildStateReportPdfHtml(state, chartImg));
}

async function downloadNationalReport() {
  /* Ensure the national chart exists by rendering it */
  renderNationalChart();
  await new Promise((r) => setTimeout(r, 350));
  let chartImg = "";
  try { chartImg = await Plotly.toImage("gr-national-chart", { format: "png", width: 700, height: 240, scale: 2 }); } catch {}
  openPrintWindow(buildGeneralReportPdfHtml(chartImg));
}

/* ── State Report PDF ─────────────────────────────────────── */
function buildStateReportPdfHtml(state, chartImg) {
  const records = getStateData(state);
  const latest  = records.at(-1);
  const first   = records.find((r) => r.fuelPrice > 0);
  const hike    = first?.fuelPrice && latest?.fuelPrice
    ? ((latest.fuelPrice - first.fuelPrice) / first.fuelPrice) * 100 : 0;
  const rank    = rankState(state);
  const geo     = STATE_GEO_DATA[state] || {};
  const knownFor = STATE_KNOWN_FOR[state] || "diverse economic activities and cultural heritage";
  const dateGen = new Date().toLocaleDateString("en-NG", { day:"2-digit", month:"long", year:"numeric" });
  const period  = latest ? `${latest.month} ${latest.year}` : "—";
  const stnCount = geo.stationsEst ? `${geo.stationsEst} (est.)` :
    (fuelStations.filter((fs) => normalize(stationStateStr(fs)).includes(normalize(state))).length || "—");

  const modeRows = TRANSPORT_MODES.map((m) => `
    <tr><td>${m.label}</td><td style="font-weight:700;color:#1e3a5f">₦${(latest?.[m.key]||0).toLocaleString()}</td></tr>`).join("");

  const tShare = latest ? ((latest.transportCost || 0) / 70000 * 100).toFixed(1) : "—";
  const litres = latest?.fuelPrice ? (70000 / latest.fuelPrice).toFixed(0) : "—";
  const hikeStr = `${hike >= 0 ? "+" : ""}${hike.toFixed(1)}%`;

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <title>${state} State Report — GeoInfotech</title>${_pdfStyles()}
  <style>
    .geo-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; }
    .geo-col { border:1px solid #dde4f0; border-radius:5px; overflow:hidden; }
    .geo-col-hd { background:#1e3a5f; color:#fff; padding:6px 10px; font-weight:700; font-size:9.5pt; }
    .kpi-row { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin:10px 0; }
    .kpi-box { border:1.5px solid #1e3a5f; border-radius:6px; padding:8px 10px; text-align:center; }
    .kpi-val { font-size:15pt; font-weight:800; color:#1e3a5f; display:block; }
    .kpi-lbl { font-size:7.5pt; color:#555; text-transform:uppercase; letter-spacing:.06em; }
    .chart-img { width:100%; max-height:230px; object-fit:contain; border:1px solid #dde4f0; border-radius:5px; margin:8px 0; }
    .source-note { font-size:7.5pt; color:#888; margin-top:14px; text-align:right; border-top:1px solid #eee; padding-top:6px; }
  </style>
  </head>
  <body>
    <div class="hdr">
      <img src="${_pdfLogoSrc()}" alt="GeoInfotech">
      <div><h1>${state} State — Transportation Cost Report</h1>
        <p>Transportation Cost Intelligence Dashboard &nbsp;·&nbsp; Generated: ${dateGen}</p></div>
    </div>

    <h2>Geographic &amp; Demographic Profile</h2>
    <div class="geo-grid">
      <div class="geo-col">
        <div class="geo-col-hd">Location Details</div>
        <table>
          <tr><td style="font-weight:600;color:#555">Latitude</td><td>${geo.lat != null ? geo.lat.toFixed(3)+"° N" : "—"}</td></tr>
          <tr><td style="font-weight:600;color:#555">Longitude</td><td>${geo.lng != null ? geo.lng.toFixed(3)+"° E" : "—"}</td></tr>
          <tr><td style="font-weight:600;color:#555">Land Area</td><td>${geo.area ? geo.area.toLocaleString()+" km²" : "—"}</td></tr>
          <tr><td style="font-weight:600;color:#555">Population (est.)</td><td>${geo.pop ? geo.pop.toLocaleString() : "—"}</td></tr>
          <tr><td style="font-weight:600;color:#555">Fuel Stations (est.)</td><td>${stnCount}</td></tr>
        </table>
      </div>
      <div class="geo-col">
        <div class="geo-col-hd">State Overview</div>
        <table>
          <tr><td colspan="2" style="padding:8px 10px;line-height:1.65;font-size:8.5pt;color:#333">${state} State is popularly known for <strong>${knownFor}</strong>. It covers an area of ${geo.area ? geo.area.toLocaleString()+" km²" : "—"} with an estimated population of ${geo.pop ? geo.pop.toLocaleString() : "—"} people.</td></tr>
        </table>
      </div>
    </div>

    <h2>State Location — Nigeria Map</h2>
    ${buildNigeriaSvgMap({ highlightA: { name: state, color: "#7c3aed" }, width: 480, height: 290, showLabels: true })}
    ${_mapLegend([
      { color: "#7c3aed", label: state + " State" },
      { color: "#1a3252", label: "Other states" },
    ])}

    <h2>Fuel &amp; Transport Cost (${period})</h2>
    <div class="kpi-row">
      <div class="kpi-box"><span class="kpi-val">${currency(latest?.fuelPrice)}</span><span class="kpi-lbl">PMS Price (₦/L)</span></div>
      <div class="kpi-box"><span class="kpi-val">${rank} / 37</span><span class="kpi-lbl">National PMS Rank</span></div>
      <div class="kpi-box"><span class="kpi-val" style="color:${hike>0?"#b91c1c":"#15803d"}">${hikeStr}</span><span class="kpi-lbl">Price Hike (${first?.month||""} ${first?.year||""} – ${period})</span></div>
    </div>

    <h2>Transport Mode Costs</h2>
    <table>
      <thead><tr><th>Transport Mode</th><th>Current Fare (₦)</th></tr></thead>
      <tbody>${modeRows}</tbody>
    </table>

    ${chartImg ? `<h2>PMS Price Trend &amp; Percentage Change</h2><img class="chart-img" src="${chartImg}" alt="PMS price trend chart for ${state}">` : ""}

    <h2>Effect of PMS &amp; Transport Cost Hike on Citizens</h2>
    <div class="impact">
      <p>Based on Nigeria's national minimum wage of <strong>₦70,000/month</strong> (2024), a resident of
      <strong>${state}</strong> spending approximately <strong>${tShare}%</strong> of monthly income on basic
      transport faces significant financial strain. With PMS priced at <strong>${currency(latest?.fuelPrice)}</strong> per litre,
      a full monthly wage buys roughly <strong>${litres} litres</strong> of petrol.</p>

      <p>The cumulative fuel price increase of <strong style="color:${hike>0?"#b91c1c":"#15803d"}">${hikeStr}</strong>
      since ${first?.month||""} ${first?.year||""} has cascaded directly into higher transport fares across all modes —
      bus intercity (₦${(latest?.bus_intercity||0).toLocaleString()}), bus within city
      (₦${(latest?.bus_within_city||0).toLocaleString()}), and motorcycle/okada
      (₦${(latest?.motorcycle_okada||0).toLocaleString()}).
      These cost increases reduce household disposable income, limiting access to food, healthcare, education,
      and other essentials — disproportionately affecting low-income and rural residents in ${state}.</p>

      <p>Higher transport costs also inflate the price of goods and services throughout the state, as businesses
      pass on rising logistics expenses to consumers. Market traders, artisans, and daily-wage earners in
      ${state} face compounded pressure from both elevated fuel costs and the downstream inflationary effects
      on basic commodities.</p>
    </div>

    <div class="source-note">
      Data Source: National Bureau of Statistics (NBS) — PMS Price Watch Survey &amp; Transport Cost Survey<br>
      Boundaries: geoBoundaries (CC-BY-4.0) &nbsp;·&nbsp; Analysis period: ${first?.month||""} ${first?.year||""} – ${period}
    </div>
    ${_pdfFooter()}
  </body></html>`;
}

/* ── General Report PDF ───────────────────────────────────── */
function buildGeneralReportPdfHtml(chartImg) {
  const src    = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
  const sorted = sortRecords(src);
  const period = sorted.length
    ? `${sorted[0].month} ${sorted[0].year} – ${sorted.at(-1).month} ${sorted.at(-1).year}` : "—";
  const dateGen = new Date().toLocaleDateString("en-NG", { day:"2-digit", month:"long", year:"numeric" });

  /* National averages */
  const periodRecs = currentRecords();
  const natAvgPms = average(periodRecs, "fuelPrice");
  const hikeData  = computeAllStateHikes().sort((a, b) => (b.pms ?? -99) - (a.pms ?? -99));
  const top5 = hikeData.slice(0, 5);
  const top5Rows = top5.map((row, i) =>
    `<tr><td>${i+1}</td><td><strong>${row.state}</strong></td>
     <td style="color:#b91c1c;font-weight:700">${row.pms != null ? "+" + row.pms.toFixed(1)+"%" : "N/A"}</td></tr>`
  ).join("");

  /* State notes table */
  const stateNotes = stateNames.map((s) => {
    const geo = STATE_GEO_DATA[s] || {};
    const recs = sortRecords(src.filter((r) => normalize(r.state) === normalize(s)));
    const lat  = recs.at(-1);
    return `<tr>
      <td><strong>${s}</strong></td>
      <td style="font-size:8pt">${geo.pop ? (geo.pop/1e6).toFixed(1)+"M" : "—"}</td>
      <td style="font-size:8pt">${geo.area ? geo.area.toLocaleString()+" km²" : "—"}</td>
      <td style="font-size:8pt">${lat?.fuelPrice ? "₦"+lat.fuelPrice.toLocaleString() : "—"}</td>
      <td style="font-size:7.5pt;color:#555;max-width:180px">${STATE_KNOWN_FOR[s] || "—"}</td>
    </tr>`;
  }).join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <title>General Report — GeoInfotech</title>${_pdfStyles()}
  <style>
    .intro-box { background:#f0f9ff; border:1px solid #bae6fd; border-radius:5px; padding:10px 13px; margin-bottom:13px; }
    .kpi-row { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:10px 0 14px; }
    .kpi-box { border:1.5px solid #1e3a5f; border-radius:6px; padding:9px 11px; text-align:center; }
    .kpi-val { font-size:14pt; font-weight:800; color:#1e3a5f; display:block; }
    .kpi-lbl { font-size:7.5pt; color:#555; text-transform:uppercase; letter-spacing:.06em; }
    .chart-img { width:100%; max-height:220px; object-fit:contain; border:1px solid #dde4f0; border-radius:5px; margin:8px 0; }
    .source-box { background:#fffbeb; border:1px solid #fbbf24; border-radius:4px; padding:8px 12px; margin-top:13px; font-size:8pt; }
  </style>
  </head>
  <body>
    <div class="hdr">
      <img src="${_pdfLogoSrc()}" alt="GeoInfotech">
      <div><h1>General Report — National PMS &amp; Transport Cost</h1>
        <p>Transportation Cost Intelligence Dashboard &nbsp;·&nbsp; Generated: ${dateGen} &nbsp;·&nbsp; Period: ${period}</p></div>
    </div>

    <h2>What Is PMS?</h2>
    <div class="intro-box">
      <p><strong>Premium Motor Spirit (PMS)</strong>, commonly known as petrol or gasoline, is the most widely consumed
      liquid fuel in Nigeria used primarily to power cars, motorcycles, generators, and small engines.
      It is a refined petroleum product derived from crude oil and is the dominant fuel for ground transportation
      across all 36 states and the Federal Capital Territory.</p>
      <p>PMS pricing in Nigeria is monitored monthly by the <strong>National Bureau of Statistics (NBS)</strong>
      through its PMS Price Watch survey, which collects retail pump prices at fuel stations across all states.
      Since the removal of the federal fuel subsidy in May 2023, PMS prices have risen significantly and now
      reflect market forces, crude oil exchange rates, and regional distribution costs.</p>
    </div>

    <h2>About Nigeria</h2>
    <div class="intro-box">
      <p>Nigeria is a federal republic in West Africa, bordered by Benin (west), Niger (north-west), Chad (north-east),
      Cameroon (east), and the Gulf of Guinea / Atlantic Ocean (south).
      It spans approximately <strong>4.3°N – 13.9°N latitude</strong> and <strong>2.7°E – 14.7°E longitude</strong>,
      covering a land area of <strong>923,768 km²</strong>.</p>
      <p>Nigeria is Africa's most populous country with an estimated population exceeding
      <strong>220 million people</strong> (2023 projection). It is divided into <strong>36 states</strong> plus the
      Federal Capital Territory (Abuja). The country is the largest economy in Africa by GDP, driven primarily by
      oil and gas exports, agriculture, telecommunications, and trade. English is the official language, with over
      500 indigenous languages spoken across the nation's diverse ethnic groups.</p>
      <p>Key geographic zones include the tropical rainforest belt in the south, the Guinea Savannah in the
      middle-belt, and the Sudan/Sahel Savannah in the north. Major rivers — the Niger and Benue — converge at
      Lokoja, Kogi State, draining into the Atlantic through the vast Niger Delta.</p>
    </div>

    <h2>Nigeria PMS Price Map (${period})</h2>
    ${buildNigeriaSvgMap({ colorByPms: true, width: 480, height: 300, showLabels: true, lightTheme: true })}
    ${_mapLegend([
      { color: "#65a30d", label: "Lower PMS price" },
      { color: "#fbbf24", label: "Mid-range PMS" },
      { color: "#ef4444", label: "Higher PMS price" },
    ])}

    <h2>Key National Indicators (${period})</h2>
    <div class="kpi-row">
      <div class="kpi-box"><span class="kpi-val">₦${natAvgPms.toLocaleString(undefined,{maximumFractionDigits:0})}</span><span class="kpi-lbl">National Avg PMS Price</span></div>
      <div class="kpi-box"><span class="kpi-val">37</span><span class="kpi-lbl">States Monitored</span></div>
      <div class="kpi-box"><span class="kpi-val">${top5[0]?.pms != null ? "+"+top5[0].pms.toFixed(1)+"%" : "—"}</span><span class="kpi-lbl">Highest PMS Hike (${top5[0]?.state || "—"})</span></div>
    </div>

    <h2>Top 5 States by PMS Price Hike (%)</h2>
    <table>
      <thead><tr><th>#</th><th>State</th><th>PMS Price Hike</th></tr></thead>
      <tbody>${top5Rows}</tbody>
    </table>

    ${chartImg ? `<h2>National Average PMS Price Trend</h2><img class="chart-img" src="${chartImg}" alt="National average PMS price trend">` : ""}

    <h2>Effect of Rising PMS &amp; Transport Costs on Citizens</h2>
    <div class="impact">
      <p>The removal of the petrol subsidy and the subsequent rise in PMS prices have had far-reaching consequences
      for millions of Nigerians. Transport fares — which directly track fuel prices — have increased by up to
      <strong>80–120%</strong> across different modes and states between 2024 and 2026.
      For a worker earning Nigeria's national minimum wage of <strong>₦70,000/month</strong>, a single round-trip
      commute now consumes a disproportionately large share of daily earnings.</p>

      <p>The cost of transporting food, goods, and raw materials has risen in parallel, feeding into <strong>general
      inflation</strong> and reducing household purchasing power. Small businesses, market traders, and farmers
      face higher logistics costs that ultimately raise consumer prices. Healthcare access is compromised as
      patients in rural areas struggle to afford transport to hospitals. School enrolment in some states has
      dipped as families prioritise food over education-related travel costs.</p>

      <p>Low-income households — who spend a higher proportion of income on transport and food — are most
      severely affected. Women, who predominantly use local and inter-city transport for trade and domestic
      responsibilities, face compounded vulnerability. The data shows a strong correlation between states with
      higher PMS prices and those reporting the greatest household budget stress.</p>

      <p>Motorcycle (Okada) transport, water transport, and bus intercity fares have all increased, suggesting
      that no transport mode has been insulated from the fuel price shock. Policymakers and development
      organisations must account for these regional disparities when designing interventions.</p>
    </div>

    <h2>State-by-State Reference</h2>
    <table style="font-size:8pt">
      <thead><tr><th>State</th><th>Pop. (est.)</th><th>Area</th><th>Latest PMS</th><th>Known For</th></tr></thead>
      <tbody>${stateNotes}</tbody>
    </table>

    <div class="source-box">
      <strong>Data Sources:</strong><br>
      • National Bureau of Statistics (NBS) — PMS Price Watch Survey (monthly retail pump prices, 2024–2026)<br>
      • National Bureau of Statistics (NBS) — Transport Cost Survey (Bus Intercity, Bus City, Okada, Water, Air Fare)<br>
      • geoBoundaries (CC-BY-4.0) — Nigeria state administrative boundaries<br>
      • OpenStreetMap contributors — Fuel station locations<br>
      • World Bank / NPC — Population and demographic estimates
    </div>
    ${_pdfFooter()}
  </body></html>`;
}

/* ── Compute all-state hike percentages ───────────────────── */
function computeAllStateHikes() {
  return stateNames.map((state) => {
    const src  = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
    const recs = sortRecords(src.filter((r) => normalize(r.state) === normalize(state)));
    const hikeFor = (key) => {
      const vals = recs.filter((r) => r[key] > 0);
      if (vals.length < 2) return null;
      const first = vals[0][key];
      const last  = vals.at(-1)[key];
      return ((last - first) / first) * 100;
    };
    return {
      state,
      pms:      hikeFor("fuelPrice"),
      bus_ic:   hikeFor("bus_intercity"),
      bus_city: hikeFor("bus_within_city"),
      okada:    hikeFor("motorcycle_okada"),
      water:    hikeFor("water_transport"),
      air:      hikeFor("air_fare"),
    };
  });
}

/* ── Render hike tracker table ────────────────────────────── */
function renderHikeTrackerSection() {
  const wrap = $("ht-table-wrap");
  if (!wrap) return;

  const data = computeAllStateHikes().sort((a, b) => (b.pms ?? -Infinity) - (a.pms ?? -Infinity));

  const hikeColor = (v) => {
    if (v === null) return "var(--muted)";
    if (v > 20)  return "#ef4444";
    if (v > 10)  return "#f97316";
    if (v > 0)   return "#fbbf24";
    if (v < -5)  return "#22c55e";
    return "var(--muted)";
  };

  const cell = (v) => {
    if (v === null) return `<td class="ht-cell ht-na">—</td>`;
    const col = hikeColor(v);
    return `<td class="ht-cell" style="color:${col};font-weight:600">${v >= 0 ? "+" : ""}${v.toFixed(1)}%</td>`;
  };

  /* update subtitle */
  const src    = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
  const sorted = sortRecords(src);
  if (sorted.length) {
    const p = `${sorted[0].month} ${sorted[0].year} – ${sorted.at(-1).month} ${sorted.at(-1).year}`;
    set("ht-period", `PMS & all transport modes — % change (${p})`);
  }

  wrap.innerHTML = `
    <div class="ht-scroll">
      <table class="ht-table">
        <thead>
          <tr>
            <th class="ht-th">#</th>
            <th class="ht-th">State</th>
            <th class="ht-th">PMS (₦/L)</th>
            <th class="ht-th">Bus Intercity</th>
            <th class="ht-th">Bus City</th>
            <th class="ht-th">Okada</th>
            <th class="ht-th">Water</th>
            <th class="ht-th">Air Fare</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((row, i) => `
            <tr class="ht-row">
              <td class="ht-num">${i + 1}</td>
              <td class="ht-state">${row.state}</td>
              ${cell(row.pms)}
              ${cell(row.bus_ic)}
              ${cell(row.bus_city)}
              ${cell(row.okada)}
              ${cell(row.water)}
              ${cell(row.air)}
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

/* ── Hike tracker nav ─────────────────────────────────────── */
function initHikeTrackerNav() {
  const nav = $("nav-hike-tracker");
  if (!nav) return;
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("hike-tracker");
    renderHikeTrackerSection();
  });
}

/* ── PDF helpers (browser print-window) ──────────────────── */
function openPrintWindow(htmlContent) {
  const win = window.open("", "_blank");
  if (!win) { alert("Please allow pop-ups to download the PDF report."); return; }
  win.document.write(htmlContent);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 750);
}

function _pdfLogoSrc() {
  return _pdfLogoBase64 || "./public/geoinfotech-logo.gif";
}

async function loadPdfLogo() {
  try {
    const resp = await fetch("./public/geoinfotech-logo.gif");
    if (!resp.ok) return;
    const blob = await resp.blob();
    _pdfLogoBase64 = await new Promise((res) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.readAsDataURL(blob);
    });
  } catch { /* non-fatal */ }
}

function _pdfStyles() {
  return `<style>
    @page { margin: 13mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10pt; color: #1a1a1a; background: #fff; display: flex; flex-direction: column; min-height: 96vh; }
    .hdr  { display: flex; align-items: center; gap: 13px; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px; margin-bottom: 13px; }
    .hdr img { width: 42px; height: 42px; object-fit: contain; }
    .hdr h1  { font-size: 13.5pt; font-weight: 700; color: #1e3a5f; }
    .hdr p   { font-size: 8.5pt; color: #555; margin-top: 2px; }
    .meta    { font-size: 8.5pt; color: #555; margin-bottom: 11px; }
    h2  { font-size: 11pt; font-weight: 700; color: #1e3a5f; margin: 14px 0 7px; border-bottom: 1px solid #dde4f0; padding-bottom: 3px; }
    h3  { font-size: 10pt; font-weight: 700; color: #1e3a5f; margin-bottom: 7px; }
    p   { font-size: 9.5pt; line-height: 1.65; margin-bottom: 7px; }
    table { width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px; }
    thead th { background: #1e3a5f; color: #fff; padding: 6px 8px; text-align: left; white-space: nowrap; }
    tbody tr:nth-child(even) td { background: #f4f7fc; }
    tbody td { padding: 5px 8px; border-bottom: 1px solid #dde4f0; vertical-align: top; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin-bottom: 13px; }
    .col  { border: 1px solid #dde4f0; border-radius: 5px; overflow: hidden; }
    .col-hd { background: #1e3a5f; color: #fff; padding: 7px 11px; font-weight: 700; font-size: 10pt; }
    .col table { margin: 0; }
    .col td:first-child { font-weight: 600; color: #555; width: 45%; }
    .note  { background: #fffbeb; border: 1px solid #fbbf24; border-radius: 4px; padding: 7px 11px; margin-bottom: 11px; font-size: 8.5pt; color: #78350f; }
    .impact { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 5px; padding: 11px 13px; margin-top: 11px; }
    .ftr {
      margin-top: auto;
      padding-top: 14px;
      border-top: 2px solid #1e3a5f;
      font-size: 7.5pt;
      color: #555;
      text-align: center;
      line-height: 1.75;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }
    .ftr-logo { width: 48px; height: 48px; object-fit: contain; margin-bottom: 4px; }
    .ftr-name { font-size: 10.5pt; font-weight: 800; color: #1e3a5f; }
    .ftr-attr { font-size: 7pt; color: #999; margin-top: 3px; }
    .pos  { color: #b91c1c; font-weight: 700; }
    .neg  { color: #15803d; font-weight: 700; }
    .num  { color: #999; font-size: 8.5pt; text-align: right; }
  </style>`;
}

function _pdfFooter() {
  return `<div class="ftr">
    <img class="ftr-logo" src="${_pdfLogoSrc()}" alt="GeoInfotech logo">
    <div class="ftr-name">GeoInfotech</div>
    <div>Oluwalogbon House, Testing Ground Bus Stop, Obafemi Awolowo Way, Alausa, Ikeja, Lagos.</div>
    <div>Email: mail@geoinfotech.ng &nbsp;|&nbsp; contact@geoinfotech.ng &nbsp;·&nbsp; Phone: +234 816 322 2177 &nbsp;|&nbsp; +234 901 872 4833</div>
    <div class="ftr-attr">Data: NBS PMS Price Watch &nbsp;·&nbsp; Boundaries: geoBoundaries (CC-BY-4.0) &nbsp;·&nbsp; Built with VS Code &nbsp;·&nbsp; Built by Adeusi Adedolapo</div>
  </div>`;
}

/* ── Nigeria SVG map (PDF reports) ───────────────────────── */
function buildNigeriaSvgMap({
  width = 480, height = 310,
  highlightA = null,   /* { name, color } */
  highlightB = null,   /* { name, color } */
  colorByPms = false,
  showLabels = true,
  lightTheme = false,  /* white background, labels only on highlighted states */
} = {}) {
  if (!nigeriaGeoJson?.features?.length) return "";

  /* collect all coordinates to find bounding box */
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  const eachCoord = (f, cb) => {
    const g = f.geometry;
    if (!g) return;
    const rings = g.type === "MultiPolygon" ? g.coordinates.flat(1) : g.coordinates;
    rings.forEach(r => r.forEach(cb));
  };
  nigeriaGeoJson.features.forEach(f =>
    eachCoord(f, ([lng, lat]) => {
      if (lng < x0) x0 = lng; if (lng > x1) x1 = lng;
      if (lat < y0) y0 = lat; if (lat > y1) y1 = lat;
    })
  );
  if (!isFinite(x0)) return "";

  const pad = 14;
  const sc  = Math.min((width - pad*2) / (x1-x0), (height - pad*2) / (y1-y0));
  const dx  = (width  - (x1-x0)*sc) / 2;
  const dy  = (height - (y1-y0)*sc) / 2;
  const px  = lng => (dx + (lng-x0)*sc).toFixed(1);
  const py  = lat => (height - dy - (lat-y0)*sc).toFixed(1);

  const ringPath = r => r.map(([lng, lat], i) => `${i?"L":"M"}${px(lng)},${py(lat)}`).join("") + "Z";
  const featPath = f => {
    const g = f.geometry;
    if (!g) return "";
    const rings = g.type === "MultiPolygon" ? g.coordinates.flat(1) : g.coordinates;
    return rings.map(ringPath).join(" ");
  };

  /* PMS choropleth lookup */
  const pmsMap = new Map();
  let pMin = Infinity, pMax = -Infinity;
  if (colorByPms) {
    currentRecords().forEach(r => {
      if (r.fuelPrice > 0) {
        pmsMap.set(normalize(r.state), r.fuelPrice);
        if (r.fuelPrice < pMin) pMin = r.fuelPrice;
        if (r.fuelPrice > pMax) pMax = r.fuelPrice;
      }
    });
  }

  const hlA = highlightA ? normalize(highlightA.name) : null;
  const hlB = highlightB ? normalize(highlightB.name) : null;

  const centroid = f => {
    let sx = 0, sy = 0, n = 0;
    eachCoord(f, ([lng, lat]) => { sx += lng; sy += lat; n++; });
    return n ? [sx/n, sy/n] : [0, 0];
  };

  const abbr = name => {
    if (name === "Federal Capital Territory") return "FCT";
    const w = name.split(" ");
    return w.length === 1 ? name.slice(0, 3) : w.map(x => x[0]).join("").toUpperCase();
  };

  const pathEls = [], labelEls = [];

  nigeriaGeoJson.features.forEach(f => {
    const name = stateNameFromFeature(f);
    const norm = normalize(name);
    const d = featPath(f);
    if (!d) return;

    const isA = hlA && norm === hlA;
    const isB = hlB && norm === hlB;

    let fill, stroke, sw;
    if (lightTheme) {
      if (isA || isB) {
        fill   = isA ? highlightA.color : highlightB.color;
        stroke = "rgba(50,50,50,.7)"; sw = "1.8";
      } else {
        fill   = colorByPms ? colorScale(pmsMap.get(norm), pMin, pMax) : "#dce3ed";
        stroke = "rgba(120,140,165,.4)"; sw = ".5";
      }
    } else {
      fill   = colorByPms ? colorScale(pmsMap.get(norm), pMin, pMax) : (hlA || hlB ? "#0f1e30" : "#1a3252");
      stroke = (isA || isB) ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.28)";
      sw     = (isA || isB) ? "1.5" : ".5";
    }

    pathEls.push(`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`);

    if (showLabels) {
      const [cx, cy] = centroid(f);
      const isHL = isA || isB;
      if (lightTheme) {
        const fs = isHL ? 7 : 5.5;
        const fw = isHL ? "bold" : "normal";
        labelEls.push(`<text x="${px(cx)}" y="${py(cy)}" text-anchor="middle" dominant-baseline="middle" font-size="${fs}" fill="#111111" font-family="Arial,sans-serif" font-weight="${fw}">${name}</text>`);
      } else {
        const fs = isHL ? 7.5 : 5;
        const fw = isHL ? "bold" : "normal";
        const fc = isHL ? "#fff" : "rgba(255,255,255,.75)";
        labelEls.push(`<text x="${px(cx)}" y="${py(cy)}" text-anchor="middle" dominant-baseline="middle" font-size="${fs}" fill="${fc}" font-family="Arial,sans-serif" font-weight="${fw}">${name}</text>`);
      }
    }
  });

  const bgColor = lightTheme ? "#ffffff" : "#0a1628";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" style="width:100%;max-height:${height}px;border-radius:6px;display:block;border:1px solid #dde4f0">
  <rect width="${width}" height="${height}" fill="${bgColor}" rx="5"/>
  ${pathEls.join("\n  ")}
  ${labelEls.join("\n  ")}
</svg>`;
}

function _mapLegend(items) {
  return `<div style="display:flex;gap:16px;align-items:center;margin:5px 0 10px;font-size:8pt;flex-wrap:wrap">
    ${items.map(({ color, label }) =>
      `<span style="display:flex;align-items:center;gap:5px">
        <span style="display:inline-block;width:13px;height:13px;border-radius:2px;background:${color};flex-shrink:0"></span>${label}
      </span>`
    ).join("")}
  </div>`;
}

/* ── Price Hike Tracker PDF ───────────────────────────────── */
function buildHikeTrackerPdfHtml() {
  const data   = computeAllStateHikes().sort((a, b) => (b.pms ?? -99) - (a.pms ?? -99));
  const src    = activeYear ? allData.filter((r) => r.year === activeYear) : allData;
  const sorted = sortRecords(src);
  const period = sorted.length
    ? `${sorted[0].month} ${sorted[0].year} – ${sorted.at(-1).month} ${sorted.at(-1).year}` : "—";

  const fmt = (v) => v === null ? "N/A" : `${v >= 0 ? "+" : ""}${v.toFixed(1)}%`;
  const cls = (v) => v === null ? "" : v > 0 ? "pos" : v < 0 ? "neg" : "";

  const rows = data.map((row, i) => `
    <tr>
      <td class="num">${i + 1}</td>
      <td><strong>${row.state}</strong></td>
      <td class="${cls(row.pms)}">${fmt(row.pms)}</td>
      <td class="${cls(row.bus_ic)}">${fmt(row.bus_ic)}</td>
      <td class="${cls(row.bus_city)}">${fmt(row.bus_city)}</td>
      <td class="${cls(row.okada)}">${fmt(row.okada)}</td>
      <td class="${cls(row.water)}">${fmt(row.water)}</td>
      <td class="${cls(row.air)}">${fmt(row.air)}</td>
    </tr>`).join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <title>Price Hike Tracker — GeoInfotech</title>${_pdfStyles()}</head>
  <body>
    <div class="hdr">
      <img src="${_pdfLogoSrc()}" alt="GeoInfotech">
      <div><h1>Price Hike Tracker Report</h1>
        <p>Transportation Cost Intelligence Dashboard — GeoInfotech</p></div>
    </div>
    <p class="meta">Period: <strong>${period}</strong> &nbsp;·&nbsp;
      Generated: <strong>${new Date().toLocaleDateString("en-NG",{day:"2-digit",month:"long",year:"numeric"})}</strong></p>
    <div class="note">
      Hike % = percentage change from the first to the latest recorded period for each metric. &nbsp;
      <span class="pos">Red = price increase</span> &nbsp;|&nbsp;
      <span class="neg">Green = price decrease</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th><th>State</th><th>PMS (₦/L)</th><th>Bus Intercity</th>
          <th>Bus City</th><th>Okada</th><th>Water Transport</th><th>Air Fare</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    ${_pdfFooter()}
  </body></html>`;
}

function downloadHikeTrackerPdf() {
  openPrintWindow(buildHikeTrackerPdfHtml());
}

/* ── Compare States PDF ───────────────────────────────────── */
function buildComparePdfHtml(stateA, stateB, pmsImg = "", trnImg = "") {
  const recA = getStateData(stateA);
  const recB = getStateData(stateB);
  const latA = recA.at(-1);
  const latB = recB.at(-1);
  const fstA = recA.find((r) => r.fuelPrice > 0);
  const fstB = recB.find((r) => r.fuelPrice > 0);
  const geoA = STATE_GEO_DATA[stateA] || {};
  const geoB = STATE_GEO_DATA[stateB] || {};

  const countStn = (s, geo) => {
    const live = fuelStations.filter((fs) =>
      normalize(stationStateStr(fs)).includes(normalize(s))
    ).length;
    if (geo.stationsEst) return `${geo.stationsEst} (est.)`;
    return live || "—";
  };
  const stnA = countStn(stateA, geoA);
  const stnB = countStn(stateB, geoB);

  const hikeA = fstA && latA ? ((latA.fuelPrice - fstA.fuelPrice) / fstA.fuelPrice * 100) : 0;
  const hikeB = fstB && latB ? ((latB.fuelPrice - fstB.fuelPrice) / fstB.fuelPrice * 100) : 0;

  const minWage  = 70000;
  const tShareA  = latA ? ((latA.transportCost || 0) / minWage * 100).toFixed(1) : "—";
  const tShareB  = latB ? ((latB.transportCost || 0) / minWage * 100).toFixed(1) : "—";
  const litresA  = latA?.fuelPrice ? (minWage / latA.fuelPrice).toFixed(0) : "—";
  const litresB  = latB?.fuelPrice ? (minWage / latB.fuelPrice).toFixed(0) : "—";
  const densA    = (typeof stnA === "number" && geoA.pop)
    ? ((stnA / geoA.pop) * 100000).toFixed(2) : "—";
  const densB    = (typeof stnB === "number" && geoB.pop)
    ? ((stnB / geoB.pop) * 100000).toFixed(2) : "—";

  const gRow = (label, a, b) => `<tr><td>${label}</td><td>${a}</td><td>${b}</td></tr>`;

  const modeRows = TRANSPORT_MODES.map((m) => gRow(
    m.label + " (₦)",
    `₦${(latA?.[m.key] || 0).toLocaleString()}`,
    `₦${(latB?.[m.key] || 0).toLocaleString()}`
  )).join("");

  const dateGen = new Date().toLocaleDateString("en-NG", {day:"2-digit",month:"long",year:"numeric"});
  const latPeriod = latA ? `${latA.month} ${latA.year}` : "—";

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <title>Comparison: ${stateA} vs ${stateB} — GeoInfotech</title>${_pdfStyles()}</head>
  <body>
    <div class="hdr">
      <img src="${_pdfLogoSrc()}" alt="GeoInfotech">
      <div><h1>State Comparison Report</h1>
        <p>${stateA} vs ${stateB} &nbsp;·&nbsp; Transportation Cost Intelligence Dashboard</p></div>
    </div>
    <p class="meta">Generated: <strong>${dateGen}</strong> &nbsp;·&nbsp; Latest data: <strong>${latPeriod}</strong></p>

    <h2>Geographic &amp; Demographic Profile</h2>
    <div class="two-col">
      <div class="col">
        <div class="col-hd">${stateA} State</div>
        <table>
          <tr><td>Latitude</td><td>${geoA.lat != null ? geoA.lat.toFixed(3)+"° N" : "—"}</td></tr>
          <tr><td>Longitude</td><td>${geoA.lng != null ? geoA.lng.toFixed(3)+"° E" : "—"}</td></tr>
          <tr><td>Area</td><td>${geoA.area ? geoA.area.toLocaleString()+" km²" : "—"}</td></tr>
          <tr><td>Estimated Population</td><td>${geoA.pop ? geoA.pop.toLocaleString() : "—"}</td></tr>
          <tr><td>Fuel Stations (est.)</td><td>${stnA}</td></tr>
        </table>
      </div>
      <div class="col">
        <div class="col-hd">${stateB} State</div>
        <table>
          <tr><td>Latitude</td><td>${geoB.lat != null ? geoB.lat.toFixed(3)+"° N" : "—"}</td></tr>
          <tr><td>Longitude</td><td>${geoB.lng != null ? geoB.lng.toFixed(3)+"° E" : "—"}</td></tr>
          <tr><td>Area</td><td>${geoB.area ? geoB.area.toLocaleString()+" km²" : "—"}</td></tr>
          <tr><td>Estimated Population</td><td>${geoB.pop ? geoB.pop.toLocaleString() : "—"}</td></tr>
          <tr><td>Fuel Stations (est.)</td><td>${stnB}</td></tr>
        </table>
      </div>
    </div>

    <h2>States on the Map</h2>
    ${buildNigeriaSvgMap({
      highlightA: { name: stateA, color: "#7c3aed" },
      highlightB: { name: stateB, color: "#2563eb" },
      width: 480, height: 300, showLabels: true, lightTheme: true,
    })}
    ${_mapLegend([
      { color: "#7c3aed", label: stateA },
      { color: "#2563eb", label: stateB },
      { color: "#dce3ed", label: "Other states" },
    ])}

    <h2>Fuel &amp; Transport Cost (${latPeriod})</h2>
    <table>
      <thead><tr><th>Indicator</th><th>${stateA}</th><th>${stateB}</th></tr></thead>
      <tbody>
        ${gRow("PMS Price (₦/L)",
          `₦${(latA?.fuelPrice||0).toLocaleString()}`,
          `₦${(latB?.fuelPrice||0).toLocaleString()}`)}
        ${gRow(`PMS Price Hike (from ${fstA?.month||""} ${fstA?.year||""})`,
          `<span class="${hikeA>0?"pos":"neg"}">${hikeA.toFixed(1)}%</span>`,
          `<span class="${hikeB>0?"pos":"neg"}">${hikeB.toFixed(1)}%</span>`)}
        ${modeRows}
      </tbody>
    </table>

    <h2>Cost-of-Living Impact Analysis</h2>
    <table>
      <thead><tr><th>Indicator</th><th>${stateA}</th><th>${stateB}</th></tr></thead>
      <tbody>
        ${gRow("Monthly Transport Cost (₦)",
          `₦${(latA?.transportCost||0).toLocaleString()}`,
          `₦${(latB?.transportCost||0).toLocaleString()}`)}
        ${gRow("Transport as % of Min. Wage (₦70,000)", `${tShareA}%`, `${tShareB}%`)}
        ${gRow("Litres of PMS on Min. Wage", `${litresA} L`, `${litresB} L`)}
        ${gRow("Fuel Stations per 100,000 people", densA, densB)}
      </tbody>
    </table>

    ${pmsImg ? `<h2>PMS Price Trend</h2><img style="width:100%;max-height:240px;object-fit:contain;border:1px solid #dde4f0;border-radius:5px;margin-bottom:12px;display:block" src="${pmsImg}" alt="PMS comparison chart">` : ""}
    ${trnImg ? `<h2>Transport Mode Costs</h2><img style="width:100%;max-height:240px;object-fit:contain;border:1px solid #dde4f0;border-radius:5px;margin-bottom:12px;display:block" src="${trnImg}" alt="Transport cost comparison chart">` : ""}

    <div class="impact">
      <h3>Effect of Fuel &amp; Transport Cost on Way of Life</h3>
      <p>Based on Nigeria's national minimum wage of <strong>₦${minWage.toLocaleString()}/month</strong> (as of 2024),
      a worker in <strong>${stateA}</strong> spends approximately <strong>${tShareA}%</strong> of monthly income
      on basic transport, while a worker in <strong>${stateB}</strong> spends <strong>${tShareB}%</strong>.
      This squeeze on disposable income limits household savings, food expenditure, healthcare access, and children's education costs.</p>

      <p>The PMS price hike of <strong class="${hikeA>0?"pos":"neg"}">${hikeA.toFixed(1)}%</strong> in ${stateA}
      and <strong class="${hikeB>0?"pos":"neg"}">${hikeB.toFixed(1)}%</strong> in ${stateB}
      (measured from ${fstA?.month||""} ${fstA?.year||""} to ${latPeriod})
      has cascaded into higher food prices, inflated goods-transport logistics, and increased business
      operating costs — all of which erode real wages and purchasing power, disproportionately affecting
      low-income and rural households.</p>

      <p>A minimum-wage earner in ${stateA} can afford roughly <strong>${litresA} litres</strong> of petrol
      with their entire monthly salary; in ${stateB}, approximately <strong>${litresB} litres</strong>.
      With fuel station density at <strong>${densA}</strong> stations per 100,000 people in ${stateA}
      versus <strong>${densB}</strong> in ${stateB}, differences in fuel accessibility directly influence
      pump-price competitiveness — lower-density states typically face higher prices due to supply-chain costs
      and reduced market competition.</p>

      <p>Air fare costs (₦${(latA?.air_fare||0).toLocaleString()} in ${stateA};
      ₦${(latB?.air_fare||0).toLocaleString()} in ${stateB}) remain well beyond the reach of most residents
      earning at or near the minimum wage, further limiting economic mobility and regional integration.
      Intercity bus fares and motorcycle (Okada) costs represent the primary commuting burden for the majority
      of the working population in both states.</p>
    </div>

    <div style="font-size:7.5pt;color:#888;margin-top:12px;border-top:1px solid #eee;padding-top:6px;text-align:right">
      Data Source: NBS PMS Price Watch Survey &amp; Transport Cost Survey &nbsp;·&nbsp; Period: ${latPeriod}
    </div>
    ${_pdfFooter()}
  </body></html>`;
}

async function downloadComparePdf(stateA, stateB) {
  let pmsImg = "", trnImg = "";
  try { pmsImg = await Plotly.toImage("compare-pms-chart",       { format: "png", width: 700, height: 240, scale: 2 }); } catch {}
  try { trnImg = await Plotly.toImage("compare-transport-chart", { format: "png", width: 700, height: 280, scale: 2 }); } catch {}
  openPrintWindow(buildComparePdfHtml(stateA, stateB, pmsImg, trnImg));
}

/* ── Compare section ──────────────────────────────────────── */
function plotCompare(stateA, stateB) {
  if (typeof Plotly === "undefined") return;

  const recA = getStateData(stateA);
  const recB = getStateData(stateB);
  const latA = recA.at(-1);
  const latB = recB.at(-1);
  const fstA = recA.find((r) => r.fuelPrice > 0);
  const fstB = recB.find((r) => r.fuelPrice > 0);
  const hikeA = fstA && latA ? ((latA.fuelPrice - fstA.fuelPrice) / fstA.fuelPrice * 100) : 0;
  const hikeB = fstB && latB ? ((latB.fuelPrice - fstB.fuelPrice) / fstB.fuelPrice * 100) : 0;

  /* Summary banner */
  const summaryEl = $("compare-summary");
  if (summaryEl) {
    const diff = latA && latB ? Math.abs(latA.fuelPrice - latB.fuelPrice) : 0;
    const higher = latA && latB && latA.fuelPrice > latB.fuelPrice ? stateA : stateB;
    summaryEl.innerHTML = `
      <div class="cs-chip"><span class="cs-label">${stateA} PMS</span><strong class="cs-val" style="color:#a855f7">${currency(latA?.fuelPrice)}</strong><span class="cs-sub">${hikeA>=0?"+":""}${hikeA.toFixed(1)}% hike</span></div>
      <div class="cs-vs">VS</div>
      <div class="cs-chip"><span class="cs-label">${stateB} PMS</span><strong class="cs-val" style="color:#60a5fa">${currency(latB?.fuelPrice)}</strong><span class="cs-sub">${hikeB>=0?"+":""}${hikeB.toFixed(1)}% hike</span></div>
      <div class="cs-diff"><span>₦${diff.toLocaleString(undefined,{maximumFractionDigits:0})} difference</span><span class="cs-higher">${higher} is higher</span></div>`;
    summaryEl.classList.remove("hidden");
  }

  const labA = recA.map((r) => `${r.month} ${String(r.year).slice(2)}`);
  const labB = recB.map((r) => `${r.month} ${String(r.year).slice(2)}`);

  const abbr = (s) => s === "Federal Capital Territory" ? "FCT" : s;

  const pmsLay = basePlotLayout({
    showlegend: true,
    legend: { orientation: "h", y: -0.22, font: { size: 9 } },
    margin: { t: 8, r: 10, b: 60, l: 58 },
    yaxis: { ...basePlotLayout().yaxis, tickprefix: "₦" },
  });
  Plotly.newPlot("compare-pms-chart", [
    { x: labA, y: recA.map((r) => r.fuelPrice), mode: "lines+markers", name: abbr(stateA),
      line: { color: "#a855f7", width: 2.2, shape: "spline" }, marker: { size: 4 } },
    { x: labB, y: recB.map((r) => r.fuelPrice), mode: "lines+markers", name: abbr(stateB),
      line: { color: "#60a5fa", width: 2.2, shape: "spline", dash: "dot" }, marker: { size: 4 } },
  ], pmsLay, plotCfg);
  const modeLabels = TRANSPORT_MODES.map((m) => m.label);
  const valsA = TRANSPORT_MODES.map((m) => average(recA, m.key));
  const valsB = TRANSPORT_MODES.map((m) => average(recB, m.key));

  /* Horizontal bar chart — avoids x-axis label crowding and keeps legend readable */
  const trnBase = basePlotLayout();
  const trnLay = {
    ...trnBase,
    barmode: "group",
    showlegend: true,
    legend: { orientation: "h", y: -0.18, x: 0.5, xanchor: "center", font: { size: 9.5 } },
    margin: { t: 8, r: 20, b: 70, l: 118 },
    xaxis: {
      ...trnBase.yaxis,
      tickprefix: "₦",
      gridcolor: trnBase.yaxis?.gridcolor || "rgba(100,140,200,.08)",
      tickfont: { size: 8 },
    },
    yaxis: {
      ...trnBase.xaxis,
      tickfont: { size: 9 },
      automargin: true,
    },
  };
  Plotly.newPlot("compare-transport-chart", [
    { y: modeLabels, x: valsA, type: "bar", orientation: "h", name: abbr(stateA),
      marker: { color: "#a855f7", opacity: 0.88 } },
    { y: modeLabels, x: valsB, type: "bar", orientation: "h", name: abbr(stateB),
      marker: { color: "#60a5fa", opacity: 0.88 } },
  ], trnLay, plotCfg);
}

/* ── Select state ─────────────────────────────────────────── */
function rankState(state) {
  const ranked = currentRecords().sort((a, b) => b.fuelPrice - a.fuelPrice);
  return Math.max(1, ranked.findIndex((r) => normalize(r.state) === normalize(state)) + 1);
}

function selectState(state) {
  activeState = state;
  set("selected-state", state.replace("Federal Capital Territory", "FCT"));
  const sel = $("state-dropdown"); if (sel) sel.value = state;

  const records = getStateData(state);
  const latest  = records.at(-1);
  const first   = records[0];
  const hike    = first?.fuelPrice && latest?.fuelPrice
    ? ((latest.fuelPrice - first.fuelPrice) / first.fuelPrice) * 100 : 0;
  const rank    = rankState(state);

  if (latest) {
    set("tm-bus-ic",   currency(latest.bus_intercity    || 0, 0));
    set("tm-bus-city", currency(latest.bus_within_city  || 0, 0));
    set("tm-okada",    currency(latest.motorcycle_okada || 0, 0));
    set("tm-water",    currency(latest.water_transport  || 0, 0));
    set("tm-air",      currency(latest.air_fare         || 0, 0));
  }

  const kpiEl = $("state-kpis");
  if (kpiEl) {
    kpiEl.innerHTML = `
      <div class="state-kpi-chip">
        <span class="skc-val">${currency(latest?.fuelPrice)}</span>
        <span class="skc-label">PMS Price</span>
        <span class="skc-sub">${latest?.month || ""} ${latest?.year || ""}</span>
      </div>
      <div class="state-kpi-chip">
        <span class="skc-val ${hike >= 0 ? "rise" : "fall"}">${hike.toFixed(1)}% ${hike >= 0 ? "↑" : "↓"}</span>
        <span class="skc-label">Price Hike</span>
        <span class="skc-sub">${first?.month || ""} ${first?.year || ""} – ${latest?.month || ""} ${latest?.year || ""}</span>
      </div>
      <div class="state-kpi-chip">
        <span class="skc-val">${rank}/37</span>
        <span class="skc-label">PMS Rank</span>
        <span class="skc-sub">Among all states</span>
      </div>`;
  }

  const textEl = $("state-overview-text");
  if (textEl) {
    const dir = hike >= 0 ? "increase" : "decrease";
    textEl.innerHTML = `<h4>State Overview</h4><p>${state} has shown a ${dir} in PMS prices over the selected period. The price hike is <strong>${hike.toFixed(1)}%</strong>. Transportation costs have moved proportionally across all modes.</p>`;
  }

  plotStateCharts(state);
  plotPmsTransportDiagram(state);
  plotTimeSeries(state);
}

/* ── Theme picker ─────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  /* Sync topbar buttons */
  document.querySelectorAll(".theme-opt").forEach((b) => {
    b.classList.toggle("active", b.dataset.theme === theme);
  });
  /* Sync settings cards */
  document.querySelectorAll(".theme-card").forEach((card) => {
    const isActive = card.dataset.themeCard === theme;
    card.classList.toggle("tc-active", isActive);
    const radio = card.querySelector("input[type='radio']");
    if (radio) radio.checked = isActive;
  });
  if (typeof Plotly !== "undefined") {
    plotStateCharts(activeState);
    plotPmsTransportDiagram(activeState);
    plotTimeSeries(activeState);
    if (!$("general-report")?.classList.contains("hidden")) renderNationalChart();
    const rdState = $("report-state-sel")?.value;
    if (rdState) renderReportStateDetail(rdState);
  }
}

function initThemePicker() {
  /* Topbar buttons */
  document.querySelectorAll(".theme-opt").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
  });
  /* Settings panel cards */
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.addEventListener("click", () => applyTheme(card.dataset.themeCard));
  });
  /* Mark initial active state on settings cards */
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.classList.toggle("tc-active", card.dataset.themeCard === current);
    const radio = card.querySelector("input[type='radio']");
    if (radio) radio.checked = card.dataset.themeCard === current;
  });
}

/* ── Fuel stations map toggle (settings panel) ────────────── */
function initSettingsPanel() {
  const statesChk = $("settings-states-chk");
  if (statesChk) {
    statesChk.checked = localStorage.getItem("dashStatesVisible") !== "false";
    statesChk.addEventListener("change", () => {
      if (!stateLayer) return;
      if (statesChk.checked) {
        stateLayer.addTo(nigeriaMap);
        if (currentReferenceLayer) currentReferenceLayer.bringToFront();
        if (stationLayer) stationLayer.bringToFront();
      } else {
        stateLayer.remove();
      }
      localStorage.setItem("dashStatesVisible", String(statesChk.checked));
    });
  }

  const chk = $("settings-stations-chk");
  if (chk) {
    chk.addEventListener("change", () => {
      if (!stationLayer) return;
      if (chk.checked) stationLayer.addTo(nigeriaMap);
      else stationLayer.remove();
    });
  }

  const basemapSel = $("settings-basemap-sel");
  if (basemapSel) {
    const savedBasemap = localStorage.getItem("dashBasemap");
    basemapSel.value = BASEMAPS[savedBasemap] ? savedBasemap : "osm";
    basemapSel.addEventListener("change", () => switchBasemap(basemapSel.value));
  }

  /* Attributes button — toggles the attribute panel open/closed */
  const attrBtn = $("hw-attr-btn");
  const attrPanel = $("hw-attr-panel");
  if (attrBtn && attrPanel) {
    /* Start open */
    attrPanel.style.display = "block";
    attrBtn.classList.add("hw-attr-btn-open");

    attrBtn.addEventListener("click", () => {
      const isOpen = attrPanel.style.display !== "none";
      attrPanel.style.display = isOpen ? "none" : "block";
      attrBtn.classList.toggle("hw-attr-btn-open", !isOpen);
    });
  }
}

/* ── General Report nav toggle ────────────────────────────── */
function initGeneralReportNav() {
  const navGR = $("nav-general-report");
  if (!navGR) return;
  navGR.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("general-report");
    renderHikeList();
    renderNationalChart();
  });
}

/* ── Reports nav toggle ───────────────────────────────────── */
function initReportsNav() {
  const navReports = $("nav-reports");
  if (!navReports) return;
  navReports.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("reports");
    /* Pre-populate with the current active state if nothing selected yet */
    const sel = $("report-state-sel");
    if (sel && !sel.value && activeState) {
      sel.value = activeState;
      try { renderReportStateDetail(activeState); } catch (_) {}
    }
  });

  /* State select in reports */
  const sel = $("report-state-sel");
  sel?.addEventListener("change", (e) => {
    const state = e.target.value;
    if (!state) return;
    try {
      renderReportStateDetail(state);
      const detail = $("report-detail");
      if (detail) detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (err) {
      console.error("Report render error:", err);
    }
  });
}

/* ── Compare section toggle ───────────────────────────────── */
function initCompareSection() {
  const navCompare = $("nav-compare");
  const section    = $("compare-section");
  const closeBtn   = $("compare-close");
  const runBtn     = $("compare-run");
  const dlBtn      = $("compare-download-btn");

  navCompare?.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("compare-section");
  });

  closeBtn?.addEventListener("click", () => {
    showRightView("state-detail");
  });

  runBtn?.addEventListener("click", () => {
    const a = $("compare-a")?.value;
    const b = $("compare-b")?.value;
    if (a && b) plotCompare(a, b);
  });

  dlBtn?.addEventListener("click", () => {
    const a = $("compare-a")?.value;
    const b = $("compare-b")?.value;
    if (a && b) downloadComparePdf(a, b);
  });
}

/* ── Move footer to page bottom on mobile ─────────────────── */
function relocateFooterMobile() {
  const footer   = document.querySelector(".dashboard-footer");
  const mainArea = document.querySelector(".main-area");
  if (!footer || !mainArea) return;
  if (window.innerWidth <= 860) {
    mainArea.appendChild(footer);           /* move after right panel */
    footer.style.borderTop = "1px solid var(--border)";
    footer.style.marginTop = "0";
  }
}

/* ── Mobile sidebar drawer ─────────────────────────────────── */
function initMobileMenu() {
  const menuBtn  = $("mobile-menu-btn");
  const closeBtn = $("mobile-sidebar-close");
  const sidebar  = $("main-sidebar");
  const overlay  = $("sidebar-overlay");

  function openSidebar() {
    sidebar?.classList.add("mobile-open");
    overlay?.classList.add("active");
    document.body.style.overflow = "hidden";
    menuBtn?.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar?.classList.remove("mobile-open");
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
    menuBtn?.setAttribute("aria-expanded", "false");
  }

  menuBtn?.addEventListener("click", openSidebar);
  closeBtn?.addEventListener("click", closeSidebar);
  overlay?.addEventListener("click", closeSidebar);

  /* Close sidebar when any nav item is clicked on mobile */
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 860) closeSidebar();
    });
  });

  /* Swipe left on sidebar to close */
  let touchStartX = 0;
  sidebar?.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  sidebar?.addEventListener("touchend", (e) => {
    if (e.changedTouches[0].clientX - touchStartX < -55 && window.innerWidth <= 860) {
      closeSidebar();
    }
  }, { passive: true });

  /* Keyboard: Escape closes sidebar */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar?.classList.contains("mobile-open")) closeSidebar();
  });
}

/* ── Main chart render (called by Plotly onload) ──────────── */
function plotCharts() {
  if (typeof Plotly === "undefined") return;
  plotStateCharts(activeState);
  plotPmsTransportDiagram(activeState);
  plotTimeSeries(activeState);
}

window.renderDashboardCharts = plotCharts;

/* ── Event bindings ───────────────────────────────────────── */
function attachEvents() {
  $("state-dl-btn")?.addEventListener("click",  () => downloadStateReport(activeState));
  $("gr-dl-btn")?.addEventListener("click",    () => downloadNationalReport());
  $("ht-dl-btn")?.addEventListener("click",    () => downloadHikeTrackerPdf());

  $("state-search")?.addEventListener("change", (e) => {
    const found = stateNames.find((s) => normalize(s).includes(normalize(e.target.value)));
    if (found) selectState(found);
  });

  document.querySelectorAll(".year-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const year = Number(btn.dataset.year);
      if (activeYear === year) {
        activeYear = null;
        document.querySelectorAll(".year-tab").forEach((b) => b.classList.remove("active"));
      } else {
        activeYear = year;
        document.querySelectorAll(".year-tab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      }
      updatePeriodLabels();
      updateKpis();
      renderHikeList();
      plotCharts();
      selectState(activeState);
      refreshMapColors();
      /* Refresh general report chart if open */
      if (!$("general-report")?.classList.contains("hidden")) renderNationalChart();
      /* Refresh report detail if open */
      const rdState = $("report-state-sel")?.value;
      if (rdState) renderReportStateDetail(rdState);
    });
  });

  $("state-dropdown")?.addEventListener("change", (e) => selectState(e.target.value));

  document.querySelectorAll(".stab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".stab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      plotStateCharts(activeState, btn.dataset.tab);
    });
  });

  /* Nav items (non-special): update active class */
  document.querySelectorAll(".nav-item[data-section='main']").forEach((a) => {
    a.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((i) => i.classList.remove("active"));
      a.classList.add("active");
    });
  });
}

/* ── Logo white-background removal via canvas ─────────────── */
function stripLogoBackground() {
  document.querySelectorAll(".brand-logo, .df-logo").forEach((img) => {
    const process = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx    = canvas.getContext("2d");
        const w = img.naturalWidth  || 60;
        const h = img.naturalHeight || 60;
        canvas.width  = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0);
        const data = ctx.getImageData(0, 0, w, h);
        const d = data.data;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i] > 230 && d[i + 1] > 230 && d[i + 2] > 230) d[i + 3] = 0;
        }
        ctx.putImageData(data, 0, 0);
        img.src = canvas.toDataURL("image/png");
      } catch { /* cross-origin or taint error — leave image unchanged */ }
    };
    if (img.complete && img.naturalWidth) process();
    else img.addEventListener("load", process, { once: true });
  });
}

/* ── Init ─────────────────────────────────────────────────── */
async function initDashboard() {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("Unable to load data.json");
    allData = await res.json();
  } catch (err) {
    console.error("Dashboard data failed to load.", err);
    set("side-pms", "Data unavailable"); set("side-transport", "Data unavailable");
    return;
  }

  try {
    const sr = await fetch("./public/data/nigeria_fuel_stations.json");
    if (sr.ok) {
      const d = await sr.json();
      fuelStations = d.stations || [];
    }
  } catch (e) { console.warn("Fuel stations failed to load.", e); }

  /* Default year tab — 2025 */
  activeYear = 2025;
  document.querySelectorAll(".year-tab").forEach((b) => {
    b.classList.toggle("active", Number(b.dataset.year) === activeYear);
  });

  updatePeriodLabels();
  updateKpis();
  renderHikeList();
  populateStateDropdown();
  initStationsPanel();
  initThemePicker();
  initSettingsPanel();
  initHikeTrackerNav();
  initGeneralReportNav();
  initReportsNav();
  initCompareSection();

  /* Overview nav → state detail */
  $("nav-overview")?.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("state-detail");
  });

  /* Fuel Stations nav */
  $("nav-fuel-stations")?.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("fuel-stations-section");
    renderStationsTable();
  });

  /* Settings nav */
  $("nav-settings")?.addEventListener("click", (e) => {
    e.preventDefault();
    showRightView("settings-section");
  });
  plotCharts();
  selectState(activeState);
  attachEvents();
  initMobileMenu();
  relocateFooterMobile();
  stripLogoBackground();
  loadPdfLogo();

  try {
    const geo = await loadNigeriaBoundaries();
    renderMap(geo);
    loadNigeriaHighways(); /* auto-start in background — instant if cached */
  } catch (err) {
    console.error("Nigeria map failed to load.", err);
    const mapEl = $("nigeria-map");
    if (mapEl) mapEl.innerHTML = `<div style="display:grid;place-items:center;height:100%;padding:24px;text-align:center;color:#dbeafe">Nigeria map data could not be loaded.<br>Dashboard data is still available.</div>`;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDashboard);
} else {
  initDashboard();
}
