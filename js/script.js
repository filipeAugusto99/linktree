const button = document.querySelector('#button_home')

button.onclick = function() {
  const sectionHome = document.querySelector('#home')
  sectionHome.scrollIntoView({behavior: 'smooth'})
}
