let days = [1,0,1,1,0,0,1,1,1,0];  //1 is productive day  
let k = 2;                         //0 is unproductive day

function streak(days,k) {
    let maxStreak = 0;
    for (let i = 0; i< days.length; i++){
        let sum = 0;
        for (let j = i; j<days.length; j++) {
            if (days[j] === 0) sum++;
            if(sum > k) break;
            maxStreak = Math.max(maxStreak, j - i +1);
        }
    }
    return maxStreak;
}
console.log(streak(days, k));