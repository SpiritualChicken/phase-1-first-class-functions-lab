// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2) 
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2) 
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]



function createFareMultiplier(x) {
    return function (fare) {
        return fare * x;
    }
}


const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler= function(fare) {
    return fare * 3;
}



function selectDifferentDrivers(driver, f) {
    if (f == returnFirstTwoDrivers) {
         return returnFirstTwoDrivers(driver);
    } else if (f == returnLastTwoDrivers) {
            return returnLastTwoDrivers(driver) 
    }
}