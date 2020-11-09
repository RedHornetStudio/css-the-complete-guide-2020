console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

const body = document.querySelector('body');

document.addEventListener('mousedown', () => {
  body.classList.add('clicking');
});

document.addEventListener('keydown', e => {
  if(e.key === 'Tab') {
    body.classList.remove('clicking');
  }
});