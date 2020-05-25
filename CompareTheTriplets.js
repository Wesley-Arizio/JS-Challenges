// Description: 
// the challenge is to compare two arrays,
// each representing the points of the two people,
// the return must be a 1x2 array. The first column
// must be alice's points and the second column
// must be the point of the coil


const a = [17, 28, 30];
const b = [99, 16, 8];

var points = [0, 0]

a.forEach((value, index) =>{
    if(value > b[index]){
        return points[0]++;
    }else if(value < b[index]){
        return points[1]++;
    }
});

console.log(points)