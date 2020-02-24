
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof(matrix) === 'undefined') return [];
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0)  matrix[i].reverse();        
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(arr)
        for (let j = 0; j < matrix[i].length; j++) {
             arr.push(matrix[i][j])           
            }           
        }  
    return arr;
}
