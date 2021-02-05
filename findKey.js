const { isUndefined } = require("util");

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const findKey = (object, callback) => {
    for (let key in object) {
      if(callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
 
  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const starNum = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}


let actual1 = findKey(starNum,  x => x.stars === 2);
let expected1 = "noma"
assertEqual(actual1, expected1);

let actual2 = findKey(starNum,  x => x.stars < 2);
let expected2 = "Ora"
assertEqual(actual2, expected2);