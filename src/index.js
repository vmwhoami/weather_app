import './styles/styles.scss';
import addEventsToSearch from './assets/events';
addEventsToSearch()



function getLocalTime(offset) {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  localTime = utc + (1000 * offset);
  let nd = new Date(localTime)
  // return nd.toLocaleString()
  return nd
}

let localTime = getLocalTime(10800);

console.log(localTime);
