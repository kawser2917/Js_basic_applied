function sumOfArray(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length; i++){
        let index = i;
        let number = numbers[index]
        sum = sum+number
        // console.log(index, number, sum)
    }
    return sum;
}

let element = [12,65,45,78,32,91];
let getSumOfArray = sumOfArray(element);
console.log(getSumOfArray)
 