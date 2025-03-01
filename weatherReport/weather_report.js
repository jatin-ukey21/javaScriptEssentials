function showweatherDetails(event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value; // Get city inside the function
    const apiKey = 'c7520e4d5c02a911a009c82f3588ffcb';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:',error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather.Please try again.</p>`
        });
        
}

    document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );