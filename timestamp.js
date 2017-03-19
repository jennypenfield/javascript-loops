// In programming, dates are calculated by counting the number of milliseconds since the epoch.
// The epoch was midnight January 1st, 1970. The number of milliseconds since the
// epoch is called a timestamp. The following JavaScript code will get the current timestamp:
//
// new Date().valueOf()
//
// This returns something like "1482247094153" which stands for "Tue Dec 20 2016 09:44:53".
//
// The new Date().valueOf() code can be treated like any other number. EG: new Date().valueOf() / 1000000
// will divide the timestamp by 1,000,000.
//
// Your job is to write a loop that outputs the timestamp continuously until the timestamp is cleanly divisible by 100.
// In other words, the time will be printed continuously until we find a time that has milliseconds of 00.

var timestamp = 3

while (timestamp % 100 !== 0) {
  timestamp = new Date().valueOf()
  console.log(timestamp)
}
