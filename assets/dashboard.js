// set today's date
function setDate() {
  var today = moment().format('dddd, MMMM D, YYYY');
  $("#date").text(today);
};
setDate();

// cities array
var cities = ["Los Angeles", "New York", "Paris"];

// define function for retrieving and loading 5-day forecast by city name
function forecast() {
  var APIKey = "2170de39c5050f413763bdb23256d561";
  var city = $("#userInput").val();
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey,
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
};

// load weather conditions at user location
navigator.geolocation.getCurrentPosition(function(position) {

  console.log(position);
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var APIKey = "2170de39c5050f413763bdb23256d561";
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;

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
    url: "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey,
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

// search function for user input
function getWeatherInfo() {

  var city = $("#userInput").val();
  var APIKey = "2170de39c5050f413763bdb23256d561";
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

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
    $("#description").text("Currently: " + response.weather[0].description);
    $("#icon").attr("src", iconURL);
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

  forecast();

};

// generate buttons
function renderButtons() {
  var newBtn = $("")
}

// new search
$("#button-addon2").on("click", function(event) {
  event.preventDefault();
  getWeatherInfo();
  // saveUserInput();
});