// Description
// Given five positive integers, find the minimum and maximum
// values that can be calculated by summing exactly
// four of the five integers. Then print the respective
// minimum and maximum values as a single line of two 
// space-separated long integers.


const array = [1, 2, 3, 4, 5];

var min = { value: 9999999, index: 0 }; 
var max = { value: 0,        index: 0 };

var minSum = 0;
var maxSum = 0;


for(var i = 0; i < array.length; i++){
    if(min.value > array[i]){
        min.value = array[i];
        min.index = i;
    }
    if(max.value < array[i]){
        max.value = array[i]
        max.index = i;
    }
}

var getMinSum = (min) => {
    array.splice(min.index, 1);
    array.forEach((value) => {
        maxSum += value
    });
    array.splice(min.index, 0, min.value);

}
getMinSum(min);


var getMax = (max) => {
    array.splice(max.index, 1);
    array.forEach((value) => {
        minSum += value;
    })
    array.splice(max.index, 0, max.value);
}

getMax(max);

console.log(minSum, maxSum)



