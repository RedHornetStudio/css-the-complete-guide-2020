const htmlElement = document.querySelector('html');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planList = document.querySelector('.plan__list');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

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
  backdrop.style.display = 'none';
  mobileNav.classList.remove('open');
  setTimeout(() => {
    mobileNav.style.display = 'none';
  }, 500)
  backdrop.classList.remove('open');
  if(modal) {
    modal.classList.remove('open');
  }
})

// show modal
if(planList) {
  planList.addEventListener('click', e => {
    if(e.target.classList.contains('button')) {
      backdrop.style.display = 'block';
      setTimeout(() => {
        backdrop.classList.add('open');
      }, 1)
      modal.classList.add('open');
    }
  });

  modal.addEventListener('click', e => {
    if(e.target.classList.contains('modal__action--negative')) {
      backdrop.style.display = 'none';
      backdrop.classList.remove('open');
      modal.classList.remove('open');
    }
  });
}

// mobile menu
toggleButton.addEventListener('click', () => {
  backdrop.style.display = 'block';
  mobileNav.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
  }, 1)
});

ctaButton.addEventListener('animationstart', e => {
  console.log('Animation started', e);
});

ctaButton.addEventListener('animationend', e => {
  console.log('Animation ended', e);
});

ctaButton.addEventListener('animationiteration', e => {
  console.log('Animation iteration', e);
});