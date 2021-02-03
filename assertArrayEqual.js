const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅ Assertion Passed: Arrays are equal.");  
  } else {
      console.log("🛑🛑🛑 Assertion Failed: Arrays are unequal.");
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        if ((arr1[i] !== arr2[i])) {
          return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

console.log(assertArraysEqual([1, 2], [1, 2]))
console.log(assertArraysEqual([1, 2], [1, 3]))