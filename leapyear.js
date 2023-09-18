function isLeapYear(year){
    const leapYear = year%4

    if(leapYear === 0){
        return true
    }
    else{
        return false
    }
}

let yourYear = 2024;
let leapOrNot = isLeapYear(yourYear);

console.log(leapOrNot)