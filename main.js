var modal = document.querySelector('.js-modal');
var overlay = document.querySelector('.js-overlay');
var openModal = document.querySelector('.js-active-modal');
var closeModal = document.querySelector('.js-close-modal');
var durationAnimation = 1400;

function showModal() {
  modal.classList.remove('display-none');
  overlay.classList.remove('display-none');
  modal.classList.remove('hide');
  overlay.classList.remove('hide');
  modal.classList.add('show');
  overlay.classList.add('show'); 
}

function hideModal() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
  modal.classList.add('hide');
  overlay.classList.add('hide');
    setTimeout(function(){ 
      modal.classList.add('display-none');
      overlay.classList.add('display-none');
  },durationAnimation);
}

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
