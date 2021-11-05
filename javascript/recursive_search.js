function recursiveSearch(arr, target) {
  // solve iteratively first

  for (const value of arr) {
    if (value === target ) {
      return true
    }
  }
  return false
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// First, define base case and return statement. Then define
// any additional output and the recursive function call with
// any required changes to parameters.

// And a written explanation of your solution
