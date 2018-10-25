// 1)	From years in array check for leap years [1974, 1900, 1985, 2000]

const years = [1974, 1900, 1985, 2000];

// podzielne przez 4 i 100 ale nie przez 400

let leapYears =[];

for ( let i =0; i<years.length; i++) {
    let currentyear = years[i];
    if ((currentyear%4===0 || currentyear%100 === 0)&& currentyear%400 !=0) {
        leapYears.push(currentyear);
    }
}

console.log(leapYears);

// [1900]