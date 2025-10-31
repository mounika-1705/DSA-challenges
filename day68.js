function sumOfNumbers(n) {

    if(n==0)
        return 0;
    
    let digit = n % 10;
    return digit + sumOfNumbers(Math.floor(n/10))
}

let N = 1234;
console.log(sumOfNumbers(N));