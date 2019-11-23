// cities array
var cities = ["Los Angeles", "New York", "Paris"];

// initial AJAX call
function getWeatherInfo() {

  var city = $("#userInput").val();
  var APIKey = "2170de39c5050f413763bdb23256d561";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // fill city name
    $("#cardHeader").html(response.name);
    // grab icon code and generate url
    var iconCode = response.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    console.log(iconURL);
    $("#icon").attr("src", iconURL);
    // convert kelvin to farenheit and then fill
    var temp = parseInt(((response.main.temp-273.15)*1.8)+32);
    $("#temp").html("Temperature: " + temp + "° F");
    $("#humidity").html("Humidity: " + response.main.humidity + "%");
    $("#windSpeed").html("Wind Speed: " + response.wind.speed + " mph");
    // $("#uvIndex").html("UV Index: " + response.)
  });

};

// generate buttons
function renderButtons() {
  var newBtn = $("")
}

// new search
$("#button-addon2").on("click", function(event) {
  event.preventDefault();
  getWeatherInfo();
  saveUserInput();
});

// set today's date
function setDate() {
  var today = moment().format('dddd, MMMM Do, YYYY');
  $("#date").text(today);
};
setDate();

// script for loading 5-day forecast
function day1() {
  var day1 = moment().add(1, "d").format("M/D/YY");
  $("#day1").text(day1);
};
day1();

function day2() {
  var day2 = moment().add(2, "d").format("M/D/YY");
  $("#day2").text(day2);
};
day2();

function day3() {
  var day3 = moment().add(3, "d").format("M/D/YY");
  $("#day3").text(day3);
};
day3();

function day4() {
  var day4 = moment().add(4, "d").format("M/D/YY");
  $("#day4").text(day4);
};
day4();

function day5() {
  var day5 = moment().add(5, "d").format("M/D/YY");
  $("#day5").text(day5);
};
day5();