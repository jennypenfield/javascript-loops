// Leap years are defined as being a year that is divisible by 4, except for years which are divisible by 100 and not divisible 400.
//
// For example:
//
// * 2004 is divisible by 4, and is not divisible by 100, so it's a leap year.
// * 2000 is divisible by 4, 100 and 400, so it's a leap year.
// * 1700 is divisible by 4 and 100, but not 400, so it's not a leap year.
//
// You will output all of the leap years from the year 0 to 2020 by doing the following steps:
//
// 1. Write out pseudocode that describes the process you would need to go through to complete this requirement.
// 2. Translate the pseudocode into real JavaScript that accomplishes the requirement.

//  log a leapyear if the following conditions are met:
//  if divisible by 4
//  if it's not a century
//  if it's a century that is divisible by 400

for (var i = 0; i <= 2020; i++) {
  if (i % 4 === 0) {
    if (i % 100 !== 0) {
      console.log(i)
    } else if (i % 100 === 0 && i % 400 === 0) {
      console.log(i)
    }
  }
}
