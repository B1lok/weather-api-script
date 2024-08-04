# Weather API Script

## Objective

This project is a simple automation script designed to demonstrate basic programming skills. The script fetches weather data from a public API, processes the data, and stores it in a JSON file. Additionally, it visualizes the data in a simple chart using Chart.js.

## Task Description

1. **Fetch data from a public API (e.g., weather data).**
2. **Process the data and store it in a file (e.g., JSON or CSV).**
3. **Optionally, visualize the data in a simple chart (e.g., using a library like Matplotlib for Python or Chart.js for JavaScript).**

## Deliverables

- The script file.
- Example output file (JSON/CSV).
- Documentation on how to run the script and an explanation of the logic.
## Installation

1. **Clone the repository:**
```
git clone https://github.com/B1lok/weather-api-script.git
cd weather-api-script
```
2. **Install dependencies:**
```
 npm install 
```
3. **Set up environment variables. Create a .env file in the root directory and add your OpenWeatherMap API key**
```
*API_KEY=your_api_key_here*
```

## Running
> to run the script execute:
``` 
node weather-script.js <city_name> 
```
> to see graphical visualisation execute:
```
npm run dev
```
and open [page in the browser](http://localhost:1234)

## Example Output
### An example of the JSON output file (weather_data.json) after fetching weather data for Sumy: 
 [Example file](https://github.com/B1lok/weather-api-script/blob/main/weather_data.json) 
```
{
  "city": {
    "id": 2643743,
    "name": "Sumy",
    ...
  },
  "list": [
    {
      "dt": 1625812800,
      "main": {
        "temp": 290.15,
        ...
      },
      ...
    },
    ...
  ]
}
```
