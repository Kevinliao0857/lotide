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



function flatten(arr) {
  let flatArray = [];
  
  arr.forEach(element => {
    if(Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element))
    } else {
      flatArray.push(element);
  }
});

  return flatArray;
}

const data = [1, 2, [3, 4], 5, [6]]; 

const newArray = flatten(data);
console.log(newArray)

