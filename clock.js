
//make a counter function to start keeping degreeTime
var seconds = 0; //start at 0 degrees
var minutes = 0;
var hours = 0;

var getSecond = document.getElementById("second");
var getMinute = document.getElementById("minute");
var getHour = document.getElementById("hour");

//counting up the seconds, minutes, and hours IN DEGREES nutz
var countSec = setInterval(function(){
  seconds = seconds + 6; //move 6 degrees per sec
  getSecond.style.transform = "rotate(" + seconds + "deg)";

  minutes = minutes + .1; //rotate .1 deg/sec
  getMinute.style.transform = "rotate(" + minutes + "deg)";

  hours = hours + .0083; //rotate .0083 deg/sec
  getHour.style.transform = "rotate(" + hours + "deg)";

  //console.log("IN DEGREES: ", "seconds is ", seconds, "minutes is ", minutes, "hours is ", hours);
  if (seconds >= 360) { //reset after 360 deg
  	seconds = 0; 
  } else if (minutes >= 360){
  	minutes = 0;
  } else if (hours >= 360) {
  	hours = 0;
  }
},1000);

// var getMinute = ();
// var getHour = ();

// var countMin = setInterval(function(){
//   minutes = minutes + 1; //rotate 1 deg/sec
//   if (minutes === 360) { //reset counter at 360 deg
//   	minutes = 0; 
//   }
// }, 1000);

// var countHour = setInterval(function(){
//   hours = hours + .1; //rotate .1 deg/sec
//   if (hours === 360) { //reset counter at 360 deg
//   	hours = 0; 
//   }
// }, 1000);

