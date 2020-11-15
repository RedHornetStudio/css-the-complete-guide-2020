const htmlElement = document.querySelector('html');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planList = document.querySelector('.plan__list');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// code to hide outline while clicking
document.addEventListener('mousedown', () => {
  if(!htmlElement.classList.contains('clicking')){
    htmlElement.classList.add('clicking');
  }
});

window.addEventListener('keydown', e => {
  if(e.key === 'Tab') {
    if(htmlElement.classList.contains('clicking')){
      htmlElement.classList.remove('clicking');
    }
  }
});

// backdrop
backdrop.addEventListener('click', () => {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  // mobileNav.style.display = 'none';
  backdrop.classList.remove('open');
  modal.classList.remove('open');
  mobileNav.classList.remove('open');
})

// show modal
planList.addEventListener('click', e => {
  if(e.target.classList.contains('button')) {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    backdrop.classList.add('open');
    modal.classList.add('open');
  }
});

modal.addEventListener('click', e => {
  if(e.target.classList.contains('modal__action--negative')) {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    modal.classList.remove('open');
  }
});

// mobile menu
toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});