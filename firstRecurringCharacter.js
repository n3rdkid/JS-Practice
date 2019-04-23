/*
Return the first recurring character

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

*/
//O(n^2)
// function firstRecurringCharacter(input) {
//     for (let i = 0; i < input.length; i++) {
//       for (let j = i + 1; j < input.length; j++) {
//         if(input[i] === input[j]) {
//           return input[i];
//         }
//       }
//     }
//     return undefined;
//   }


// O(n) simple
// function firstRecurringCharacter2(input) {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//       if (map[input[i]] !== undefined) {
//         return input[i];
//       } else {
//         map[input[i]] = i;
//       }
//     }
//     return undefined;
//   }
  






// O(n) using set;

function firstRecurringCharacter(input) {
    const temp= new Set();
    for(let i=0;i<input.length;i++)
        {
            if(temp.has(input[i]))
            return input[i];
            else 
            temp.add(input[i]);           
        }
    return undefined;
}
console.log( `Test Case 1 : ANS : 5   First recurring character is ${firstRecurringCharacter([2,5,5,2,3,5,1,2,4])}`)
console.log( `Test Case 2 : ANS : 2   First recurring character is ${firstRecurringCharacter([2,5,1,2,3,5,1,2,4])}`)
console.log( `Test Case 3 : ANS : 1   First recurring character is ${firstRecurringCharacter([2,1,1,2,3,5,1,2,4])}`)
console.log( `Test Case 4 : ANS : undefined   First recurring character is ${firstRecurringCharacter([2,3,4,5])}`)


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2