// Seleciona todos os links internos que levam a seções na pág
const links = document.querySelectorAll('a[href^="#"]')

// Adiciona um evento de click para cada link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); //impedir que o link execute o comportamento padrao
    const section = document.querySelector(this.hash)
    const top = section.offsetTop

    window.scroll({
      top,
      behavior: 'smooth'
    })
  })
})
