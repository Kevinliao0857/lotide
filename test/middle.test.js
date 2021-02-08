const assert = require('chai').assert;
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require(`../middle`)


// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// assertArraysEqual(eqArrays([2], [2]))
// assertArraysEqual(eqArrays([3], [3]))

describe("#middle", () => {
  it(`returns [2] for middle of [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns [3] for middle of [1, 2, 3, 4, 5]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it(`returns [] for middle of [2]`, () => {
    assert.deepEqual(middle([2]), [])
  });
});