// 11) Create a function that will return the current day name in Polish.


// function today(){
//
// }
//
// today();

var days = ['Niedziela', 'Poniedzialek', 'Czwartek', 'Środa', 'Thursday', 'Piątek', 'Sobota'];
var d = new Date();
var dayName = days[d.getDay()];
// console.log(d.getDay());
console.log(dayName);
