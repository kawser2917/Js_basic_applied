function milesToKilometer(miles){
    const kilometer = miles*1.6; //Formula of converting miles to kilometer
    return kilometer;
}

let yourMiles = 20;
let yourKilometer = milesToKilometer(yourMiles)// Parameter Passing
console.log(yourKilometer)