const assertArraysEqual = function(arr1, arr2) {
  console.log(arr1, arr2)
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

const letterPositions = function(sentence) {
  
  const results = {};

for (const [arr, letter] of sentence.split("").entries()) {
  if (letter !== " ") { 
    if (results[letter]) {
      results[letter].push(arr);
    } else {
      results[letter] = [arr];
    }
  }
}
return results;

};


//Test

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [3, 4]);
