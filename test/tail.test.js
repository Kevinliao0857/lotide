const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail');


// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  const words = ["Hello", "Lighthouse", "Labs"]
  it(`returns 2 for words.length`, () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it(`returns with ["Lighthouse", "Labs"] for tail(words)`, () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});