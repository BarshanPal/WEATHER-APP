function getweather() {
    const apikey = "2ee5f9c36feb152fb406101ee21d8e02"; // Your actual API key
    const city = document.getElementById('city').value;
    
   
    if (!city) {
        alert("PLEASE ENTER THE CITY");
        return;
    }

    
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;

    
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert("City not found. Please enter a valid city.");
                return;
            }
            
            const temp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const icon = data.weather[0].icon;

            // Display current weather information
            document.getElementById('temp-div').innerText = `Temperature: ${temp}°C`;
            document.getElementById('weather-info').innerText = `Weather: ${weatherDescription}`;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
        })
        .catch(error => console.error("Error fetching current weather:", error));


   
    
}
