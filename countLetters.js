const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};

for (const letter of str) {
  if (letter !== " ") { 
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
}
return results;
}


//test

console.log(countLetters("lighthouse in the house"))

const result1 = countLetters("lighthouse in the house")

assertEqual(result1["l"], 3)
assertEqual(result1["i"], 2)
assertEqual(result1["o"], 2)
assertEqual(result1["t"], 1)