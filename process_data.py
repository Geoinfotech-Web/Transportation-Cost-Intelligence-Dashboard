import pandas as pd
import json
import os
from pathlib import Path

# Define paths
data_dir = Path("Dashboard Data")
if not any(data_dir.glob("*.xlsx")):
    data_dir = Path("public/data")
output_file = Path("data.json")

# State names in Nigeria
states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
    "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
    "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
]

print("Processing data files...")

# Read PMS data
pms_data = {}
for year in [2024, 2025, 2026]:
    file = data_dir / f"PMS_{year}.xlsx"
    if file.exists():
        try:
            df = pd.read_excel(file)
            print(f"\n  PMS_{year}.xlsx:")
            print(f"    Columns: {df.columns.tolist()}")
            print(f"    Shape: {df.shape}")
            print(f"    First row: {df.iloc[0].to_dict() if len(df) > 0 else 'empty'}")
            
            for _, row in df.iterrows():
                # Try to find state column (case-insensitive)
                state = None
                for col in df.columns:
                    if col.lower().strip() == "state":
                        state = row[col]
                        break
                
                if state and state in states:
                    key = f"{state}_{year}"
                    if key not in pms_data:
                        pms_data[key] = []
                    pms_data[key].append(row.to_dict())
        except Exception as e:
            print(f"    Error reading file: {e}")

# Read transport cost data
transport_data = {}
for year in [2024, 2025, 2026]:
    file = data_dir / f"Transport cost_{year}.xlsx"
    if file.exists():
        try:
            df = pd.read_excel(file)
            print(f"\n  Transport cost_{year}.xlsx:")
            print(f"    Columns: {df.columns.tolist()}")
            print(f"    Shape: {df.shape}")
            print(f"    First row: {df.iloc[0].to_dict() if len(df) > 0 else 'empty'}")
            
            for _, row in df.iterrows():
                # Try to find state column (case-insensitive)
                state = None
                for col in df.columns:
                    if col.lower().strip() == "state":
                        state = row[col]
                        break
                
                if state and state in states:
                    key = f"{state}_{year}"
                    if key not in transport_data:
                        transport_data[key] = []
                    transport_data[key].append(row.to_dict())
        except Exception as e:
            print(f"    Error reading file: {e}")

# Merge datasets
dataset = []
for state in states:
    for year in [2024, 2025, 2026]:
        key = f"{state}_{year}"
        pms_records = pms_data.get(key, [])
        transport_records = transport_data.get(key, [])
        
        # Merge PMS and transport data for the same month
        for pms_row in pms_records:
            # Find month value (case-insensitive column search)
            month = None
            for col in pms_row.keys():
                if "month" in str(col).lower():
                    month = pms_row[col]
                    break
            
            if not month:
                month = "Unknown"
            
            # Find matching transport record
            matching_transport = None
            for t_row in transport_records:
                t_month = None
                for col in t_row.keys():
                    if "month" in str(col).lower():
                        t_month = t_row[col]
                        break
                if t_month == month:
                    matching_transport = t_row
                    break
            
            # Find fuel price column
            fuel_price = 0
            for col in pms_row.keys():
                if "price" in str(col).lower() or "pms" in str(col).lower():
                    try:
                        fuel_price = float(pms_row[col])
                        break
                    except:
                        pass
            
            # Find transport cost column
            transport_cost = 0
            if matching_transport:
                for col in matching_transport.keys():
                    if "cost" in str(col).lower() or "transport" in str(col).lower():
                        try:
                            transport_cost = float(matching_transport[col])
                            break
                        except:
                            pass
            
            dataset.append({
                "state": state,
                "year": year,
                "month": str(month),
                "fuelPrice": fuel_price,
                "transportCost": transport_cost
            })

print(f"\n  Processed {len(dataset)} records")

# Save to JSON
with open(output_file, 'w') as f:
    json.dump(dataset, f, indent=2)

print(f"\n✓ Data saved to {output_file}")
