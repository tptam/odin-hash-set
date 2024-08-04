import { HashSet } from "./hash-set.js";

const test = new HashSet();

test.add("apple");
test.add("banana");
test.add("carrot");
test.add("dog");
test.add("elephant");
test.add("frog");
test.add("grape");
test.add("hat");
test.add("ice cream");
test.add("jacket");
test.add("kite");
test.add("lion");

console.log(test.toString()); // buckets[0..15] are shown

test.add("moon");
console.log(test.toString()); // buckets[0..31] are shown

test.add("moon");
console.log(test.toString()); // duplicated keys are not added

console.log(test.has("frog")); // true;
console.log(test.has("shark")); // false;

console.log(test.remove("frog")); // true;
console.log(test.remove("shark")); // false;

console.log(test.has("frog")); // false;
console.log(test.has("shark")); // false;

console.log(test.length()); // 12

test.clear();
console.log(test.length()); // 0

test.add("Mars");
test.add("Earth");
test.add("Jupiter");

console.log(test.keys()); // [ 'Earth', 'Mars', 'Jupiter' ]
