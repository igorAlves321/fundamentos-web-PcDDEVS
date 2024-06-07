function getWeather() {
    const apiKey = "d7a8d944e376f6e9e6fd3af2bb39f6d9";
    var apiCity = document.getElementById('cidade').value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}`;


    fetch(apiURL)
    .then(Response => Response.json())
    .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weatherWind = data.wind.speed;

        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `<p>Cidade: ${cityName}</p>
                                <p>Temperatura: ${temperature}</p>
                                <p>Descrição: ${weatherDescription}</p>
                                <p>Vento: ${weatherWind}</p>`;
    })
    .catch(error => {
        console.error('Erro ao obter dados do clima: ', error);
    });
}

document.getElementById('cidade').addEventListener('input', getWeather);