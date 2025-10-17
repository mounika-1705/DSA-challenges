class Decoder {
  decode(s) {
    let numberStack = [];    
    let stringStack = [];     
    let currentStr = "";   
    let currentNum = 0;    

    for (let char of s) {
      if (!isNaN(char)) {
        currentNum = currentNum * 10 + Number(char); 
      } 
      else if (char === "[") {
        numberStack.push(currentNum);
        stringStack.push(currentStr);
        currentNum = 0;
        currentStr = "";
      } 
      else if (char === "]") {
        let repeatTimes = numberStack.pop();
        let prevString = stringStack.pop();
        currentStr = prevString + currentStr.repeat(repeatTimes);
      } 
      else {
        currentStr += char;
      }
    }
    return currentStr;
  }
}

const decode= new Decoder();
console.log(decode.decode("3[a]2[bc]"));    
console.log(decode.decode("3[a2[c]]"));      
console.log(decode.decode("2[abc]3[cd]ef"));