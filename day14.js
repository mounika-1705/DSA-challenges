let visitorsData = [120, 80, 100, 90, 150, 110, 70];
let k = 3;

function visitors(visits, k) {
    let minSum = Infinity;

    for (let i = 0; i <= visits.length - k; i++) {
        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += visits[j];
        }

        if (sum < minSum) {
            minSum = sum;
        }
    }
    return minSum;
}
console.log(visitors(visitorsData, k)); 