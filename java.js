// JavaScript Document


//Counted API - Dynamic Data Project

// When submit button clicked - run #submit-btn function
$(document).on('click','#submit-btn',function(){

// Hide submit div 
$("#Submit").fadeOut();

// Declare the gender variable as user genderInput
gender = document.getElementById("genderInput").value;
//Declare age variable as age Input
age = document.getElementById("ageInput").value;
// Declare the race variable as ethnicInput 
race = document.getElementById("ethnicInput").value;

// Call counted Api
$.ajax({
	// url for counted api
       url: "https://thecountedapi.com/api/counted/?sex=" + gender + "&race=" + race + "&age=" + age,
    // Get request
       type: "GET",
    // function data
  }).done(function(data) {
  // for test alert how many data entries are presented
  alert("Retrieved " + data.length + " records from the dataset!");

  //console.log the data 
  console.log(data);
  // Test final print
  $(".end").append(data.length + "People just like you were Killed by police between 2015 - 2016");
  });

});


// When #ageInput is changed hide the Age div
$(document).on('change','#ageInput',function(){
 
 $("#Age").fadeOut();

});


// When #ethnicInput is changed hide the ethnicity div
$(document).on('change','#ethnicInput',function(){
 
 $("#Ethnicity").fadeOut();

});

// When #genderInput is changed hide the Gender div
$(document).on('change','#genderInput',function(){
 
 $("#Gender").fadeOut();

});










//google maps

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}