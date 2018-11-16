// 12) Create a function that tells us how many days till Friday

// var days = ['Niedziela', 'Poniedzialek', 'Czwartek', 'Środa', 'Thursday', 'Piątek', 'Sobota'];
var d = new Date();
var dayNumber = d.getDay();
// console.log(d.getDay());
function tillFriday() {
  if (dayNumber===5) {
    console.log("It's Friday");
  } else if (dayNumber < 5) {
    let left = 5 - dayNumber;
    console.log(left + 'days left till Friday.');
  } else if (dayNumber === 6){
    console.log(7 + 'days left till Friday.');
  } else {
    console.log(6 + 'days left till Friday.');
  }
}
tillFriday();
