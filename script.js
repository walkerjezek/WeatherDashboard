// Global Variables
var cityEl = document.getElementById("cityInput");
var searchEl = document.getElementById("searchBtn");
var currentTemp = document.getElementById("temp");
var currentHumidity = document.getElementById("humidity");
var currentWind = document.getElementById("wind");
var currentUV = document.getElementById("UV");
var cardsEl = document.getElementById("cards");
var currentCity = document.getElementById("cityOverview-name");
var card1El = document.getElementById("card1");
var card2El = document.getElementById("card2");
var card3El = document.getElementById("card3");
var card4El = document.getElementById("card4");
var card5El = document.getElementById("card5");

// My unique API key
const apiKey = "c3fd335f55cb288111b415f376efcfdf";

// Todays Data
var today = moment().format("M/D/YYYY");

// Next five days. Inefficient I know...
var today1 = moment().add(1, 'days').format("M/D/YYYY");
var today2 = moment().add(2, 'days').format("M/D/YYYY");
var today3 = moment().add(3, 'days').format("M/D/YYYY");
var today4 = moment().add(4, 'days').format("M/D/YYYY");
var today5 = moment().add(5, 'days').format("M/D/YYYY");


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
                const lat = data.coord.lat;
                const lon = data.coord.lon;
                currentCity.innerHTML = cityName + " - " + "(" + today + ") - " + data.weather[0].description;
                currentTemp.innerHTML = "Temperature: " + convert(data.main.temp) + " &#176F";
                currentHumidity.innerHTML = "Humidity: " + data.main.humidity + "%";
                currentWind.innerHTML = "Wind Speed: " + data.wind.speed + " MPH";

            // Five Day Forecast and Current UV index
            // ---------------------------------------------------------
                weather()
                function weather() {
                    let requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                        fetch(requestURL).then(function (response){
                            response.json().then(function (data){
                                console.log(data);
                                // UV Index for overview card
                                currentUV.innerHTML = "UV Index: " + data.daily[0].uvi;

                                // Foor loop to simplify this?
                                // --------------------------------------------
                                // Forecast Card 1
                                var card1DateEl = document.getElementById("card1Date");
                                card1DateEl.innerHTML = "(" + today1 + ")";
                                // Display Date
                                var card1DescEl = document.getElementById("card1Desc");
                                card1DescEl.innerHTML = data.daily[1].weather[0].description;
                                // Display Icon?
                                // Display Temp
                                var card1TempEl = document.getElementById("card1Temp");
                                card1TempEl.innerHTML = "Temp: " + convert(data.daily[1].temp.day) + " &#176F";
                                // Display Wind
                                var card1WindEl = document.getElementById("card1Wind");
                                card1WindEl.innerHTML = "Wind: " + data.daily[1].wind_speed + " MPH";
                                // Display Humidty
                                var card1HumidEl = document.getElementById("card1Humid");
                                card1HumidEl.innerHTML = "Humidity: " + data.daily[1].humidity + "%";

                                // --------------------------------------------
                                // Forecast Card 2
                                var card2DateEl = document.getElementById("card2Date");
                                card2DateEl.innerHTML = "(" + today2 + ")";
                                // Display Date
                                var card2DescEl = document.getElementById("card2Desc");
                                card2DescEl.innerHTML = data.daily[2].weather[0].description;
                                // Display Icon?
                                // Display Temp
                                var card2TempEl = document.getElementById("card2Temp");
                                card2TempEl.innerHTML = "Temp: " + convert(data.daily[2].temp.day) + " &#176F";
                                // Display Wind
                                var card2WindEl = document.getElementById("card2Wind");
                                card2WindEl.innerHTML = "Wind: " + data.daily[2].wind_speed + " MPH";
                                // Display Humidty
                                var card2HumidEl = document.getElementById("card2Humid");
                                card2HumidEl.innerHTML = "Humidity: " + data.daily[2].humidity + "%";

                                // --------------------------------------------
                                // Forecast Card 3
                                var card3DateEl = document.getElementById("card3Date");
                                card3DateEl.innerHTML = "(" + today3 + ")";
                                // Display Date
                                var card3DescEl = document.getElementById("card3Desc");
                                card3DescEl.innerHTML = data.daily[3].weather[0].description;
                                // Display Icon?
                                // Display Temp
                                var card3TempEl = document.getElementById("card3Temp");
                                card3TempEl.innerHTML = "Temp: " + convert(data.daily[3].temp.day) + " &#176F";
                                // Display Wind
                                var card3WindEl = document.getElementById("card3Wind");
                                card3WindEl.innerHTML = "Wind: " + data.daily[3].wind_speed + " MPH";
                                // Display Humidty
                                var card3HumidEl = document.getElementById("card3Humid");
                                card3HumidEl.innerHTML = "Humidity: " + data.daily[3].humidity + "%";

                                // --------------------------------------------
                                // Forecast Card 4
                                var card4DateEl = document.getElementById("card4Date");
                                card4DateEl.innerHTML = "(" + today4 + ")";
                                // Display Date
                                var card4DescEl = document.getElementById("card4Desc");
                                card4DescEl.innerHTML = data.daily[4].weather[0].description;
                                // Display Icon?
                                // Display Temp
                                var card4TempEl = document.getElementById("card4Temp");
                                card4TempEl.innerHTML = "Temp: " + convert(data.daily[4].temp.day) + " &#176F";
                                // Display Wind
                                var card4WindEl = document.getElementById("card4Wind");
                                card4WindEl.innerHTML = "Wind: " + data.daily[4].wind_speed + " MPH";
                                // Display Humidty
                                var card4HumidEl = document.getElementById("card4Humid");
                                card4HumidEl.innerHTML = "Humidity: " + data.daily[4].humidity + "%";

                                // --------------------------------------------
                                // Forecast Card 5
                                var card5DateEl = document.getElementById("card5Date");
                                card5DateEl.innerHTML = "(" + today5 + ")";
                                // Display Date
                                var card5DescEl = document.getElementById("card5Desc");
                                card5DescEl.innerHTML = data.daily[5].weather[0].description;
                                // Display Icon?
                                // Display Temp
                                var card5TempEl = document.getElementById("card5Temp");
                                card5TempEl.innerHTML = "Temp: " + convert(data.daily[5].temp.day) + " &#176F";
                                // Display Wind
                                var card5WindEl = document.getElementById("card5Wind");
                                card5WindEl.innerHTML = "Wind: " + data.daily[5].wind_speed + " MPH";
                                // Display Humidty
                                var card5HumidEl = document.getElementById("card5Humid");
                                card5HumidEl.innerHTML = "Humidity: " + data.daily[5].humidity + "%";


                            })
                        })
                
                
                    }


                
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })
}


// Search History


// Convert temp from K to F. Had to look this one up
function convert(K) {
    return Math.floor((K - 273.15) * 1.8 + 32);
}


searchEl.addEventListener("click", function() {
    const cityName = cityEl.value;
    currentWeather(cityName);
    cardsEl.classList.remove("hidden");
    localStorage.setItem("history", JSON.stringify(cityName));
})