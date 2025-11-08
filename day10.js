// 📢 DSA Day - 9 Challenge is LIVE! 🧠⚡
// Focus: Two Pointers Real-World Edition (Medium)

// Hey Devs!
// You’ve been consistently leveling up, and today’s challenge is one that mirrors how Two Pointers are used in real-life features like those in music or productivity apps.

// Let’s sharpen your logic with a practical use case!

// Problem Statement:
// You're building a calendar integration tool. Two people share their schedules in the form of sorted busy time intervals (start and end times). You need to merge both their busy slots into a single calendar and combine any overlapping or touching intervals.

// 📝 Input Example:

// userA = [[9, 11], [13, 15], [18, 20]]  
// userB = [[10, 12], [14, 16], [17, 18]]

// 📤 Expected Output:

// [[9, 12], [13, 16], [17, 20]]

// 🔧 Explanation:

// [9, 11] and [10, 12] overlap → merged into [9, 12]

// [13, 15] and [14, 16] overlap → merged into [13, 16]

// [18, 20] and [17, 18] touch → merged into [17, 20]

// 🧠 Hint:

// First, merge both arrays into one sorted list

// Then use Two Pointers or one-pass merge logic to combine overlaps

let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];


function merge(userA, userB) {
  let mergeUsers = [...userA, ...userB];
  mergeUsers.sort((a, b) => a[0] - b[0]);


  let calresult = [];
  let [start, end] = mergeUsers[0];   


  for (let i = 1; i< mergeUsers.length; i++) {
    let [currentStart, currentEnd] = mergeUsers[i];

    if (currentStart <= end) {
      end = Math.max(end, currentEnd); 
    } else {
      calresult.push([start, end]);
      start = currentStart;
      end = currentEnd;
    }
  }

  calresult.push([start, end]);
  return calresult;
}

console.log(merge(userA, userB));
q