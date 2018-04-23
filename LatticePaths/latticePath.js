let assert = require('assert');

//Starting in the top left corner of a 2×2 grid, and 
//only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid? In an n x n grid?

let factorialize = num => {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  

let latticePaths = (x, y) => {
    let top = factorialize(x*2);
    let bottom = (factorialize(x) * factorialize(x))
    let total = top / bottom;
    console.log(total);
    return total
}

latticePaths(20, 20); 
latticePaths(40, 40);

// assert(latticePaths(1, 1) === 2, 'There should be 2 paths');
// assert(latticePaths(2, 2) === 6, 'There should be 6 paths');

