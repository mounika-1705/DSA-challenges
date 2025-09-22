let visitors = [120, 80, 100, 90, 150, 110, 70];
let k = 3;

function totalVisitors(visitors, k) {
    if (k > visitors.length) return null; 

    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += visitors[i];
    }

    let currentSum = windowSum;
    
    for (let i = k; i < visitors.length; i++) {
        windowSum += visitors[i] - visitors[i - k]; 
        currentSum = Math.min(currentSum, windowSum);
    }
    return currentSum;
}
console.log(totalVisitors(visitors, k));