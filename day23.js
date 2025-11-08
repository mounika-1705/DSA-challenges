// Day 23 DSA challenge 

// 💼 Problem: Minimum Window of Required Ingredients

// Scenario:
// You’re working on an inventory management system for a restaurant. The chef gives you a list of required ingredients for a dish, and you have a list of ingredients available over several deliveries in sequence.

// You need to figure out the shortest continuous sequence of deliveries that contains all the required ingredients at least once.

// Input:

// deliveries[]: an array of strings, each representing an ingredient delivered that day in order.

// required[]: a set/list of ingredients needed for the dish.

// Output:
// Length of the smallest window in deliveries that contains all required ingredients. If not possible, return -1.

// Example:

// Input:  
// deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]  
// required = ["tomato", "cheese", "onion"]  

// Output: 3  

// 🗝
// If(stuck){
//     UseProblemSolvingGPT
// }



let deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"];
let required = ["tomato", "cheese", "onion"];
console.log(minimum(deliveries,required));

function minimum(deliveries, required) {
    let requiredSet = new Set(required); 
    let formed = 0;                      
    let counts = {};                     
    let left = 0;                        
    let minLength = Infinity;               

    for (let i = 0; i < deliveries.length; i++) {
        let ingredient = deliveries[i];
        if (requiredSet.has(ingredient)) {
            counts[ingredient] = (counts[ingredient] || 0) + 1;
            if (counts[ingredient] === 1) formed += 1;
        }
        while (formed === requiredSet.size) {
            minLength = Math.min(minLength, i - left + 1);
            let leftItem = deliveries[left];
            if (requiredSet.has(leftItem)) {
                counts[leftItem] -= 1;
                if (counts[leftItem] === 0) formed -= 1; 
            }
            left++;
        }
    }
    return minLength === Infinity ? -1 : minLength;
}


