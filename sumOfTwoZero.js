/*
 Return the first set that results in a sum of zero from a sorted array

 Time Complexity : O(N^2) For Nested loop Method

 For this Multi-pointer concept O(N)
*/

function sumOfTwoZero(array) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
        let sum = array[leftPointer] + array[rightPointer];
        if (sum === 0)
            return [array[leftPointer], array[rightPointer]];
        else if (sum < 0)
            leftPointer++;
        else
            rightPointer--;
    }
    console.log("No such set exists!")
}

console.log(sumOfTwoZero([-3, -1, 0, 4, 5]));