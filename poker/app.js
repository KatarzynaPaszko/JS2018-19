const { getFiveRandomCards } = require('./services');
const { highestConfigutration } = require('./possibleLayouts');


const taliaOnHand = getFiveRandomCards();
console.log("Masz na ręce następujące karty: ");
console.log(taliaOnHand);
const result = highestConfigutration(taliaOnHand);
console.log(result);