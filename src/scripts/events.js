import inputValidtion from './validations';
import { forecast, weatherNow } from './queries';
import { fetchData } from './async';
export default function addEventsToSearch(value = null) {
  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  let err = document.querySelector('.error__msg');
  let topinfo = document.querySelector('.topinfo');

  topinfo.addEventListener('click', () => {
    fetchData()
  })



  window.onload = () => {
    input.focus()
  }

  btn.addEventListener('click', () => {
    let errmsg = inputValidtion(input)
    if (!errmsg) {
      let searchloc = weatherNow(input.value);
      fetchData(searchloc)
      input.value = "";
    } else {
      err.classList.add('visible')
      err.textContent = errmsg
    }
  })

  input.addEventListener('keyup', (e) => {
    let key = e.key;
    if (key === "Enter")
      btn.click();
  })

  input.addEventListener('focus', () => {
    err.classList.remove('visible')
  })
}

