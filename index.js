function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n) - Linear time complexity, where n is the number of elements in the input array.
*/

/* 
  Add your pseudocode here
  1. Create an empty Set called 'seenNumbers'.
  2. Iterate through each number in the input 'array'.
  3. For each number, calculate its complement (target - num).
  4. Check if the 'seenNumbers' Set contains the complement.
  5. If the complement is found, return true.
  6. Otherwise, add the current number to the 'seenNumbers' Set.
  7. If the loop completes without finding a pair, return false.

*/

/*
  Add a written explanation of your solution here
  The function 'hasTargetSum' uses a Set to keep track of numbers seen in the input array. It iterates through the array and, for each number, calculates the complement required to reach the target. It checks if this complement is present in the 'seenNumbers' Set. If it finds a pair of numbers whose sum equals the target, it returns true. If no such pair is found after processing the entire array, it returns false. This approach has a time complexity of O(n), making it efficient for large arrays.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

