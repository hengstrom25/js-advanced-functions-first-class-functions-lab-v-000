// Code your solution in this file!

const returnFirstTwoDrivers = (function (drivers) {
  return [drivers[0], drivers[1]];
}) 
  
const returnLastTwoDrivers = (function (drivers) {
  return drivers.slice(-2);
})

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


