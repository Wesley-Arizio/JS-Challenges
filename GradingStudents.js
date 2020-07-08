// Description
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.


const grades =  [ 73, 67, 38, 33 ] ;

let multipleOfFive = [];
const verify = (grades) => {
    grades.map( grade => {
        while((grade % 5) > 0){
            grade++
        }
        multipleOfFive.push(grade);
    });
};

verify(grades);
const response = []

const compare = (grades, multipleOfFive) => {
     grades.forEach( (grade, index) => {
        if((multipleOfFive[index] - grade) < 3 && grade >= 38){
            return response.push(multipleOfFive[index]);
        }else{
            return response.push(grade);
        }
    });
}
compare(grades, multipleOfFive);

console.log(response)
    // verificar se a diferença entre a grade e o próximo multiplo de 5 é menor que três
