const printSudokuToSolve = (sudoku) => {
    for (let index = 1; index <= 9; index++) {
        const row = [];
        sudoku.forEach(element => {
            if (element.r == index) {
                row.push(element.val)
            };
        });
        console.log(row);
    }
};

module.exports = {
    printSudokuToSolve
};