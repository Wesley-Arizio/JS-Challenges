//  Description:
//  Given an array of integers, calculate the fractions of
//  its elements that are positive, negative, and are zeros.
//  Print the decimal value of each fraction on a new line.

const array = [ -4, 3, -9, 0, 4, 1];
const arrayLenght = array.length;
const status = [0, 0, 0];   //[positive, negative, zero]


var getStatus;

getStatus = (value) =>{
    if(value > 0) return status[0]++;
    if(value < 0) return status[1]++;

    return status[2]++;
}

array.forEach(number => {
    getStatus(number)
});

status.forEach(value =>{
    return console.log((value / arrayLenght).toFixed(6));
});