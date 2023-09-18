function factorial(number){
    let result = 1;
    for(let i=1;i<=number;i++){
        result= result*i;
    }
    return result;
}

let myNumber = 7;
let factorialNumber = factorial(myNumber);
console.log(factorialNumber)