const button = document.querySelector('.button')

function toggle() {
  button.classList.toggle('altcolor')
}

function firstAction(callback, message) {
  console.log(message);
  setTimeout(callback, 2000);
}

function secondAction(message) {
  console.log(message);
}

// firstAction()

setTimeout(() => firstAction(() => secondAction('I am the second action'), 'I am the first action'), 5000)
// secondAction()