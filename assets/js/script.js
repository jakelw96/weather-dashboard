var $inputCity = document.getElementById("city-input");
document.querySelector(".curr-weather").style.visibility = "hidden";

// Creates buttons
var createBtn = function(btnData) {
    var searchBtn = $("<button>");
    $(searchBtn).text(btnData);
    $(searchBtn).addClass("prev-city-btns ");

    $(searchBtn).attr("id", "prev-city-btns")
    $(searchBtn).click(function() {
        getWeatherDataCoord(btnData);
    });
    
    return searchBtn;
};

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
                
                //Variables for each localStorage item to be created
                var firstBtn = localStorage.getItem("1st-search");
                var secondBtn = localStorage.getItem("2nd-search");
                var thirdBtn = localStorage.getItem("3rd-search");
                var fourthBtn = localStorage.getItem("4th-search");
                var fifthBtn = localStorage.getItem("5th-search");
                var sixthBtn = localStorage.getItem("6th-search");
                var seventhBtn = localStorage.getItem("7th-search");
                var eigthBtn = localStorage.getItem("8th-search");
                
                // Checks if there is data already in localStorage for each city btn, if not, 
                // saves the input, with a max of 8 buttons- 
                if (((firstBtn) || (secondBtn) || (thirdBtn) || (fourthBtn) || (fifthBtn) || (sixthBtn) || (seventhBtn) || (eigthBtn)) === null) {
                    localStorage.setItem("1st-search", JSON.stringify(cityName))
                } else if (((secondBtn) || (thirdBtn) || (fourthBtn) || (fifthBtn) || (sixthBtn) || (seventhBtn) || (eigthBtn)) === null) {
                    localStorage.setItem("2nd-search", JSON.stringify(cityName));
                } else if (((thirdBtn) || (fourthBtn) || (fifthBtn) || (sixthBtn) || (seventhBtn) || (eigthBtn)) === null) {
                    localStorage.setItem("3rd-search", JSON.stringify(cityName));
                } else if (((fourthBtn) || (fifthBtn) || (sixthBtn) || (seventhBtn) || (eigthBtn)) === null) {
                    localStorage.setItem("4th-search", JSON.stringify(cityName));
                } else if (((fifthBtn) || (sixthBtn) || (seventhBtn) || (eigthBtn)) === null) {  
                    localStorage.setItem("5th-search", JSON.stringify(cityName));
                } else if (((sixthBtn) || (seventhBtn) || (eigthBtn)) === null) { 
                    localStorage.setItem("6th-search", JSON.stringify(cityName));
                } else if (((seventhBtn) || (eigthBtn)) === null) {
                    localStorage.setItem("7th-search", JSON.stringify(cityName));
                } else if (eigthBtn === null) {
                    localStorage.setItem("8th-search", JSON.stringify(cityName));
                } else {
                    // If all btn elements have localStorage data, then each btn will be
                    // replaced with data from the prev with the 1st being most recent search 
                    localStorage.setItem("2nd-search", firstBtn);
                    localStorage.setItem("3rd-search", secondBtn);
                    localStorage.setItem("4th-search", thirdBtn);
                    localStorage.setItem("5th-search", fourthBtn);
                    localStorage.setItem("6th-search", fifthBtn);
                    localStorage.setItem("7th-search", sixthBtn);
                    localStorage.setItem("8th-search", seventhBtn);
                    localStorage.setItem("1st-search", JSON.stringify(cityName));
                };

                var $btnOne = $("#btn-1");
                var $btnTwo = $("#btn-2");
                var $btnThree = $("#btn-3");
                var $btnFour = $("#btn-4");
                var $btnFive = $("#btn-5");
                var $btnSix = $("#btn-6");
                var $btnSeven = $("#btn-7");
                var $btnEight = $("#btn-8");

               // Checks if there is data already in the individual btn containers and replaces with searched contents for session
               if ($btnOne.is(':empty')) {
                    $btnOne.append(createBtn(cityName))
                } else if (($btnTwo.is(':empty')) && ($btnOne.length > 0)) {
                    $btnTwo.append(createBtn($btnOne.text()));
                    ($btnOne.children().first()).text(cityName);
                } else if (($btnThree.is(':empty')) && ($btnTwo.length > 0)) {
                    $btnThree.append(createBtn($btnTwo.text()));
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName);
                } else if (($btnFour.is(':empty')) && ($btnThree.length > 0)) {
                    $btnFour.append(createBtn($btnThree.text()));
                    ($btnThree.children().first()).text($btnTwo.text());
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName);
                } else if (($btnFive.is(':empty')) && ($btnFour.length > 0)) {
                    $btnFive.append(createBtn($btnFour.text()));
                    ($btnFour.children().first()).text($btnThree.text());
                    ($btnThree.children().first()).text($btnTwo.text());
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName);
                } else if (($btnSix.is(':empty')) && ($btnFive.length > 0)) {
                    $btnSix.append(createBtn($btnFive.text()));
                    ($btnFive.children().first()).text($btnFour.text());
                    ($btnFour.children().first()).text($btnThree.text());
                    ($btnThree.children().first()).text($btnTwo.text());
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName);
                } else if (($btnSeven.is(':empty')) && ($btnSix.length > 0)) {
                    $btnSeven.append(createBtn($btnSix.text()));
                    ($btnSix.children().first()).text($btnFive.text());
                    ($btnFive.children().first()).text($btnFour.text());
                    ($btnFour.children().first()).text($btnThree.text());
                    ($btnThree.children().first()).text($btnTwo.text());
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName);
                } else if (($btnEight.is(':empty')) && ($btnSeven.length > 0)) {
                    $btnEight.append(createBtn($btnSeven.text()));
                    ($btnSeven.children().first()).text($btnSix.text());
                    ($btnSix.children().first()).text($btnFive.text());
                    ($btnFive.children().first()).text($btnFour.text());
                    ($btnFour.children().first()).text($btnThree.text());
                    ($btnThree.children().first()).text($btnTwo.text());
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName); 
                } else {
                    // If all btn elements have data, then each btn will be
                    // replaced with data from the prev with the 1st being most recent search in session
                    ($btnEight.children().first()).text($btnSeven.text());
                    ($btnSeven.children().first()).text($btnSix.text());
                    ($btnSix.children().first()).text($btnFive.text());
                    ($btnFive.children().first()).text($btnFour.text());
                    ($btnFour.children().first()).text($btnThree.text());
                    ($btnThree.children().first()).text($btnTwo.text());
                    ($btnTwo.children().first()).text($btnOne.text());
                    ($btnOne.children().first()).text(cityName); 
                };
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
    $(iconImg).attr("id", "cur-weather-icon");
    $(iconImg).addClass("cur-weather-icon");

    return iconImg;
};


