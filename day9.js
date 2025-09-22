
// problem 1: Remove Duplicate Emails 


/*let mails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
function duplicates(arr){
    let sum = 0;
    for(i=1;i<arr.length; i++) {
        if(arr[i] != arr[sum]) {
            sum++;
            arr[sum] = arr[i];
        }
    }
     return arr.slice(0,sum+1);
}
console.log(duplicates(mails));*/




// problem 2: Playlist Duration Matcher (Music App Feature)
let songs = [3, 5, 8, 2, 7, 4];
target = 10;
function match(arr, target) {
    arr.sort((a, b) => a - b);  //[2, 3, 4, 5, 7, 8]
    left = 0;    
    right = arr.length-1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left],arr[right]]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return arr; 
}
console.log(match([3, 5, 8, 2, 7, 4], 10)); 