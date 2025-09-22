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


