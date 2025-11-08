// 📢 DSA Day - 8 Challenge: Two Pointers Special! ⚡

// Hey Devs!
// Today we focus on the famous Two Pointers technique simple but powerful.

// These two problems are easy to medium level and great for building your problem-solving foundation.

// ✅ Q1. Count Pairs with Given Sum

// 🧮 Problem:
// You're given a sorted array of integers and a target sum.
// Find how many unique pairs exist such that the sum of the pair equals the target.

// 📝 Input:

// arr = [1, 2, 3, 4, 5, 6, 7]  
// target = 8

// 📤 Output:

// 3

// ➡ Explanation: Valid pairs = (1,7), (2,6), (3,5)

// 🔧 Note: Use two pointers from both ends and count how many such pairs exist.

// ✅ Q2. Move Zeroes to End

// 📦 Problem:
// You're given an array. Move all 0s to the end while maintaining the order of non-zero elements.
// Do it in-place, using two pointers.

// 📝 Input:

// arr = [0, 1, 0, 3, 12]

// 📤 Output:

// [1, 3, 12, 0, 0]

// 💡 Hint: Use one pointer to track the current index of non-zero values, another to loop through the array.





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