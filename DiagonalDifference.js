// Description: 
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// 1 2 3
// 4 5 6
// 7 8 9
// add the main diagonal: 1 + 5 + 9 = 15
// add the second diagonal:  3 + 5 + 7 = 17
// subtract the two results = 15 - 17
// the absolute number is the opposite 15 = -15


const array = [
                [11, 2, 4],
                [4, 5, 6],
                [10, 8, -12]
            ];
var x = []; 
var y = [];
var arraySize = array.length; 

array.forEach((value, index) => {
    x[index] = value[index];
    y[index] = value[arraySize - index - 1]
});

function sumArray(arr){
    var soma = 0;
    arr.forEach(number =>{
        return soma += number
    });
    console.log(soma);
    return soma;
}

function convertToAbsolute(value){
    if(value < 0){
        return value * - 1;
    }else{
        return value;
    }
}
console.log(convertToAbsolute((sumArray(x) - sumArray(y))));
