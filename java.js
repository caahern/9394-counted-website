// JavaScript Document

//Counted API - Dynamic Data Project

// When submit button clicked - run #submit-btn function
$(document).on('click','#submit-btn',function(){

// Hide specific div 
$("#Specific").fadeOut(500);

// Fade in End results page 
$("#End").fadeIn(2000);

// Fade in the Footer
$("footer").fadeIn();

//Fade in Info Bar
$("#infobar").fadeIn();

// Declare the gender variable as user genderInput
gender = document.getElementById("genderInput").value;

//Declare age variable as age Input
age = document.getElementById("ageInput").value;

// Declare the race variable as ethnicInput 
race = document.getElementById("ethnicInput").value;

// Declare the opinion of the user based on question asked as opinion
opinion = document.getElementById("specificInput").value;


// Call counted Api Data
$.ajax({
	// url for counted api with gender, race and age variables
       url: "https://thecountedapi.com/api/counted/?sex=" + gender + "&race=" + race + "&age=" + age,
    // Get request
       type: "GET",
    // When finished run the function data
  }).done(function(data) {
  
    //console.log the data for debugging
      console.log(data);
	
  // Declare the people variable as data
  var people = data;

  // If statment to change the appended memo if the data.length = 1
  if (data.length == 1) {
    $("#Memo").append(data.length + " " + "person just like you was killed by law enforcement in the U.S.A between 2015 - 2016");
}
 // Else statment 
  else { 
    $("#Memo").append(data.length + " " + "people just like you were killed by law enforcement in the U.S.A between 2015 - 2016");
  
}

  // Print the amount of people killed based on the user input and append to #memo
  //$("#Memo").append(data.length + " " + "people just like you were killed by law enforcement in the U.S.A between 2015 - 2016");
  
  // Print the data input of the user to #userint
  $("#userint").append("<p>You said" + " " + opinion + " " + "people was an appropriate number.</p>");
  


  //google maps ----------------------------------------------------------- 

  // For every person run function
  people.forEach(function(person){
  // console.log the data for each person
    console.log(person);
  // Declare the address variable
	  var address = person.address;
  // Declare the city variable 
	  var city = person.city;
  // Declare the state variable 
	  var state = person.state;


  // Google maps key 
  key = "AIzaSyDxPgT42cAX7G1N6ygCcZRpvaJI6VdDm5s";

  // Google maps geolocation api url
  url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "," + city + "," + state + "&key=" + key; 

  // USA variable for map centre 
  USA = {lat: 37.0902, lng: -95.7129};

  // Set the map variable as the map div
  map = new google.maps.Map(document.getElementById('map'), {zoom: 4,center: USA });

  
  // Get request for google maps API Geocode
  $.ajax({
  // url 
  url,
  //get request
  type: "GET"
  // run function after get request
  }).done(function(geocodedData){

	// console.log the geocode results for debug
    console.log(geocodedData.results[0].geometry.location.lat);

  // Declare the latitude variable
    var lat = geocodedData.results[0].geometry.location.lat;

  // console.log the geocode results for debug
    console.log(geocodedData.results[0].geometry.location.lng);

 // Declare the longtitude variable
    var lng = geocodedData.results[0].geometry.location.lng;

 // Declare the Lat lng variable 
    var myLatLng = {lat: lat, lng: lng};

 // Console.log the lat lng for debug
    console.log(myLatLng);

	  //set a timer which only runs after 2 seconds - need to wait for the data to be returned from the server
	  setTimeout(function (){

    // Set a maker for each myLatLng
    marker = new google.maps.Marker({position: myLatLng,map: map});

    }, 3000);
  });
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



