const htmlElement = document.querySelector('html');

document.addEventListener('mousedown', () => {
  if(!htmlElement.classList.contains('clicking')){
    htmlElement.classList.add('clicking');
  }
});

document.addEventListener('keydown', e => {
  if(e.key === 'Tab') {
    if(htmlElement.classList.contains('clicking')){
      htmlElement.classList.remove('clicking');
    }
  }
});