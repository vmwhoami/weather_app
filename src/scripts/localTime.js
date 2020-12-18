
let getTime = (str) => {
  let time = str.split(',');
  let hours = time[1].split(':');
  let onlyH = `${hours[0]}:${hours[1]}`.trim()
  return onlyH
}

export default function getLocalTime(data) {
  let timezone = data.timezone
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  localTime = utc + (1000 * timezone);
  let nd = new Date(localTime)
  let day = days[nd.getDay()];
  let dayOfMonth = nd.getDate()
  let month = months[nd.getMonth()];
  let time = nd.toLocaleString();
  let onlyH = getTime(time);
  return [day, dayOfMonth, month, onlyH]

}