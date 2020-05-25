
const arrayReduce = [1, 2, 3, 4, 5];
function sum(result, num){
    return result + num;
}
console.log(`Esse é um jeito de resolver o desafio do array sum usando a função reduce ${arrayReduce.reduce(sum)}`);

//or

const arraySum = [1, 2, 3, 4, 5];
var sum = 0;
arraySum.forEach(number =>{
   return sum += number;
});

console.log(`Esse é um jeito de resolver o desafio do array sum usando um simples forEach ${sum}`);



