
export default function modal() {
  const modal = document.querySelector('.modal');
  const modalCont = document.querySelector('.modal-container');
  const closebtn = document.querySelector('.modal-close');
  const mybtn = document.querySelector('.mybtn');

  modal.addEventListener('click', e => {
    if (e.target !== modalCont) modal.classList.remove('open');
  });
  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('open');
  });


  mybtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('open');
  });
}
