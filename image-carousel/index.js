const rightArrow = document.querySelector('.right-arrow');
const currentPicture = document.querySelector('.current-picture')

rightArrow.addEventListener('click', function() {
  currentPicture.classList.add('fade-out')
})