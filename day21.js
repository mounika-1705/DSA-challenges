let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
let k = 2;

function maximumStreak(days, k) {
    let left = 0, Count = 0, length = 0;

    for (let right = 0; right < days.length; right++) {
        if (days[right] === 0) Count++;

        while (Count > k) {
            if (days[left] === 0) Count--;
            left++;
        }

        length = Math.max(length, right - left + 1);
    }
    return length;
}
console.log(maximumStreak(days, k));