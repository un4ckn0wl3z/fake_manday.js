function timeToDecimal(timeString) {
  var timeParts = timeString.split(':');
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]) || 0;
  var seconds = parseInt(timeParts[2]) || 0;

  var decimalHours = hours + (minutes / 60) + (seconds / 3600);
  return decimalHours;
}

const hours = [
 "07:00",
 "07:00",
 "07:00",
 "08:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "01:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
 "07:00",
    ]

for (let h of hours){
    var decimalHours = timeToDecimal(h);
    console.log(`${Math.ceil(decimalHours * 10) / 10}h`); // Output: 2.5125
}
