var $curTemp = document.getElementById("curr-temp");
var $curWind = document.getElementById("curr-wind");
var $curHumidity = document.getElementById("curr-humidity");
var $curUVPre = document.getElementById("curr-uvIndex");
var $curUVText = document.getElementById("uv-text");
var $curCityDate = document.getElementById("city-date")
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
               displayCurWeatherData(data)
            });
        };
    });
};

var displayCurWeatherData = function(cityInfo) {
    // Variables for current time, current temperature, wind speed, humidity, icon, and UV index 
    var curTemp = cityInfo.current.temp;
    var curWind = cityInfo.current.wind_speed;
    var curHumid = cityInfo.current.humidity;
    var curUV = cityInfo.current.uvi;
    var curIcon = cityInfo.current.weather[0].icon;
    var curTime = cityInfo.current.dt;
    console.log(curTime)
    console.log(new Date(308668740));
    
    // Creates an image element for the icon
    var iconUrl = "http://openweathermap.org/img/wn/" + curIcon + "@2x.png";
    var iconImg = $("<img>");
    $(iconImg).attr("src", iconUrl);
    $(iconImg).attr("alt", "Weather Icon");
    $(iconImg).addClass("cur-weather-icon");
    

    // Add current weather conditions to p elements
    $($curCityDate).text($inputCity.value).append(iconImg);
    $($curTemp).text("Temperature: " + parseInt(curTemp) + "\u00B0");
    $($curWind).text("Wind: " + parseInt(curWind) + " MPH");
    $($curHumidity).text("Humidity: " + parseInt(curHumid) + " %");
    $($curUVPre).text("UV Index: " + curUV);
    
    
    // Color codes how severe UV is

    
    

        
    
}

$("#searchBtn").on("click", function() {
    getWeatherDataCoord($inputCity.value);
});