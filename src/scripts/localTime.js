
const getTime = (str) => {
  const time = str.split(',');
  const hours = time[1].split(':');
  const onlyH = `${hours[0]}:${hours[1]}`.trim();
  return onlyH;
};

export default function getLocalTime(data) {
  const { timezone } = data;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  let localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  localTime = utc + (1000 * timezone);
  const nd = new Date(localTime);
  const day = days[nd.getDay()];
  const dayOfMonth = nd.getDate();
  const month = months[nd.getMonth()];
  const time = nd.toLocaleString();
  const onlyH = getTime(time);
  return [day, dayOfMonth, month, onlyH];
}