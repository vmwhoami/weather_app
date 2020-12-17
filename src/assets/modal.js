
export default function modal() {
  let modal = document.querySelector(".modal");
  let modalCont = document.querySelector(".modal-container");
  let closebtn = document.querySelector(".modal-close");
  let mybtn = document.querySelector('.mybtn')

  modal.addEventListener('click', e => {

    if (e.target !== modalCont)
      modal.classList.remove('open')
  })
  closebtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove('open')
  })


  mybtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('open')
  })



}

