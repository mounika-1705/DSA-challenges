function Numbers(n) {
    if(n<=0) 
        return;
    Numbers(n-1);
    console.log(n);
}
let N=5;
Numbers(N)