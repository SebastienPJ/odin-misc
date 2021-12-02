const button = document.querySelector('.expand-button')
button.addEventListener('click', function() {
  if (this.classList.contains('expand')) {
    this.classList.remove('expand')
    this.classList.add('collapse')
    document.querySelectorAll('.icon').forEach(icon => {
      icon.classList.toggle('fade-in')
    })

  } else {
    this.classList.add('expand')
    this.classList.remove('collapse')
    document.querySelectorAll('.icon').forEach(icon => {
      icon.classList.toggle('fade-in')
    })


  }
})