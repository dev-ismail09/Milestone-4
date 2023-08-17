function isLeapYear(year){
    const remainder = year % 2;
    if(remainder == 0){
        // console.log(year, "is LeapYear");
        return true;
    }
    else{
        // console.log(year, "is not a LeapYear");
        return false;
    }
}

const myYear = isLeapYear(2022);
console.log(myYear);
const herYear = isLeapYear(1961);
console.log(herYear);