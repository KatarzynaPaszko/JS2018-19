// 5)	Choose longest string from the array. ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend']. One loop run

const stringsArray = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'];

function findLongestString(array){
    let longestString = array[0];
    for(let i = 0; i<array.length; i++){
        if(longestString.length < array[i].length) {
            longestString = array[i];
        }
    }
    return longestString;
}

console.log(findLongestString(stringsArray));

// Politechnika