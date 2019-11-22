
var modal = document.querySelector('.js-modal);
var overlay = document.querySelector('.js-overlay);
var open = document.querySelector('.js-active-modal);
var close = ocument.querySelector('.js-close-modal);


 function showModal() {
  modal.classList.add(show);
  overlay.classList.add(show);
  modal.classList.remove(hide);
  overlay.classList.remove(hide);
}

function hideModal() {
  modal.classList.add(hide);
  overlay.classList.add(hide);
  modal.classList.remove(show);
  overlay.classList.remove(show);
}

window.onclick = function(event) {
  if (event.target != modal) {
    hideModal();
  }
}

open.addEventListener("click", showModal);
close.addEventListener("click", hideModal);
