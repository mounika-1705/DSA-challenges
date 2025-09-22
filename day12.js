let visits = [10, 20, 30, 40, 50, 60, 70]  
let k = 3

function visitors(visits, k){
 let vistors = 0;
 for(let i = 0; i <= visits.length - k; i++){
    let Sum = 0;
    for(let j = i ;j < i + k; j++){
        Sum += visits[j]   
    }  
    vistors = Math.max(vistors, Sum);
}
return vistors;
}

console.log(visitors(visits,k));