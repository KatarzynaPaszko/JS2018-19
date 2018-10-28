// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.  

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];

function indexesOfHighest(array){
    let highestNumber = array[0];
    let indexesOfHighest = [];
    for(let i = 0; i< array.length; i++){
        if (array[i]> highestNumber){
            highestNumber = array[i];
        }
    }
    let idx = array.indexOf(highestNumber);
    while (idx != -1) {
        indexesOfHighest.push(idx);
        idx = array.indexOf(highestNumber, idx + 1);
    };
    return indexesOfHighest;
};
console.log(indexesOfHighest(arrayOfNumbers));

// [5, 9, 11]
let highest = Math.max(...arrayOfNumbers);
let indexers = arrayOfNumbers.map((el, i) => el === highest ? i : 0)
                             .filter(el => el);
