// 🔥 DSA Day 6 Challenge is HERE! 🔥
// Today we dive deeper into JS Arrays  insert, delete, traverse & conquer! 💪
// Built-in methods are your weapons use them smartly! 🧠⚔

// 🛒 Q1. Add Product to Cart

// You’re working on an e-commerce site. Insert a new product ID 105 at the end of the cart array.

// let cart = [101, 102, 103, 104];
// // Insert 105 at the end

// ✅ Expected Output:

// [101, 102, 103, 104, 105]

// 🧠 Hint: Use .push().

// 🧼 Q2. Remove Sold Out Item

// Given a cart with product IDs, remove the product 103 from it.

// let cart = [101, 102, 103, 104];
// // Remove 103

// ✅ Expected Output:

// [101, 102, 104]

// 🧠 Hint: Use .filter() or .indexOf() with .splice().

// 📍 Q3. Insert at Specific Position

// Insert "banana" at the 2nd index in this fruits array:

// let fruits = ["apple", "orange", "grapes"];

// ✅ Expected Output:

// ["apple", "orange", "banana", "grapes"]

// 🧠 Hint: Use .splice(index, 0, item).


// 🔁 Q4. Print All Students

// Traverse the students array and print a message like:
// 📢 “Hello, <studentName>!” for each name.

// let students = ["Ali", "Zara", "John"];

// ✅ Expected Output:

// Hello, Ali!
// Hello, Zara!
// Hello, John!

// 🧠 Hint: Use .forEach() or a for loop.


// 📦 Q5. Delete First Item from Queue

// You are simulating a queue. Remove the first item from this list of orders:

// let orders = ["order1", "order2", "order3"];

// ✅ Expected Output:

// ["order2", "order3"]

// 🧠 Hint: Use .shift().


// problem1
let cart =[101, 102, 103, 104]; 
let finalCart=cart.push(105);
console.log(cart);



// problem2
let cart1 = [101, 102, 103, 104];
let remove = cart1.splice(2,1);
console.log(cart1);



// problem3
let fruits =["apple", "orange", "grapes"];
let insert= fruits.splice(2, 0, "banana");
console.log(fruits);







// problem4
let students =["Ali", "Zara", "John"];
let wish =students.forEach(student => {
    console.log( `Hello, ${student}!`);
});


// problem5
let orders =["order1", "order2", "order3"];
let result =orders.shift();
console.log(orders);