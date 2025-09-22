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