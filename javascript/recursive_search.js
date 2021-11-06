function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false
  }

  if (arr[0] === target) {
    return true
  }

  return recursiveSearch(arr.slice(1), target);

  // for (const value of arr) {
  //   if (value === target ) {
  //     return true
  //   }
  // }
  // return false
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([3 ,4, 5,6,7], 7));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// First, define base case and return statement. Then define
// any additional output and the recursive function call with
// any required changes to parameters.

// I learned that you can use methods (including slice/splice, etc.) in the recursive 
// function arguements and multiple base cases may be useful. 
