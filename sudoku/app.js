
const { sudokuToSolve } = require('./sudokuToSolve');
const { printSudokuToSolve } = require('./services')
const areAllValuesFilled = (sudoku) => {
    const allValues = [];
    sudoku.forEach(element => {
        allValues.push(element.val);
    });
    const shouldWeContinue = allValues.some(x => x == 0);
    return shouldWeContinue;

};

const getCurrentSquareValues = (sudoku, rowNum, colNum) => {
    let startingRowPoint;
    for (let index = 0; index < 3; index++) {
        if ((9 - rowNum) % 3 === 2) {
            startingRowPoint = rowNum;
        } else if ((9 - rowNum) % 3 === 1) {
            startingRowPoint = rowNum - 1;
        } else {
            startingRowPoint = rowNum - 2;
        }
    };
    let startingColumnPoint;
    for (let index = 0; index < 3; index++) {
        if ((9 - colNum) % 3 === 2) {
            startingColumnPoint = colNum;
        } else if ((9 - colNum) % 3 === 1) {
            startingColumnPoint = colNum - 1;
        } else {
            startingColumnPoint = colNum - 2;
        }
    }
    let currentSquareValues = [];
    for (let rowIndex = startingRowPoint; rowIndex < (startingRowPoint + 3); rowIndex++) {
        for (let columnIndex = startingColumnPoint; columnIndex < (startingColumnPoint + 3); columnIndex++) {
            sudoku.forEach(element => {
                if (element.c == columnIndex && element.r == rowIndex) {
                    currentSquareValues.push(element.val);
                }
            })
        }
    }
    return currentSquareValues;
}

const doesArrayContainsValue = (array, num) => {
    const shouldBeAdded = array.includes(num);
    return shouldBeAdded;
}

const takeEveryRow = (sudoku) => {
    let indexOfCurrentRow;
    for (let index = 1; index <= 9; index++) {

        indexOfCurrentRow = index;                                      // <= current row index

        const row = [];                                                 // <= current row array with values
        sudoku.forEach(element => {
            if (element.r == index) {
                row.push(element.val)
            };
        });

        let indexesOfZero = [];                                     // <= indexesOfZero w current row
        row.forEach((element, index) => {
            if (element == 0) {
                indexesOfZero.push(index + 1)
            }
        })

        let missingValues = [];                                     // <= missingValues w current row
        for (let index = 1; index <= 9; index++) {
            if (!(row.includes(index))) {
                missingValues.push(index);
            }
        }

        missingValues.forEach(missingNumber => {                    //dla każdej brakujjącej wartości
            let possibleCoordinatesOfMissingValue = [];
            indexesOfZero.forEach(columnNumberWithZero => {            //sprawdz wszystkie zera w tym rzędzie
                const thisColumnValues = [];
                sudoku.forEach(element => {
                    if (element.c === columnNumberWithZero) {
                        thisColumnValues.push(element.val);
                    }
                })
                const thisSquareValues = getCurrentSquareValues(sudoku, indexOfCurrentRow, columnNumberWithZero);
                const isMissingNumAtThisSquare = doesArrayContainsValue(thisSquareValues, missingNumber);
                const isMissingNumberAtThisColumn = doesArrayContainsValue(thisColumnValues, missingNumber);

                if (!isMissingNumAtThisSquare && !isMissingNumberAtThisColumn) {
                    possibleCoordinatesOfMissingValue.push({ c: columnNumberWithZero, r: indexOfCurrentRow })
                }
            });
            if (possibleCoordinatesOfMissingValue.length === 1) {
                sudoku.forEach(element => {
                    if (element.c === possibleCoordinatesOfMissingValue[0].c && element.r === possibleCoordinatesOfMissingValue[0].r) {
                        element.val = missingNumber;
                    }
                })
            }
        })
    }
}
console.log('Sudoku to solve:');
printSudokuToSolve(sudokuToSolve)
do {
    takeEveryRow(sudokuToSolve);
}
while (areAllValuesFilled(sudokuToSolve));
console.log('Sudoku solved !!!');
printSudokuToSolve(sudokuToSolve)