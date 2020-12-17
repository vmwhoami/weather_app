import inputValidtion from './validations';

export default function addEventsToSearch() {
  let input = document.getElementById("input")
  let btn = document.getElementById("btn")
  let err = document.querySelector('.error__msg')
  btn.addEventListener('click', () => {

    let errmsg = inputValidtion(input)
    if (!errmsg) {
      let searchloc = weatherNow(input.value);
      fetchData(searchloc)
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

