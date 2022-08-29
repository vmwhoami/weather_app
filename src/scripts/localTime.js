export default function getLocalTime(data) {
  const date = require('date-and-time');
  const { timezone } = data;
  const timeNow = new Date(new Date().getTime() + (timezone * 1000));
  const hrs = timeNow.getUTCHours();
  const mins = timeNow.getUTCMinutes();
  const day = timeNow.getUTCDate();
  const month = timeNow.getUTCMonth() + 1;
  const year = timeNow.getUTCFullYear();
  const pattern = date.compile('M DD YYYY h:m');
  const parsedDate = date.parse(`${month} ${day} ${year} ${hrs}:${mins}`, pattern);
  const hoursAndMIn = date.format(parsedDate, 'HH:mm');
  const dayMonthYear = date.format(parsedDate, 'dddd, DD of MMMM');

  return { hours: hoursAndMIn, date: dayMonthYear };
}