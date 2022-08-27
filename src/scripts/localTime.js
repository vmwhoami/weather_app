export default function getLocalTime(data) {
  const date = require('date-and-time');
  const { timezone } = data;
  const now = new Date();
  const dayMonthYear = date.format(now, 'DD of MMMM YYYY');
  const localTime = date.format(now, 'HH:mm');
 
 debugger;
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  localTime = utc + (1000 * timezone);
  const nd = new Date(localTime);
 
  const month = months[nd.getMonth()];
  const time = nd.toLocaleString();
  const onlyH = getTime(time);
  return [day, dayMonthYear, month, onlyH];
}