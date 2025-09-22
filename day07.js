
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