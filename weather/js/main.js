$('h1').html('Find the Temperature');

var APPID = "&appid=a67bbf228eedfb5462eaaa1efe3012e4";
var URL = "http://api.openweathermap.org/data/2.5/weather?q="

$('form').on('submit', function(e) {  // When the user submits the form
   e.preventDefault();   // Stop the page from reloading
   
   var city = $('#city').val();   // Find out what they entered into the isbn input

    $.get(
      URL + city + APPID,
      function(response) {
        $('#tempr').html(response.main.temp - 273.15);
        $('#descr').html(response.weather[0].description);
        $('#coord').html("longitude " + response.coord.lon + " : latitude " + response.coord.lat);
      }
      );
  });