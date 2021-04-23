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
               displayFiveForecast(data)
            });
        };
    });
};

//Function to create img element for weather icons
var createIcon = function(icon) {
    var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    var iconImg = $("<img>");
    $(iconImg).attr("src", iconUrl);
    $(iconImg).attr("alt", "Weather Icon");
    $(iconImg).addClass("cur-weather-icon");
    return iconImg;
};


// Displays current weather data in the current weather box
var displayCurWeatherData = function(curWeather) {
    // Variables for current time, current temperature, wind speed, humidity, icon, and UV index 
    var curTemp = curWeather.current.temp;
    var curWind = curWeather.current.wind_speed;
    var curHumid = curWeather.current.humidity;
    var curUV = curWeather.current.uvi;
    var curIcon = curWeather.current.weather[0].icon;
    var curDate = (new Date(curWeather.current.dt * 1000 + (curWeather.timezone_offset * 1000)));
    
    // Add current weather conditions to p elements
    $($curCityDate).text($inputCity.value + " " + "(" + curDate.toDateString() + ")").append(createIcon(curIcon));
    $($curTemp).text("Temperature: " + parseInt(curTemp) + "\u00B0");
    $($curWind).text("Wind: " + parseInt(curWind) + " MPH");
    $($curHumidity).text("Humidity: " + parseInt(curHumid) + " %");
    $($curUVPre).text("UV Index: " + curUV);
    
    
    // Color codes how severe UV is
}

// Displays 5 day forecast in cards
var displayFiveForecast = function(fiveForecast) {
    // Display data for 1st day
    var dayOneTemp = fiveForecast.daily[0].temp.day;
    var dayOneWind = fiveForecast.daily[0].wind_speed;
    var dayOneHumid = fiveForecast.daily[0].humidity;
    var dayOneIcon = fiveForecast.daily[0].weather[0].icon;
    var curDate = (new Date(fiveForecast.daily[0].dt * 1000 + (fiveForecast.timezone_offset * 1000)));

    $("#first-day-date").text(curDate.toDateString());
    $("#day-one-icon").append(createIcon(dayOneIcon));
    $("#first-day-temp").text("Temp: " + parseInt(dayOneTemp) + "\u00B0");
    $("#first-day-wind").text("Wind: " + parseInt(dayOneWind) + " MPH");
    $("#first-day-humid").text("Humidity: " + parseInt(dayOneHumid) + " %");

    // Display data for 2nd day
    var dayTwoTemp = fiveForecast.daily[1].temp.day;
    var dayTwoWind = fiveForecast.daily[1].wind_speed;
    var dayTwoHumid = fiveForecast.daily[1].humidity;
    var dayTwoIcon = fiveForecast.daily[1].weather[0].icon;
    var curDate = (new Date(fiveForecast.daily[1].dt * 1000 + (fiveForecast.timezone_offset * 1000)));

    $("#second-day-date").text(curDate.toDateString());
    $("#day-two-icon").append(createIcon(dayTwoIcon));
    $("#second-day-temp").text("Temp: " + parseInt(dayTwoTemp) + "\u00B0");
    $("#second-day-wind").text("Wind: " + parseInt(dayTwoWind) + " MPH");
    $("#second-day-humid").text("Humidity: " + parseInt(dayTwoHumid) + " %");

    // Display data for 3rd day
    var dayThreeTemp = fiveForecast.daily[2].temp.day;
    var dayThreeWind = fiveForecast.daily[2].wind_speed;
    var dayThreeHumid = fiveForecast.daily[2].humidity;
    var dayThreeIcon = fiveForecast.daily[2].weather[0].icon;
    var curDate = (new Date(fiveForecast.daily[2].dt * 1000 + (fiveForecast.timezone_offset * 1000)));

    $("#third-day-date").text(curDate.toDateString());
    $("#day-three-icon").append(createIcon(dayThreeIcon));
    $("#third-day-temp").text("Temp: " + parseInt(dayThreeTemp) + "\u00B0");
    $("#third-day-wind").text("Wind: " + parseInt(dayThreeWind) + " MPH");
    $("#third-day-humid").text("Humidity: " + parseInt(dayThreeHumid) + " %");

    // Display data for 4th day
    var dayFourTemp = fiveForecast.daily[3].temp.day;
    var dayFourWind = fiveForecast.daily[3].wind_speed;
    var dayFourHumid = fiveForecast.daily[3].humidity;
    var dayFourIcon = fiveForecast.daily[3].weather[0].icon;
    var curDate = (new Date(fiveForecast.daily[3].dt * 1000 + (fiveForecast.timezone_offset * 1000)));

    $("#fourth-day-date").text(curDate.toDateString());
    $("#day-four-icon").append(createIcon(dayFourIcon));
    $("#fourth-day-temp").text("Temp: " + parseInt(dayFourTemp) + "\u00B0");
    $("#fourth-day-wind").text("Wind: " + parseInt(dayFourWind) + " MPH");
    $("#fourth-day-humid").text("Humidity: " + parseInt(dayFourHumid) + " %");

    // Display data for 5th day
    var dayFiveTemp = fiveForecast.daily[4].temp.day;
    var dayFiveWind = fiveForecast.daily[4].wind_speed;
    var dayFiveHumid = fiveForecast.daily[4].humidity;
    var dayFiveIcon = fiveForecast.daily[4].weather[0].icon;
    var curDate = (new Date(fiveForecast.daily[4].dt * 1000 + (fiveForecast.timezone_offset * 1000)));

    $("#fifth-day-date").text(curDate.toDateString());
    $("#day-five-icon").append(createIcon(dayFiveIcon));
    $("#fifth-day-temp").text("Temp: " + parseInt(dayFiveTemp) + "\u00B0");
    $("#fifth-day-wind").text("Wind: " + parseInt(dayFiveWind) + " MPH");
    $("#fifth-day-humid").text("Humidity: " + parseInt(dayFiveHumid) + " %");
};

$("#searchBtn").on("click", function() {
    getWeatherDataCoord($inputCity.value);
});