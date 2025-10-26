function NonRepeating(arr) {
    
  const frequency = {};

  for (let num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  for (let num of arr) {
    if (frequency[num] === 1) {
      return num;
    }
  }

  return -1;
}

let arr1 = [9, 4, 9, 6, 7, 4]
console.log(NonRepeating(arr1));  

let arr2 = [1, 2, 3, 2, 1, 3]
console.log(NonRepeating(arr2));  
