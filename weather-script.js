import axios from 'axios';
import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config()
const city = process.argv[2]

async function main() {
    if (city === undefined) {
        console.log('Enter the name of the city')
    } else {
        const data = await fetchWeatherData(city);
        if (data) {
            await processData(data);
        }
    }
}

export async function fetchWeatherData(city) {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${city}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
async function processData(data) {
    const jsonContent = JSON.stringify(data, null, 2);
    fs.writeFileSync('weather_data.json', jsonContent);
}

main()