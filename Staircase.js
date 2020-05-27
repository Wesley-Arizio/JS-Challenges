

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
console.log(array.splice(" "));