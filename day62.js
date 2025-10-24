function Reverse(str) {

  const stack = [];
  const Queue = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    Queue.push(str[i]);
  }

  while (Queue.length > 0) {
    let removedStr = Queue.shift();
    stack.push(removedStr);
  }

  while (stack.length > 0) {
    let removedStr = stack.pop();
    result += removedStr;
  }

  return result;
}

console.log(Reverse("Hello")); 

