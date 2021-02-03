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
  console.log(arr1, arr2)
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅ Assertion Passed: Arrays are equal.");  
  } else {
      console.log("🛑🛑🛑 Assertion Failed: Arrays are unequal.");
  }
};

// ACTUAL FUNCTION
const without = function(sorArr, itemsToRemove) {
  
  let removed = [];
  for (let element of sorArr) {
    if (!itemsToRemove.includes(element)) {
      removed.push(element);
    }
  }

  return removed;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

