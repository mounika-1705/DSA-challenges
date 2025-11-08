// 📢 DSA Day - 12 Challenge: Sliding Window Begins! 🪟✨
// Hey Warriors!
// Today marks your intro to one of the most powerful techniques in array/string problems Sliding Window.
// But hold up before we rush into optimization, today’s task is to solve a classic problem using a brute-force approach only.

// 👨🏻‍💻 Why?
// Because only when you feel the pain of inefficiency… will you crave optimization. 💀😅


// ✅ Challenge: Maximum Sum of K Consecutive Elements (Brute-Force Only)
// 📊 Problem Statement:
// You are analyzing website traffic logs. The array visits contains the number of users who visited the site on each day. You are asked to find the maximum number of visitors in any k consecutive days.

// 📥 Input:

// visits = [10, 20, 30, 40, 50, 60, 70]  
// k = 3

// 📤 Expected Output:
// 180

// 📌 Explanation:
// The max sum of any 3 consecutive days is: 50 + 60 + 70 = 180

// 🔧 Instructions:
// ▫ Solve it using the brute-force approach only
// ▫ Use a nested loop to calculate sum for every window of size k
// ▫ No early optimizations or sliding window logic allowed for today

let visits = [10, 20, 30, 40, 50, 60, 70]  
let k = 3

function visitors(visits, k){
 let vistors = 0;
 for(let i = 0; i <= visits.length - k; i++){
    let Sum = 0;
    for(let j = i ;j < i + k; j++){
        Sum += visits[j]   
    }  
    vistors = Math.max(vistors, Sum);
}
return vistors;
}

console.log(visitors(visits,k));