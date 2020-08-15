const talkingCalendar = function(date) {
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
  let readableDate = '';
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = monthNames[newDate.getMonth()];
  let day = newDate.getDate();
  if (day === 1 || day === 21) {
    readableDate = `${month} ${day}st, ${year}`;  
  } else if (day === 2 || day === 22) {
    readableDate = `${month} ${day}nd, ${year}`;
  } else if (day === 3 || day === 23) {
    readableDate = `${month} ${day}rd, ${year}`;
  } else {
    readableDate = `${month} ${day}th, ${year}`;
  }
  return readableDate
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2020/08/03"));
console.log(talkingCalendar("1990/03/01"));