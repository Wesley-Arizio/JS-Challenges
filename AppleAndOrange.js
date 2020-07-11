// Description
// Sam's house has an apple tree and an orange
// tree that yield an abundance of fruit. In
// the diagram below, the red region denotes his house,
// where 'S' is the start point, and 'T' is the endpoint.
// The apple tree is to the left of his house, 
// and the orange tree is to its right. You can
// assume the trees are located on a single point,
// where the apple tree is at point 'A', and the orange tree is at point 'B'.

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.


// input
// 7 11     => s t 
// 5 15     => a b
// 3 2      => m n
// -2 2 1   => apple
// 5 -6     => orange

const s = 7;
const t = 11;
// house reach

const a = 5;
const b = 15;
// tree location (apple, orange)

const m = 3;
const n = 2;
// distance between fruit and tree

// The fruit that falls between s and t 

const apple = [-2, 2, 1];
const orange = [5, -6];

const getDistance = (start, end) => {
    
    const appleResult = calculateDistance(a, apple);
    const orangeResult = calculateDistance(b, orange);

    const appleFilter = appleResult.filter((apple) => (apple >= start && apple <= end));
    const orangeFilter = orangeResult.filter((orange) => (orange >= start && orange <= end));

    return { 
        appleFilter: appleFilter.length,
        orangeFilter: orangeFilter.length
    }
}

const calculateDistance = (tree, fruits) => {
    return fruits.map(fruit => tree + fruit);
}

const result = getDistance(s, t);


console.log("Apple: ", result.appleFilter);
console.log("Orange: ", result.orangeFilter)