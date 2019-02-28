/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

//Sliding Window Pattern
function maxSubarraySum(array,n)
{
let maxSum=0;
let tempSum=0;
if(array.length<n)
return null;
//Calculate the initial sum of the frame of size n
for(let i=0;i<n;i++)
{
	tempSum+=array[i];
}
//If you do not assign this the intial sum will not be considered
maxSum=tempSum;
/*Now start at n position and keep on adding the elements until the
 last on is reached while subtracting the one at the beginning of previos frame */
 for(let i=n;i<array.length;i++)
{
	tempSum=tempSum-array[i-n]+array[i];
	maxSum=Math.max(maxSum,tempSum);
}
console.log(`Array : [${array}]  Frame Size : ${n} Max Sum : ${maxSum}`);
return maxSum;
}

maxSubarraySum([1,2,5,2,8,1,5],2) //10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],6)//6
maxSubarraySum([4,2,1,6,2],4)//13
