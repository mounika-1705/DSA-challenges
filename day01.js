// Day - 1 Problems 🎯 

// [Hint : Use built-in Array Methods]

// ✂ 1.Remove Discontinued Products
// Problem:
// You are maintaining a product list for an e-commerce website. A few items (starting from index 2, two items) were discontinued. Remove them.
// let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
// // Expected Output: ['Laptop', 'Mobile', 'Watch']

// ➕ 2. Add New Students in Between
// Problem:
// You are adding two new students to a class list, right after the first two students.
// let students = ['Ali', 'Sara', 'Zoya'];
// // Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

// 🧪 3. Extract Top Performers
// Problem:
// You want to extract the top 3 performing students from a sorted result list.
// let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
// // Expected Output: ['Zainab', 'Ali', 'Farhan']

// 📅 4. Show Last 2 Days’ Sales
// Problem:
// You are analyzing a weekly sales report and want to check sales of the last 2 days.
// let sales = [220, 300, 280, 150, 400, 390, 310];
// // Expected Output: [390, 310]

// 🚿 5. Get All Users Who Are Active
// Problem:
// You have an array of users with their active status. You want to list only active users.
// let users = [
//   {name: 'Ahmed', active: true},
//   {name: 'Mira', active: false},
//   {name: 'John', active: true},
// ];
// // Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

// 📞 6. Block Short Phone Numbers
// Problem:
// You’re validating a phone book. Filter out numbers that are less than 10 digits.
// let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
// // Expected Output: ['1234567890', '9876543210']

// 🧾 7. Convert Price to With Tax
// Problem:
// You want to show prices with 18% GST added.
// let prices = [100, 200, 300];
// // Expected Output: [118, 236, 354]

// 💼 8. Append “.com” to Website Names
// Problem:
// You’re preparing a list of domains from a set of website names.

// let sites = ['google', 'amazon', 'microsoft'];
// // Expected Output: ['google.com', 'amazon.com', 'microsoft.com']

// 📊 9. Calculate Total Cart Price
// Problem:
// You have a cart with multiple product prices. Calculate the total bill.
// let cart = [499, 1299, 299, 799];
// // Expected Output: 2896

// 🎟 10. Count Frequency of Votes
// Problem:
// You’re counting how many votes each candidate got from a list of names.
// let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
// // Expected Output: { A: 3, B: 2, C: 1 }





let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch']
products.splice(2,2);
console.log(products);

let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar');
console.log(students)

let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topscores = scores.slice(0, 3);
console.log(topscores);

let sales = [220, 300, 280, 150, 400, 390, 310];
let last2 = sales.slice(5);
console.log(last2);

let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let activestatus = users.filter(user => user.active);
console.log(activestatus);

let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validating = phoneNumbers.filter(num => num.length === 10);
console.log(validating);

let prices = [100, 200, 300];
let GST = prices.map(p => p * 1.18);
console.log(GST);

let sites = ['google', 'amazon', 'microsoft'];
let listofdomains = sites.map(site => site + '.com');
console.log(listofdomains);

let cart = [499, 1299, 299, 799];
let totalvalue = cart.reduce((sum,price) => sum + price);
console.log(totalvalue);


let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let count = votes.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(count);