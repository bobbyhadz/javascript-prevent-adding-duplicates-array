// EXAMPLE 1 - Prevent adding Duplicates to an Array

const arr = ['bobby', 'hadz', 'com'];

const str = 'bobby';

if (!arr.includes(str)) {
  // ✅ only runs if value not in array
  arr.push(str);
}

console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Prevent adding duplicates from a collection to an array

// const arr = ['bobby', 'hadz', 'com'];

// const values = ['bobby', 'com', 'a', 'b', 'c'];

// values.forEach(value => {
//   if (!arr.includes(value)) {
//     arr.push(value);
//   }
// });

// // 👇️ [ 'bobby', 'hadz', 'com', 'a', 'b', 'c' ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Prevent adding Duplicates to an Array using indexOf

// const arr = ['bobby', 'hadz', 'com'];

// const str = 'bobby';

// if (arr.indexOf(str) === -1) {
//   arr.push(str);
// }

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Prevent adding duplicates by using a `Set` object

// const str = 'bobby';

// const set1 = new Set(['bobby', 'hadz', 'com']);

// set1.add(str);

// // 👇️ Set(3) { 'bobby', 'hadz', 'com' }
// console.log(set1);