// Displays current weather data in the current weather box
var displayCurWeatherData = function(curWeather) {
    var $curTemp = document.getElementById("curr-temp");
    var $curWind = document.getElementById("curr-wind");
    var $curHumidity = document.getElementById("curr-humidity");
    var $curUVPre = document.getElementById("curr-uvIndex");
    var $curUVText = document.getElementById("uv-text");
    var $curCityDate = document.getElementById("city-date")
    
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
    // Checks if there is a current img element and replaces if one exists
    if ($("#day-one-icon").is(':empty')) {
        $("#day-one-icon").append(createIcon(dayOneIcon));
    } else {
        $("#day-one-icon").replaceWith(createIcon(dayOneIcon));
    };
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
    // Checks if there is a current img element and replaces if one exists
    if ($("#day-two-icon").is(':empty')) {
        $("#day-two-icon").append(createIcon(dayTwoIcon));
    } else {
        $("#day-two-icon").replaceWith(createIcon(dayTwoIcon));
    };
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
    // Checks if there is a current img element and replaces if one exists
    if ($("#day-three-icon").is(':empty')) {
        $("#day-three-icon").append(createIcon(dayThreeIcon));
    } else {
        $("#day-three-icon").replaceWith(createIcon(dayThreeIcon));
    };
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
    // Checks if there is a current img element and replaces if one exists
    if ($("#day-four-icon").is(':empty')) {
        $("#day-four-icon").append(createIcon(dayFourIcon));
    } else {
        $("#day-four-icon").replaceWith(createIcon(dayFourIcon));
    };
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
    // Checks if there is a current img element and replaces if one exists
    if ($("#day-five-icon").is(':empty')) {
        $("#day-five-icon").append(createIcon(dayFiveIcon));
    } else {
        $("#day-five-icon").replaceWith(createIcon(dayFiveIcon));
    };
    $("#fifth-day-temp").text("Temp: " + parseInt(dayFiveTemp) + "\u00B0");
    $("#fifth-day-wind").text("Wind: " + parseInt(dayFiveWind) + " MPH");
    $("#fifth-day-humid").text("Humidity: " + parseInt(dayFiveHumid) + " %");
};

// To add a btn for a previous city searched


//Creates a button if data is in localStorage
var loadBtns = function() {
    var firstBtn = JSON.parse(localStorage.getItem("1st-search"));
    var secondBtn = JSON.parse(localStorage.getItem("2nd-search"));
    var thirdBtn = JSON.parse(localStorage.getItem("3rd-search"));
    var fourthBtn = JSON.parse(localStorage.getItem("4th-search"));
    var fifthBtn = JSON.parse(localStorage.getItem("5th-search"));
    var sixthBtn = JSON.parse(localStorage.getItem("6th-search"));
    var seventhBtn = JSON.parse(localStorage.getItem("7th-search"));
    var eigthBtn = JSON.parse(localStorage.getItem("8th-search"));
    
    if (firstBtn !== null) {
        $("#btn-1").append(createBtn(firstBtn));
        $("#btn-1").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(firstBtn);
        })
    }       
    if (secondBtn !== null) {
        $("#btn-2").append(createBtn(secondBtn));
        $("#btn-2").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(secondBtn);
        })
    }  
    if (thirdBtn !== null) {
        $("#btn-3").append(createBtn(thirdBtn));
        $("#btn-3").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(thirdBtn);
        })
    }
    if (fourthBtn !== null) {
        $("#btn-4").append(createBtn(fourthBtn));
        $("#btn-4").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(fourthBtn);
        })
    }
    if (fifthBtn !== null) {  
        $("#btn-5").append(createBtn(fifthBtn));
        $("#btn-5").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(fifthBtn)
        })
    }
    if (sixthBtn !== null) { 
        $("#btn-6").append(createBtn(sixthBtn));
        $("#btn-6").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(sixthBtn);
        })
    }
    if (seventhBtn !== null) {
        $("#btn-7").append(createBtn(seventhBtn));
        $("#btn-7").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(seventhBtn);
        })
    }
    if (eigthBtn !== null) {
        $("#btn-8").append(createBtn(eigthBtn));
        $("#btn-8").click(function() {
            document.querySelector(".curr-weather").style.visibility = "visible";
            getWeatherDataCoord(eigthBtn);
        })
    }    
};
loadBtns();

$("#searchBtn").on("click", function() {
    document.querySelector(".curr-weather").style.visibility = "visible";
    getWeatherDataCoord($inputCity.value)
});