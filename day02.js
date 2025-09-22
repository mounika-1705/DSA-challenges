let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];
let invoicegenerator = items.map(list => ({name: list.name,
  totalprice: list.qty * list.price
}));
console.log(invoicegenerator);


let users= ['Ali','Sara','Zoya','Ali','Zara','Sara'];
let duplicate=users.filter((user,index)=>{
  return (users.indexOf(user)!== users.lastIndexOf(user) &&users.indexOf(user)===index);
});
console.log(duplicate);


let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let frequencyMap = orders.reduce((total, item) => {
  total[item.product] = (total[item.product] || 0) + item.qty;
  return total;
}, {});

let highestSold = '';
let maxQty = 0;

for (let [product, qty] of Object.entries(frequencyMap)) {
  if (qty > maxQty) {
    highestSold =product;
    maxQty = qty;
  }
}
console.log(maxQty);
console.log(highestSold);  