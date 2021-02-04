const eqObjects = function(object1, object2) {
  console.log(object1, object2)
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      } else if (object1[key] !== object2[key]) {
        return false
      }
     }
    } else {
    return false;
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`); 
   } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`); 
}
}



// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2)); // => false

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 2});
assertObjectsEqual({a: 1, b: 2}, {b: 1, a: 2, c: 3});