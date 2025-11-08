// 📢 DSA Day - 7 Challenge is LIVE! 🔥
// Hey Students!
// Time to level up your DSA game 🚀

// Today’s challenge is all about real-world problem-solving using Insertion, Deletion, and the classic Two Pointers technique.

// 🧠 Get ready to think like a developer and solve problems that feel close to real-life use cases!

// 🔹 1. Insert New Delivery Order
// 📦 Problem:
// You are managing a food delivery dashboard. Orders are stored in an array sorted by delivery time. A new order comes in, and you need to insert it in the correct position to keep the array sorted by delivery time.

// 📝 Input: An array of objects like
// [
//   { orderId: 1, deliveryTime: "12:00" },
//   { orderId: 2, deliveryTime: "12:30" }
// ]
// and a new order:

// { orderId: 3, deliveryTime: "12:15" }

// 🧩 Task: Insert the new order at the correct position.

// 🔹 2. Remove Inactive Users 
// 👥 Problem:
// You are building a social media cleanup tool. Given an array of user accounts with an isActive boolean flag, remove all users who are inactive.

// 📝 Input:

// [
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: false },
//   { username: "john", isActive: true }
// ]

// 🧩 Task: Return a new array without the inactive users.

// 🔹 3. Movie Pair Watch Time 
// 🎬 Problem:
// You and your friend have exactly targetTime minutes to watch two movies. You're given an array of movie durations. Find if there are two different movies you can watch back-to-back within the exact targetTime.

// 📝 Input:

// movieDurations = [90, 85, 75, 60, 120, 150, 125]  
// targetTime = 250

// 🧩 Task: Return the pair of movie durations that exactly sum up to targetTime. Use two pointers approach efficiently.


// problem 1: Insert the new order at the correct position.
let item = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
]
let insert = { orderId: 3, deliveryTime: "12:15" }
item.splice(1,0,insert);
console.log(item);

// problem 2: Remove Inactive Users.
let users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
]
let activeUsers = users.filter((user) => {
    return user.isActive === true;
});
console.log(activeUsers);


// problem 3: Movie Pair Watch Time 

function MoviePair(time, target) {
  time.sort((a, b) => a - b);  //[60, 75, 85, 90, 120, 125, 150]
  let left = 0;
  let right = time.length - 1;
  while (left < right) {
    let sum = time[left] + time[right];
    if (sum === target) {
      return [time[left], time[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false; 
}
console.log(MoviePair([90, 85, 75, 60, 120, 150, 125], 250));