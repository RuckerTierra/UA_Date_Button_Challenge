// Project: When the button is pressed it will display the day or month or season
// Step 1: create variables to store info: DONE
// Step 2: create the funtion to get day: DONE
// Step 3: create the funtion to get month: DONE
// CURRENTLY >> Step 4: create the funtion to get season: DONE
// Step 5: testing: DONE
// Project: DONE


// Step 1: create variables to store info
let currentDay;
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentMonth;
const months = ["January", "February", "March", "April", "May", "June", "Julie", "August", "September", "October", "November", "December"];

let currentSeason; // Spring: March 1-May 31; Summer June 1-August 31; Autumn September 1; Winter December 1-February 29.
// Winter: December-February; Spring: March-May; Summer: June-August; Autumn: September - November


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
  currentSeason = months[d.getMonth()];
  if (currentSeason == "December" || currentSeason == "January" || currentSeason == "February"){
    document.getElementById("currentSeason").innerHTML = "Winter";
    return;
  } else if (currentSeason == "March" || currentSeason == "April" || currentSeason == "May"){
    document.getElementById("currentSeason").innerHTML = "Spring";
    return;
  } else if (currentSeason == "June" || currentSeason == "July" || currentSeason == "August"){
    document.getElementById("currentSeason").innerHTML = "Summer";
    return;
  } else if (currentSeason == "September" || currentSeason == "October" || currentSeason == "November"){
    document.getElementById("currentSeason").innerHTML = "Autumn";
    return;
  };
  console.log("The season is " + currentSeason + ".");
}

// Step 5: test project > COMPLETE
// Project: COMPLETE