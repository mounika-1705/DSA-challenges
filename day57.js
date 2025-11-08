// Day 57: DSA Challenge - "Decode the String" 

// Problem Statement:
// You are given an encoded string where patterns are of the form k[encoded_string], and the encoded_string inside the square brackets is repeated exactly k times.
// Return the decoded string.

// Examples:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// 💡 Hint:
// * Use two stacks - one for numbers and one for characters.
//      Traverse the string:
// * When you see a digit, calculate the multiplier.
// * When you see a ‘[’, push current string and number.
// * When you see a ‘]’, pop from both stacks and combine.




class Decoder {
  decode(str) {
    let numberStack = [];    
    let stringStack = [];     
    let currentStr = "";   
    let currentNum = 0;    

    for (let char of str) {
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