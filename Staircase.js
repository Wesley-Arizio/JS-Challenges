//print
//      #
//     ##
//    ###
//   ####
//  #####
// ######




//with array
const array = [];
const arrayLenght = array.length;

function creatArray(x){
    for(var i = 0; i < x; i++){
        array[i] = [  ];
        for(var j=0; j<i; j++){
            array[i][j] =  "#" ;
        }
    }
    array.shift();
}
creatArray(6);
console.log(array);


//without array

// the variable i inside "for" is initializing with the value 1
// because in the first repeat function it is (x - 0) it will print
// all the empty spaces and the second repeat function is (i) it is 0,
// therefore, the value # will not be printed

function createStair(x){
    for(var i = 1; i <= x; i++){
       console.log(' '.repeat(x - i) + '#'.repeat(i));
    }    
}
createStair(6);