//  Description:
//  Calculate and print the sum of the elements in an array,
//  keeping in mind that some of those integers may be quite large.

const array = [];
var n;

arraySize = (x) => {
    n = x;
    i = 1;
    while(i <= x){
        array.push(`100000000${n}`);
        n--;
        i++;
    }
    return array.sort();
}

console.log(arraySize(5))
var soma = 0;

array.forEach((value, index) => {
    value = parseInt(value, 10);
    return soma += value; 
});

console.log(soma);









// console.log(arrayLenght(5));

