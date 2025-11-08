// 📢 DSA Day - 9 Challenge: Real-World Two Pointers (EZ-Medium) 💻🚀
// Hey Devs!
// It’s Day 9 and you all are doing great. Today we continue exploring the magic of Two Pointers 

// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
// 📧 Problem:
// You're building an email cleanup feature. Given a sorted list of email IDs, remove all duplicates in-place and return the list of unique emails.

// 📝 Input:
// emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
// 📤 Output:
// ["ali@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

// ✅ Q2. Playlist Duration Matcher (Music App Feature)
// 🎵 Problem:
// You’re building a music app. Users want to create a 2-song playlist that exactly matches their commute time.

// You're given an array of song durations (in minutes), and a targetDuration.
// Find one pair of songs (different songs) that exactly add up to the target.

// 📝 Input:

// songs = [3, 5, 8, 2, 7, 4]  
// targetDuration = 10

// 📤 Output:

// [2, 8] // or [3, 7], any valid pair

// 🧠 Hint:

// Sort the array

// Use two pointers — one from the start, one from the end


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