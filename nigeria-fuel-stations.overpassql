[out:json][timeout:180];
area["ISO3166-1"="NG"][admin_level=2]->.nigeria;
(
  node["amenity"="fuel"](area.nigeria);
  way["amenity"="fuel"](area.nigeria);
  relation["amenity"="fuel"](area.nigeria);
);
out center tags;
