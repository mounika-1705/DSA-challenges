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