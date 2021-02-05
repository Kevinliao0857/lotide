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

const takeUntil = function(array, callback) {

  let result = [];
  for(let element of array) {
    if (callback(element)) {
      break;
  } else {
     result.push(element);
  }
}
return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual (results1, [ 1, 2, 5, 7, 2, -1])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual (results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
