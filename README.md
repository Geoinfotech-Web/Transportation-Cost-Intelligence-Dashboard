# Nigeria PMS & Transportation Cost Dashboard

An interactive web-based dashboard displaying PMS (fuel) and transportation cost data across Nigeria's 36 states from November 2024 to March 2026.

## Features

✨ **Interactive State Selection**
- Click any of 36 state cards to view detailed analytics
- Hover over states to preview latest fuel and transport prices
- Reset selection at any time

📊 **Data Visualization**
- Time series charts showing fuel price and transport cost trends
- Monthly hike charts tracking price changes month-over-month
- Summary cards with latest averages across all states

📈 **Detailed Statistics**
- State overview with latest month data
- Average prices and overall trends
- Percentage change calculations from start to latest period
- Complete period coverage information

📥 **Report Export**
- Download state-specific data as CSV
- Includes all months from November 2024 to March 2026
- Ready for further analysis in Excel or other tools

## Setup Instructions

### Option 1: Using Your Real Data (Recommended)

1. **Prerequisites**: Python 3 with pandas
   ```bash
   pip install pandas openpyxl
   ```

2. **Convert Excel files to JSON**:
   ```bash
   python process_data.py
   ```
   This will read the Excel files in `Dashboard Data/` folder and create `data.json`

3. **Open the dashboard**:
   - Open `index.html` in your web browser
   - The dashboard will load your real data

### Option 2: Using Sample Data

1. Simply open `index.html` in your web browser
2. The dashboard will automatically generate sample data
3. You can use this to familiarize yourself with the interface

## Files Structure

```
Dashboard/
├── index.html              # Main dashboard UI
├── styles.css              # Styling
├── data-loader.js          # Dashboard logic and interactivity
├── process_data.py         # Excel to JSON converter
├── data.json               # Generated data file (created by process_data.py)
├── README.md               # This file
└── Dashboard Data/         # Your data files
    ├── PMS_2024.xlsx
    ├── PMS_2025.xlsx
    ├── PMS_2026.xlsx
    ├── Transport cost_2024.xlsx
    ├── Transport cost_2025.xlsx
    └── Transport cost_2026.xlsx
```

## How to Use

1. **View State Data**: Click on any state card to load its statistics and charts
2. **Preview Data**: Hover over state cards to see latest month values
3. **View Trends**: 
   - Time Series chart shows historical data with trends
   - Hike chart shows monthly price increases/decreases
4. **Download Report**: Select a state, then click "Download Report (CSV)"
5. **Reset**: Click the "Reset" button to clear selection

## Data Format

If you want to use custom data, create a `data.json` file with this structure:

```json
[
  {
    "state": "Lagos",
    "year": 2024,
    "month": "Nov",
    "fuelPrice": 650.50,
    "transportCost": 280.25
  },
  ...
]
```

## Troubleshooting

**Dashboard shows "Select a state to view details"**
- Click on any state card to load data

**Charts not displaying**
- Ensure a state is selected
- Check browser console for errors (F12)

**Data not loading**
- If `data.json` doesn't exist, sample data will be auto-generated
- To use real data, run `process_data.py`

**Python script fails**
- Verify pandas is installed: `pip install pandas openpyxl`
- Check that Excel files are in `Dashboard Data/` folder
- Ensure file names match exactly (case-sensitive on some systems)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Technologies Used

- HTML5
- CSS3 (with Flexbox & CSS Grid)
- Vanilla JavaScript (ES6+)
- Plotly.js for charts
- Pandas & Python for data processing

## Notes

- All prices are in Nigerian Naira (₦)
- Data spans November 2024 to March 2026 (17 months)
- Coverage includes all 36 Nigerian states
- Charts are interactive - hover to see values, click legend to toggle series
