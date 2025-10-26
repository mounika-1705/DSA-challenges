function Equality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "No";
  }

  const frequency1 = {};
  const frequency2 = {};

  for (let num of arr1) {
    frequency1[num] = (frequency1[num] || 0) + 1;  //count in arr1
  }

  for (let num of arr2) {
    frequency2[num] = (frequency2[num] || 0) + 1;   //count in arr2
  }

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {  //comparing arr1,2
      return "No";
    }
  }

  return "Yes";
}

let A = [1, 2, 5, 4, 0];
let B = [2, 4, 5, 0, 1];
console.log(Equality(A, B));  

A = [1, 2, 5];
B = [2, 4, 15];
console.log(Equality(A, B));  