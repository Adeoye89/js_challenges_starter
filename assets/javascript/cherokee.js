(function(){

    let startingPopulation = 100;
    let birthRate = 0.1;
    let numberOfWeeks = 10;

    
// Exponential Function
// Constant Growth Rate Model
// f(t) = ab**t
// f(t) = population after t years
// a = initial value
// b = base or growth factor
// t = time in years

    let result = startingPopulation * (1+birthRate) ** numberOfWeeks

    console.log("There will be "+result+" Cherokee Hares after "+numberOfWeeks+" weeks")

})();
