


let arr = [-1, 0, 1, 2, -1, -4];

function duplicates(numbers) {
  numbers.sort((a, b) => a - b);  //[-4, -1, -1, 1, 2]    
  let result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      let sum = numbers[i] + numbers[left] + numbers[right];

      if (sum === 0) {
        result.push([numbers[i], numbers[left], numbers[right]]);
        

        while (left < right && numbers[left] === numbers[left + 1]) left++;
        while (left < right && numbers[right] === numbers[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;  
      } else {
        right--; 
      }
    }
  }

  return result;
}
console.log(duplicates(arr));
