
function toggleMenu() {
  document.querySelector('.menu-items').classList.toggle('show')
}

const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenuItems = document.querySelector('.menu-items')
dropDownButton.addEventListener('click', toggleMenu)
