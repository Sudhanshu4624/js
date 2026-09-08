let mydate = new Date();

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString);
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());

console.log(typeof mydate); // ==> object

// let createdDate = new Date(2026, 0, 26) // yyyy, mm, dd format [month --> 0-11] [Day starts from monday]
// let createdDate = new Date(2026, 0, 26, 5, 30) // time added
// let createdDate = new Date("2026-01-26")
let createdDate = new Date("01-26-2026")
// console.log(createdDate.toDateString());

let newTimeStamp = Date.now()
console.log(newTimeStamp); // value in millisec from 01-01-1970
console.log(createdDate.getTime()); // millisec val so that it is easy to compare

// always compare in millisec only
console.log(Math.floor(Date.now()/1000)); // in seconds

// we can us .getDay, .getMonth,....... as per need
console.log(createdDate.getDay());
console.log(createdDate.getMonth() + 1);

createdDate.toLocaleDateString('default', {
    weekday : "long"
    // timestamp:.......
})