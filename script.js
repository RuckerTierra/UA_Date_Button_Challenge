// Project: When the button it pressed it will display the day or month or season
// Step 1: create variables to store info: DONE
// Step 2: create the funtion to get day: DONE
// Step 3: create the funtion to get month: DONE
// CURRENTLY >> Step 4: create the funtion to get season: in progress
// Step 5: testing
// Project: in progress


// Step 1: create variables to store info
let currentDay;
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentMonth;
const months = ["January", "February", "March", "April", "May", "June", "Julie", "August", "September", "October", "November", "December"];

let currentSeason; // Spring: March 1-May 31; Summer June 1-August 31; Autumn September 1; Winter December 1-February 29.
// Winter: December-February; Spring: March-May; Summer: June-August; Autumn: September - November
const seasons = [
  "Spring", 
  "Summer", 
  "Autumn", 
  "Winter"
];

// Step 2: create the funtion to get day
function getDay(){
  var d = new Date();
  currentDay = weekdays[d.getDay()];
  //console.log("Today is " + currentDay + ".");
  document.getElementById("currentDay").innerHTML = currentDay;
}

// Step 3: create the funtion to get month
function getMonth(){
  var d = new Date();
  currentMonth = months[d.getMonth()];
  //console.log("The month is " + currentMonth + ".");
  document.getElementById("currentMonth").innerHTML = currentMonth;
}

// Step 4: create the funtion to get season
function getSeason(){
  var d = new Date();
  currentSeason = 
  console.log("The season is " + currentSeason + ".");
  // document.getElementById("currentSeason").innerHTML = currentSeason;
}

// Step 5: test project
// Project: in progress