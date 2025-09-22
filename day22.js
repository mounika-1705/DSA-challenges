   
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