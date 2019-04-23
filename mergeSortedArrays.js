/*
Write a function called mergeSortedArrays
which accepts an two sorted arrays and
returns a merged arrays.
*/
/*
Constraints :::::

No Repetition occurs 
Arrays are sorted
	
*/
//Getting your hands dirty way
function mergeSortedArrays(array1,array2){
	let mergedArray=[];
	let array1Pointer=0;
	let array2Pointer=0;
	while(array1[array1Pointer] || array2[array2Pointer])
	{
		let array1Item=array1[array1Pointer];
		let array2Item=array2[array2Pointer];
		console.log(`Array 1 ${array1Item} array 2 ${array2Item}`)
		if(!array1Item)
			array1Item=0;
		else if(!array2Item)
			array2Item=0;
		if(!array1Item&&!array2Item)
			break;
		else if(array1Item<array2Item)
		{
			mergedArray.push(array1Item);
			array1Item=array1[array1Pointer];
			array1Pointer++;
		}else if(array2Item<array1Item)
		{
			mergedArray.push(array2Item);
			array2Item=array2[array2Pointer];
			array2Pointer++;
		}
	}
	console.log(mergedArray);
}





//Modern way O(a+b)
// function mergeSortedArrays(array1,array2)
// {
// 	return [...array1,...array2].sort((a,b)=>a-b);
// }
mergeSortedArrays([1,3,4,31],[2,5,6,10,25,33])