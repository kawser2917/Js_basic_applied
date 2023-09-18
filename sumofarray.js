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

function getOddNumbers(numbers){
    const oddArray = [];
    for(let i=0;i<numbers.length;i++){
        let index = i;
        let element = numbers[i];
        if (element %2 !==0){
            oddArray.push(element)
        }
    }
    return oddArray;
}

let element = [12,65,45,78,32,91];
let oddnumbers = getOddNumbers(element)
console.log(oddnumbers)
let getSumOfArray = sumOfArray(oddnumbers);
console.log(getSumOfArray)
 