// JavaScript Document


//Counted API - Dynamic Data Project

// When Gender Input is changed - run #genderInput function
$(document).on('change','#genderInput',function(){

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
