function oddOrEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

let myValue = 13;
let oddEven = oddOrEven(myValue)
console.log(oddEven)