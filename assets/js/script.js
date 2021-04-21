var $curTemp = document.getElementById("curr-temp");
var $curWind = document.getElementById("curr-wind");
var $curHumidity = document.getElementById("curr-humidity");
var $inputCity = document.getElementById("city-input");


var getWeatherData = function(cityName) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6855f141fbc2348ef120b63c317a3472";
    
    // Make a request to url 
    fetch(apiUrl).then(function(response) {
        // Request was successful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
                displayWeatherData(data);
            });
        };
    });
};

var displayWeatherData = function(cityInfo) {
    //To get current temperature 
    var curTemp = cityInfo.main.temp;
    // To convert from Kelvin to Farenheit
    var curTempConverted = parseInt(((curTemp - 273.15)*1.8) + 32);
    
    //Add current temperature to temperature p element
    $($curTemp).text("Temperature: " + curTempConverted + "\u00B0");
    

    //Append element to current weather div
    

        
    
}

$("#searchBtn").on("click", function() {
    getWeatherData($inputCity.value);
});