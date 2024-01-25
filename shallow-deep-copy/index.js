// Pass by Value and by Reference
let x = 2024;
let y = x;
y++;

console.log('🚀 ~ x:', x); // 2024
console.log('🚀 ~ y:', y); // 2025
////////////////////////////////////////

let arrayA = [1, 2, 3];
let arrayB = arrayA;

arrayB.push(4);
console.log('🚀 ~ arrayA:', arrayA); // [1,2,3,4]
console.log('🚀 ~ arrayB:', arrayB); // [1,2,3,4]

////////////////////////////////////////
////////////////////////////////////////
// SHALLOW COPY
////////////////////////////////////////

// With spread operator
const arrayX = [1, 2, 3];
const arrayY = [...arrayX, 4];
console.log('🚀 ~ arrayX:', arrayX); // [1,2,3]
console.log('🚀 ~ arrayY:', arrayY); // [1,2,3,4]

// with Object.assign()
const arrayZ = Object.assign([], arrayY);
console.log('🚀 ~ arrayZ:', arrayZ); // [1,2,3,4]
console.log(arrayZ === arrayY); // false

// BUT WE HAVE PROBLEM WITH NESTED arrays or objects....
arrayY.push([5, 6, 7]);
const arrayV = [...arrayY];
console.log(arrayV); // [1,2,3,4, [5,6,7]]

arrayV[4].push(8);
console.log(arrayV); // [1,2,3,4, [5,6,7,8]

console.log(arrayY); // [1,2,3,4, [5,6,7,8]

// with shallow copy nested data structure still SHARE A REFERENCE!
// this problem occurs with both using object.assign() or spread operator
// the problem occcurs until the original array or object have NESTED structural data type

// NOTE: Array.from() and slice() - also creates a shallow copy too

///////////////////////////////
// With Objects

const personObj = {
  name: 'John',
  age: 20,
  scores: {
    a: 1,
    b: 2,
  },
};

Object.freeze(personObj);
personObj.name = 'Howard';
console.log(personObj); // Cant change!! My name still John

// BUT with nested Object, still CAN change
personObj.scores.a = 30;
console.log(personObj); // {name: 'John', age: 20, scores: {a : 30, b: 2}}

// => Ojbect.freeze is still just a SHALLOW freeze

////////////////////////////////////////
////////////////////////////////////////
// DEEP COPY
////////////////////////////////////////

// One line quick Vanilla JS solution to deep copy an object, but it does not work with Dates
// functions, undefined, Infinity, RegExps, Blobs, Sets, Maps

// Here we turned the object into string and turn it back using json parse
// But json stringify loose the type listed above
// It's a problem if you try to send it throw an API or store it into localStorage.
const newScoreObj = JSON.parse(JSON.stringify(personObj));
console.log(newScoreObj === personObj); //

newScoreObj.name = 'Howard';
console.log(newScoreObj); // {name: 'Howard', age: 20, scores: {a : 30, b: 2}}

console.log(personObj); // {name: 'John', ....}

/// DEEP CLONE FUNCTION instead of using a lib
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  // Create an array or object to hold the values;
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    // recursive call for nested objects & arrrays;
    newObject[key] = deepClone(value);
  }

  return newObject;
}

const scoreArray = [3, 4, 5, 6];
const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray === scoreArray); // false

function pureScore(array, score, cloneFn) {
  const newArray = cloneFn(array);
  newArray.push(score);
  return newArray;
}
