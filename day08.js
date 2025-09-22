//problem 1: Count Pairs with Given Sum
/*function twoPointers(arr,target){
    let left = 0;
    let right = arr.length-1;
    let count = 0;    //stores valid pairs
    while(left<right){
        const sum=arr[left]+arr[right];
        if(sum === target){
            count++;
            left++;
            right--;
        }else {
            left++;
            right--;
        }
    }
    return count;
}
console.log(twoPointers([1,2,3,4,5,6,7], 8));  */  // (1,7), (2,6), (3,5)



//problem 2: Move Zeroes to End

function onePointer(arr){
    let left = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !==0){
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }
    return arr;
}
console.log(onePointer([0,1,0,3,12])); 