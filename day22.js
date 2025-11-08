//  🚀Day 22 DSA Challenge 

// 🇮🇳 Problem: Find the Indian Flag in the Parade

// Scenario:
// During an Independence Day parade, different colored flags are being waved one after another.
// You are given an array colors[], where each element is a string representing the color of a flag in order.

// Your task is to find the shortest continuous segment in colors that contains at least one "orange", one "white", and one "green" the three colors of the Indian flag.

// If no such segment exists, return -1.


// Example 1:

// Input: colors = ["blue", "orange", "white", "blue", "green", "orange"]  
// Output: 3  

// Explanation: The shortest segment is ["orange", "white", "green"] → length 3.


   function Flag(colors){
    let minLength=Infinity;
    let left=0;
    let orangeCount=0;
    let whiteCount=0;
    let greenCount=0;
    for(let right=0;right<colors.length;right++){
        if(colors[right]=="orange"){
            orangeCount++;
        }
        if(colors[right]=="white"){
            whiteCount++;
         }
        if(colors[right]=="green"){
            greenCount++;
        }
while(orangeCount>=1 && whiteCount>=1 && greenCount>=1){
    minLength=Math.min(minLength,right-left+1);
    if(colors[left]=="orange"){
        orangeCount--;
    }
    if(colors[left]=="white"){
        whiteCount--;
    }




    if(colors[left]=="green"){
        greenCount--;
    }
    left++;
}
    }

if(minLength==Infinity){
    return-1;
}else{
    return minLength;
}
}

console.log(Flag(["blue", "orange", "white", "green","blue", "orange"]))