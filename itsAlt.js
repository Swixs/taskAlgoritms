// function isAlt(word) {
//   const letters = ["a", "e", "i", "o", "u"];

//   let arrWord = word.split("").map(String);
//   let temp = [];
//   let temperer = [];
//   let error = 0;

//   for (let i = 0; i < arrWord.length; i++) {
//     if (arrWord[i] !== " ") {
//       if (arrWord[i] === "a") {
//         if (temp[0] !== arrWord[i] && temp[0] !== undefined) {
//           error = 1;
//         }
//         if (temp[0] === arrWord[i] || temp[0] === undefined) {
//           if (temp[0] === letters[0]) {
//           } else if (arrWord[i] === letters[0]) {
//             temp.push(letters[0]);
//             temperer.push(arrWord[0]);
//           }
//         }
//       }
//       if (arrWord[i] === "e") {
//         if (temp[0] === "o" || temp[0] === "i" || temp[0] === "u") {
//           error = 1;
//         }
//         if (
//           temp[1] !== arrWord[i] &&
//           temp[1] !== undefined &&
//           temp[0] === letters[0]
//         ) {
//           error = 1;
//         }
//         if (temp[1] === arrWord[i] || temp[1] === undefined) {
//           if (temp[1] === letters[1]) {
//           } else if (arrWord[i] === letters[1]) {
//             temp.push(letters[1]);
//             temperer.push(arrWord[1]);
//           }
//         }
//       }
//       if (arrWord[i] === "i") {
//         if (temp[1] === "o" || temp[1] === "u") {
//           error = 1;
//         }
//         if (
//           temp[2] !== arrWord[i] &&
//           temp[2] !== undefined &&
//           temp[0] === letters[0]
//         ) {
//           error = 1;
//         }
//         if (temp[2] === arrWord[i] || temp[2] === undefined) {
//           if (temp[2] === letters[2]) {
//           } else if (arrWord[i] === letters[2]) {
//             temp.push(letters[2]);
//             temperer.push(arrWord[2]);
//           }
//         }
//       }
//       if (arrWord[i] === "o") {
//         if (
//           temp[3] !== arrWord[i] &&
//           temp[3] !== undefined &&
//           temp[0] === letters[0]
//         ) {
//           error = 1;
//         }
//         if (temp[3] === arrWord[i] || temp[3] === undefined) {
//           if (temp[3] === letters[3]) {
//           } else if (arrWord[i] === letters[3]) {
//             temp.push(letters[3]);
//             temperer.push(arrWord[3]);
//           }
//         }
//       }
//       if (arrWord[i] === "u") {
//         if (
//           temp[4] !== arrWord[i] &&
//           temp[4] !== undefined &&
//           temp[0] === letters[0]
//         ) {
//           error = 1;
//         }
//         if (temp[4] === arrWord[i] || temp[4] === undefined) {
//           if (temp[4] === letters[4]) {
//           } else if (arrWord[i] === letters[4]) {
//             temp.push(letters[4]);
//             temperer.push(arrWord[4]);
//           }
//         }
//       }
//       debugger
//       if (
//         arrWord[i] !== "a" &&
//         arrWord[i] !== "e" &&
//         arrWord[i] !== "i" &&
//         arrWord[i] !== "o" &&
//         arrWord[i] !== "u"
//       ) {
//         temperer.push(arrWord[i]);

//         for (let j = 0; j <= arrWord.length - 1; j++) {
//           if (arrWord[j] === temperer[j + 1]) {
//             error = 1;
//           }
//         }
//       }
//       if (error === 1) {
//         console.log(false);
//         return false;
//       }
//     }
//   }

//   console.log(temp, temperer, true);
// }
// isAlt("akoa");
