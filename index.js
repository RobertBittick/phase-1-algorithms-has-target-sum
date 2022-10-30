function hasTargetSum(array, target) {

  return array.some(function (currentValue, index, arrayRef) {
     const operationArray = [...arrayRef];
     operationArray.splice(index, 1);
     return operationArray.includes(target - currentValue);
  });

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum(array-of-numbers, target number) {
    *add element 0 of ARRAY-OF-NUMBERS to the next element in the array*

    const COMPARED-SUM = ARRAY-OF-NUMBERS[firstElement] + ARRAY-OF-NUMBERS[nextElement]
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j< array.length; j++) {
        if (TARGET NUMBER === COMPARED-SUM  ) {
        return true
      }
    }
    
    }
  }

*/

// function hasTargetSum(array, target) {
//   const newSum = []
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (target === array[i] + array[j]) newSum.push([array[i],array[j]])
//         return true
//     }
//   }
// }

/*
Add written explanation of your solution here

  the function takes an array of numbers and a target number.
    the function searches the array for two numbers that add together to the target number
      it will take one number and add it to each number in the array until it finds a match === to the target number
        it will then return true or false
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
