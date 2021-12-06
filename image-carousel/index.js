const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow')
const currentPicture = document.querySelector('.current-picture')
const pictureContainer = document.querySelector('.container')
const pictureSlides = document.querySelectorAll('.picture-slide')
const dots = document.querySelectorAll('.slider')


dots.forEach(dot => {
  dot.addEventListener('click', function() {
    showSlide(this.dataset.index)
  })
})

rightArrow.addEventListener('click', function() {
  currentIndex += 1
  showSlide(currentIndex)

})

leftArrow.addEventListener('click', function() {
  currentIndex -= 1
  showSlide(currentIndex)
})




let currentIndex = 0
showSlide(currentIndex)



// setInterval(() => {
//   showSlide(currentIndex + 1)
  
// }, 5000);



function showSlide(indexDesired) {
  currentIndex = indexDesired;

  if (indexDesired > pictureSlides.length - 1) {
    currentIndex = 0
  }

  if (indexDesired < 0) {
    currentIndex = pictureSlides.length - 1
  }

  pictureSlides.forEach(slide => {
    slide.setAttribute('style', 'display: none')
  })

  dots.forEach(dot => {
    dot.classList.remove('active')
  })

  pictureSlides[currentIndex].setAttribute('style', 'display: block')
  dots[currentIndex].classList.add('active')

  // console.log(index);
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