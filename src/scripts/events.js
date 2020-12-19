import inputValidtion from './validations';
import { weatherNow } from './queries';
import fetchData from './async';

export default function addEventsToSearch() {
  const input = document.getElementById('input');
  const btn = document.getElementById('btn');
  const err = document.querySelector('.error__msg');


  window.onload = () => {
    input.focus();
  };

  btn.addEventListener('click', () => {
    const errmsg = inputValidtion(input);
    if (!errmsg) {
      const searchloc = weatherNow(input.value);
      fetchData(searchloc);
      input.value = '';
      err.textContent = '';
    } else {
      err.classList.add('visible');
      err.textContent = errmsg;
    }
  });

  input.addEventListener('keyup', (e) => {
    const { key } = e;
    if (key === 'Enter') btn.click();
  });

  input.addEventListener('focus', () => {
    err.classList.remove('visible');
  });
}
