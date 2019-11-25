// cities array
var cities = ["Los Angeles", "New York", "Paris"];

// load weather conditions at user location
navigator.geolocation.getCurrentPosition(function(position) {

  console.log(position);
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var APIKey = "2170de39c5050f413763bdb23256d561";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;

  // current conditions
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
    $("#description").text("Currently: " + response.weather[0].description);
    $("#icon").attr("src", iconURL);
    // convert kelvin to farenheit and then fill
    var temp = parseInt(response.main.temp);
    $("#temp").html("Temperature: " + temp + "° F");
    $("#humidity").html("Humidity: " + response.main.humidity + "%");
    $("#windSpeed").html("Wind Speed: " + response.wind.speed + " mph");

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#uvIndex").html("UV Index: " + response.value);
    })

  });

  // 5-day forecast
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey,
    method: "GET"
  }).then(function(response1) {
    console.log(response1);
    // fill day1
    var day1 = moment().add(1, "d").format("dddd");
    $("#day1").text(day1);
    var date1 = moment().add(1, "d").format("M/D/YY");
    $("#date1").text(date1);
    var iconCode = response1.list[0].weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    $("#icon1").attr("src", iconURL);
    $("#temp1").text("Temp: " + parseInt(response1.list[0].main.temp) + "° F");
    $("#humidity1").text("Humidity: " + response1.list[0].main.humidity + "%");
    // fill day2
    var day2 = moment().add(2, "d").format("dddd");
    $("#day2").text(day2);
    var date2 = moment().add(2, "d").format("M/D/YY");
    $("#date2").text(date2);
    var iconCode = response1.list[8].weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    $("#icon2").attr("src", iconURL);
    $("#temp2").text("Temp: " + parseInt(response1.list[8].main.temp) + "° F");
    $("#humidity2").text("Humidity: " + response1.list[8].main.humidity + "%");
    // fill day3
    var day3 = moment().add(3, "d").format("dddd");
    $("#day3").text(day3);
    var date3 = moment().add(3, "d").format("M/D/YY");
    $("#date3").text(date3);
    var iconCode = response1.list[16].weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    $("#icon3").attr("src", iconURL);
    $("#temp3").text("Temp: " + parseInt(response1.list[16].main.temp) + "° F");
    $("#humidity3").text("Humidity: " + response1.list[16].main.humidity + "%");
    // fill day4
    var day4 = moment().add(4, "d").format("dddd");
    $("#day4").text(day4);
    var date4 = moment().add(4, "d").format("M/D/YY");
    $("#date4").text(date4);
    var iconCode = response1.list[24].weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    $("#icon4").attr("src", iconURL);
    $("#temp4").text("Temp: " + parseInt(response1.list[24].main.temp) + "° F");
    $("#humidity4").text("Humidity: " + response1.list[24].main.humidity + "%");
    // fill day5
    var day5 = moment().add(5, "d").format("dddd");
    $("#day5").text(day5);
    var date5 = moment().add(5, "d").format("M/D/YY");
    $("#date5").text(date5);
    var iconCode = response1.list[32].weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    $("#icon5").attr("src", iconURL);
    $("#temp5").text("Temp: " + parseInt(response1.list[32].main.temp) + "° F");
    $("#humidity5").text("Humidity: " + response1.list[32].main.humidity + "%");
  });

});

// current weather AJAX call
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
    $("#description").text(response.weather[0].description);
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
  getForecastInfo();
  // saveUserInput();
});

// set today's date
function setDate() {
  var today = moment().format('dddd, MMMM D, YYYY');
  $("#date").text(today);
};
setDate();

// forecast AJAX call
function getForecastInfo() {

  var city = $("#userInput").val();
  var APIKey = "2170de39c5050f413763bdb23256d561";
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // grab icon code and generate url
    var iconCode = response.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    console.log(iconURL);
    // $("#description").text(response.weather[0].description);
    // $("#icon").attr("src", iconURL);
    // // convert kelvin to farenheit and then fill
    // var temp = parseInt(((response.main.temp-273.15)*1.8)+32);
  });

};

// script for loading 5-day forecast
// function day1() {
//   var day1 = moment().add(1, "d").format("M/D/YY");
//   $("#day1").text(day1);
// };
// day1();

// function day2() {
//   var day2 = moment().add(2, "d").format("M/D/YY");
//   $("#day2").text(day2);
// };
// day2();

// function day3() {
//   var day3 = moment().add(3, "d").format("M/D/YY");
//   $("#day3").text(day3);
// };
// day3();

// function day4() {
//   var day4 = moment().add(4, "d").format("M/D/YY");
//   $("#day4").text(day4);
// };
// day4();

// function day5() {
//   var day5 = moment().add(5, "d").format("M/D/YY");
//   $("#day5").text(day5);
// };
// day5();