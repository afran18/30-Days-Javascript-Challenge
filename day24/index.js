// Day 24: Project 1 - Weather App

// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.


let API_key = "YOUR_API_KEY"


const currentWeather = async (city="Bangalore") => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        let data = await response.json();
        console.log("Data:", data);

        let cityName = data.name;
        let temp = data.main.temp;
        let weatherCondition = data.weather[0].main;
        let wind = data.wind.speed;
        let pressure = data.main.pressure;
        let humidity = data.main.humidity;

        let tempInCelsius = (data.main.temp - 273.15).toFixed(2);

        console.log(cityName, `${temp}K`, weatherCondition);
        document.getElementById('city-name').innerHTML = `${cityName}`;
        document.getElementById('temperature').innerHTML = `${tempInCelsius}\u00B0C`;
        document.getElementById('condition').innerHTML = `${weatherCondition}`;
        document.getElementById('wind').innerHTML = `${wind} <small>m/s</small>`;
        document.getElementById('pressure').innerHTML = `${pressure} <small>hPa</small>`;
        document.getElementById('humidity').innerHTML = `${humidity} <small>%</small>`;
        
    } catch (err) {
        console.log("Error:", err.message);
        document.getElementById('city-name').innerHTML = "City: Not found";
        document.getElementById('temperature').innerHTML = "Temperature: --°C";
        document.getElementById('condition').innerHTML = "Condition: --";
        
    }
}

currentWeather("Belgaum")

// Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let searchCity = document.getElementById("search").value;
    if(searchCity == "") return

    currentWeather(searchCity);
    fetch5DayForecast(searchCity);
});


const fetch5DayForecast = async (city = "Bangalore") => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        let data = await response.json();
        console.log("5-Day Forecast Data:", data);

        // Clear existing forecast data
        const forecastContainer = document.getElementById("fiveDayData");
        forecastContainer.innerHTML = '';
        const today = new Date().toDateString();

        // Extract and display daily summaries
        const uniqueDates = new Set();
        const dailyForecasts = data.list.filter(forecast => {
            const date = new Date(forecast.dt_txt).toDateString();
            if (!uniqueDates.has(date)) {
                uniqueDates.add(date);
                return true;
            }
            return false;
        });
        let skipFirst = true;
        dailyForecasts.forEach(forecast => {
            if (skipFirst) {
                skipFirst = false; // Skip adding the first forecast (today's forecast)
                return;
            }
 
            const tempInCelsius = `${(forecast.main.temp - 273.15).toFixed(2)}\u00B0C`;
            const dayOfWeek = new Date(forecast.dt_txt).getDay();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeekName = `${daysOfWeek[dayOfWeek].substring(0,3)}, `;
            const date = dayOfWeekName + new Date(forecast.dt_txt).toDateString().substring(4);

            const divP = document.createElement('div');
            divP.className = 'forecastC';

            const img = document.createElement('img');
            img.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
            img.alt = 'weather-icon';
            img.className = 'weather-icon';
            
            const tempDiv = document.createElement('div');
            tempDiv.className = 'temperature';
            tempDiv.textContent = tempInCelsius;

            const conditionDiv = document.createElement('div');
            conditionDiv.className = 'weathCondition';
            conditionDiv.textContent = forecast.weather[0].main;

            const dateDiv = document.createElement('div');
            dateDiv.className = 'cityDate';
            dateDiv.textContent = date;

            divP.appendChild(img);
            divP.appendChild(tempDiv);
            divP.appendChild(conditionDiv);
            divP.appendChild(dateDiv);

            forecastContainer.appendChild(divP);
        });
    } catch (err) {
        console.log("Error:", err.message);
    }
};

// Example call to fetch the 5-day forecast
fetch5DayForecast("Belgaum");


// Activity 5: Enhancing the UI
// Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.
// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.