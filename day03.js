let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];

let set = [];
let result = [];
for (let item of inventory) {
  let name = item.name.toLowerCase();
  if (!set.includes(name)) {
    set.push(name);
    result.push(item);
  }
}
console.log(result);





let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];

let total = {};
for (let item of transactions) {
  let type = item.category;
  let amt = item.amount;
  if (total[type]) {
    total[type] += amt;
  } else {
    total[type] = amt;
  }
}
console.log(total);