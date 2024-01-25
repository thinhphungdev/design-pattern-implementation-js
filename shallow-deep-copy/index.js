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
