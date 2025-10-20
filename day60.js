function Negative(arr, K) {
  const n = arr.length;
  const queue = [];
  const result = [];

  for (let i = 0; i < K; i++) {
    if (arr[i] < 0) {
      queue.push(i);
    }
  }
  
  for (let i = K; i <= n; i++) {
    if (queue.length > 0) {
      result.push(arr[queue[0]]);
    } else {
      result.push(0);
    }

    while (queue.length > 0 && queue[0] <= i - K) {
      queue.shift();
    }

    if (i < n && arr[i] < 0) {
      queue.push(i);
    }
  }

  return result;
}

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const K = 3;
console.log(Negative(arr, K).join(" "));

