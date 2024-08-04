import Chart from 'chart.js/auto'
import 'regenerator-runtime/runtime';
import {fetchWeatherData} from './weather-script.js'

let weatherChart;
document.getElementById('city-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    const errorMessageElement = document.getElementById('error-message');
    try {
        const data = await fetchWeatherData(city);
        if (data) processData(data)
    } catch (e) {
        errorMessageElement.textContent = e.message
        const ctx = document.getElementById('weather').getContext('2d');
        if (weatherChart) {
            weatherChart.destroy();
        }
    }
});

function processTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toISOString();
}

async function processData(data) {
    const transformedData = data.list.map(item => ({
        x: processTimestamp(item.dt),
        y: (item.main.temp - 273.15).toFixed(2)
    }));
    createChart(transformedData)
    transformedData.clear
}

async function createChart(data) {
    document.getElementById('error-message').textContent = ''
    const ctx = document.getElementById('weather').getContext('2d');

    if (weatherChart) {
        weatherChart.destroy();
    }

    weatherChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(row => row.x),
            datasets: [
                {
                    label: 'Weather by day',
                    data: data.map(row => row.y)
                }
            ]
        }
    });
}