const assertEqual = function(match) {
  if (match) {
    console.log(`✅✅✅ Assertion Passed: ${match}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${match}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if ((arr1[i] === arr2[i])) {
          return true;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return true;
  }

  return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
