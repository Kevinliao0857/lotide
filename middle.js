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

const assertArraysEqual = function(arr1, arr2) {
  console.log(arr1, arr2);
  if (eqArrays(arr1, arr2) === true) {
  
    console.log("✅✅✅ Assertion Passed: Arrays are equal.");  
  } else {
      console.log("🛑🛑🛑 Assertion Failed: Arrays are unequal.");
  }
};

const middle = function(array) {
  const midArr = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[midArr - 1], array[midArr]];

  } else {
    return [array[midArr]];
  }

};

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
