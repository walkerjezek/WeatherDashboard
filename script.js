// Global Variables
var cityEl = document.getElementById("cityInput");
var searchEl = document.getElementById("searchBtn");
var currentTemp = document.getElementById("temp");
var currentHumidity = document.getElementById("humidity");
var currentWind = document.getElementById("wind");
var currentUV = document.getElementById("UV");
var cardsEl = document.getElementById("cards");
var currentCity = document.getElementById("cityOverview-name");

// My unique API key
const apiKey = "c3fd335f55cb288111b415f376efcfdf";


// Current weather
// Ref: 06-01-21
// ----------------------------------------------------------------------------------------------

function currentWeather(cityName) {
    let currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(currentWeatherURL).then (function (response){

        if (response.ok) {
            response.json().then(function (data) {
                // displayCurrentWeather(data);
                console.log(data);
                currentCity.innerHTML = cityName;
                currentTemp.innerHTML = "Temperature: " + k2f(data.main.temp) + " &#176F";
                currentHumidity.innerHTML = "Humidity: " + data.main.humidity;
                currentWind.innerHTML = "Wind Speed: " + data.wind.speed;
                // Need to add UV Index here
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })
}

function k2f(K) {
    return Math.floor((K - 273.15) * 1.8 + 32);
}



// Five day forecast
// ----------------------------------------------------------------------------------------------
    function weather(cityName) {

    var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey;


    }





// Search History




searchEl.addEventListener("click", function() {
    const cityName = cityEl.value;
    currentWeather(cityName);
    weather(cityName);
    cardsEl.classList.remove("hidden");
    localStorage.setItem("history", JSON.stringify(history));
})