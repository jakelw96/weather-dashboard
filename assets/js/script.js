var $curTemp = document.getElementById("curr-temp");
var $curWind = document.getElementById("curr-wind");
var $curHumidity = document.getElementById("curr-humidity");
var $curUV = document.getElementById("curr-uvIndex");
var $inputCity = document.getElementById("city-input");

// To get coordinates from API
var getWeatherDataCoord = function(cityName) {
    var apiUrlCoord = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6855f141fbc2348ef120b63c317a3472";
    // Make a request to url to get coordinates
    fetch(apiUrlCoord).then(function(response) {
        // Request was successful
        if (response.ok) {
            response.json().then(function(data) {
                // Get latitude and longitude
                console.log(data)
                getWeatherData(data)
            });
        };
    });
};

// To get weather data from API
var getWeatherData = function (cityCoord) {
    var lat = cityCoord.coord.lat;
    var lon = cityCoord.coord.lon;
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&units=imperial&appid=6855f141fbc2348ef120b63c317a3472";
    // Make fetch request to url for weather data
    fetch(apiUrl).then(function(response) {
        // Request was sucessful
        if (response.ok) {
            response.json().then(function(data) {
               console.log(data)
               displayWeatherData(data)
            });
        };
    });
};

var displayWeatherData = function(cityInfo) {
    // Variables for current temperature, wind speed, humidity, and UV index 
    var curTemp = cityInfo.current.temp;
    var curWind = cityInfo.current.wind_speed;
    var curHumid = cityInfo.current.humidity;
    var curUV = cityInfo.current.uvi;

    // Adds a 

    // Add current weather conditions to p elements
    $($curTemp).text("Temperature: " + parseInt(curTemp) + "\u00B0");
    $($curWind).text("Wind: " + parseInt(curWind) + " MPH");
    $($curHumidity).text("Humidity: " + parseInt(curHumid) + " %");
    
    

    
    

        
    
}

$("#searchBtn").on("click", function() {
    getWeatherDataCoord($inputCity.value);
});