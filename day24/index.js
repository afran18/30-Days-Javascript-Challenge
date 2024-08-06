// Day 24: Project 1 - Weather App

// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.


let API_key = "9b2ca8df849188e137724f8f8ce3dad8"


const currentWeather = async (city="Bangalore") => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        let data = await response.json();
       // console.log("Data:", data);

        let cityName = data.name;
        let temp = data.main.temp;
        let weatherCondition = data.weather[0].main;

        let tempInCelsius = (data.main.temp - 273.15).toFixed(2);

        console.log(cityName, `${temp}K`, weatherCondition);
        document.getElementById('city-name').innerHTML = `City: ${cityName}`;
        document.getElementById('temperature').innerHTML = `Temperature: ${tempInCelsius}\u00B0C`;
        document.getElementById('condition').innerHTML = `Condition: ${weatherCondition}`;
        
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

    currentWeather(searchCity);
});


const fetch5DayForecast = async (city = "Bangalore") => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        let data = await response.json();
        console.log("5-Day Forecast Data:", data);

        // You can now parse the forecast data and update the UI accordingly.
        // Example: Extract and display daily summaries.
        const uniqueForecast = [];

        const fiveDays = data.list.filter( forecast => {
            const date = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecast.includes(date)) {
                return uniqueForecast.push(date)
            }
            console.log(date);
            
        })
        console.log("Data for forecast", data);
        let forecast = document.getElementById("fiveDayData")
        console.log("five", fiveDays)

        for (const five of fiveDays) {
            let tempInCelsius = `${(five.main.temp - 273.15).toFixed(2)}\u00B0C`;

            const dayOfWeek = new Date(five.dt_txt).getDay();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeekName = `${daysOfWeek[dayOfWeek].substring(0,3)}, `;
            console.log(dayOfWeekName);

            const date = dayOfWeekName + new Date(five.dt_txt).toDateString().substring(4);


            let divP = document.createElement('div')
            divP.className = 'forecastC'

            let divT = document.createElement('div')
            divT.className = 'temperature'
            divT.innerHTML = tempInCelsius

            let divW = document.createElement('div')
            divW.className = 'weathCondition'
            divW.innerHTML = five.weather[0].main

            let day = new Date(five.dt_txt).getDay()
            let divD = document.createElement('div')
            divD.className = 'cityDate'
            divD.innerHTML = date;

            // Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page.

            let img = document.createElement('img');
            img.src = `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`; 
            img.alt = 'weather-icon';
            img.className = 'weather-icon'; 

            divP.appendChild(img)
            divP.appendChild(divT);
            divP.appendChild(divW);

            divP.appendChild(divD);

            forecast.appendChild(divP);


        }

    } catch (err) {
        console.log("Error:", err.message);
    }
};

// Example call to fetch the 5-day forecast
fetch5DayForecast("Belgaum");

// Activity 5: Enhancing the UI
// Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.
// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.