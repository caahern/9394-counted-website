// JavaScript Document

//Counted API - Dynamic Data Project

// When submit button clicked - run #submit-btn function
$(document).on('click','#submit-btn',function(){

// Hide submit div 
$("#Specific").fadeOut(500);
// Fade in results page 
$("#End").fadeIn(2000);

$("footer").fadeIn();

// Declare the gender variable as user genderInput
gender = document.getElementById("genderInput").value;
//Declare age variable as age Input
age = document.getElementById("ageInput").value;
// Declare the race variable as ethnicInput 
race = document.getElementById("ethnicInput").value;
//
opinion = document.getElementById("specificInput").value;


// Call counted Api
$.ajax({
	// url for counted api
       url: "https://thecountedapi.com/api/counted/?sex=" + gender + "&race=" + race + "&age=" + age,
    // Get request
       type: "GET",
    // function data
  }).done(function(data) {
  
  // for test alert how many data entries are presented
  //alert("Retrieved " + data.length + " records from the dataset!");

  //console.log the data 
  console.log(data);

  // Final print - amount killed based on user information
  $("#Memo").append(data.length + " " + "people just like you were killed by law enforcement in the U.S.A between 2015 - 2016");
  

 
  $("#userint").append("<p>You said" + " " + opinion + " " + "people was an appropriate number.</p>");
  //google maps ----------------------------------------------------------- 

  // Declare the address variable as data.map of the data array
  
  var address = data.map(a => a.address);
  
  // For each address data print to console for debug
  address.forEach(function(address){

    console.log(address);
  });


  // Declare the city variable
  var city = data.map(a => a.city);

  // For each address data print to console for debug
  city.forEach(function(city){

    console.log(city);
  });




  // Declare the state variable 
  var state = data.map(a => a.state);

  // For each address data print to console for debug
  state.forEach(function(state){
    console.log(state);
  });


  // Google maps key 
  key = "AIzaSyDxPgT42cAX7G1N6ygCcZRpvaJI6VdDm5s";
  // Google maps geolocation api url
  url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "," + city + "," + state + "&key=" + key; 
  // Get request for google maps api

 
  $.ajax({
  // url 
  url,
  //get request
  type: "GET",
  
  // run function after get request
  }).done(function(data){
  // Log the data from request for debug
  console.log(data);


  // USA variable for map centre 
  USA = {lat: 37.0902, lng: -95.7129};

  // Set the map variable as the map div
  map = new google.maps.Map(document.getElementById('map'), {zoom: 4,center: USA });

  // Set a test marker on the USA 
  marker = new google.maps.Marker({position: USA,map: map});

    });
  });
});


// When #ageInput is changed hide the Age div
$(document).on('change','#ageInput',function(){
 
 $("#Age").fadeOut(1000);
 $('#Ethnicity').fadeIn(2000);

});


// When #ethnicInput is changed hide the ethnicity div
$(document).on('change','#ethnicInput',function(){
 
 $("#Ethnicity").fadeOut(1000);
 $('#Gender').fadeIn(2000);

});


// When #ethnicInput is changed hide the ethnicity div
$(document).on('change','#genderInput',function(){
 
 $("#Gender").fadeOut(1000);
 $('#Specific').fadeIn(2000);

});


$(document).on('click','#restart',function(){
 
 $("#End").fadeOut(2000);
 location.reload();
 $("#Age").fadeIn(3000);


});



