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