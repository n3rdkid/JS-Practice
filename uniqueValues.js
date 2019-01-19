/*
 Return the unique numbers from a sorted array

 Using Multi-pointer concept
*/
function unique(array) {

    /* ---------One Way of Doing it----------------- */


    //Do not assign temp arrray as it is pass by reference
    // let tempArray = [...array];
    // let i = 0;
    // for (let j = 1; j < tempArray.length; j++) {
    //     if (tempArray[i] === tempArray[j])
    //         continue;
    //     else {
    //         i++;
    //         tempArray[i] = tempArray[j];
    //     }
    // }
    // return tempArray.slice(0, i + 1);

    /* ---------Another Way of Doing it----------------- */


    let temp = [array[0]];
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (temp[i] === array[j]) {
            continue;
        } else {
            i++;
            temp.push(array[j]);
        }
    }
    return temp;
}

console.log(unique([-1, -1, 0, 1, 1, 2]));
console.log(unique([-4, -3, -3, -2, 0, 1, 1, 2]));
console.log(unique([-4, -3, -3, -2, -1, -1, 0, 1, 2, 2, 3, 4, 5, 5, 6]));