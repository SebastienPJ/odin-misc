const rightArrow = document.querySelector('.right-arrow');
const currentPicture = document.querySelector('.current-picture')
const pictureContainer = document.querySelector('.container')

rightArrow.addEventListener('click', function() {
  console.log(this);
  console.log(currentPicture);
  currentPicture.style.transform = 'translate(200px, 0px)'


})



function playAnimation(currentImage, nextImage) {

}





/*******
 *   currentPicture.classList.add('fade-out')
  setTimeout(() => {
    currentPicture.classList.add('hide')
    
  }, 4000);

  setTimeout(() => {
    currentPicture.nextElementSibling.classList.toggle('hide')
    currentPicture.nextElementSibling.classList.add('fade-in')
    
  }, 5000);



  currentPicture.nextElementSibling.classList.toggle('current-picture')
  currentPicture.classList.toggle('current-picture')
  
 */