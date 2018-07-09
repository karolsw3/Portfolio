// Vue.js

var app = new Vue({
  el: '#projects',
  data: {
    projects: [
      {title: 'Gradientify.js', about: 'Javascript library for creating animated gradient backgrounds', annotation: 'Pure JS', url: 'https://karolsw3.github.io/gradientify.js/'},
      {title: 'Lakiery.hybrydowe.eu', about: 'A website for cosmetics seller', annotation: 'HTML & CSS', url: 'http://lakiery.hybrydowe.eu/'},
      {title: 'Sudoku', about: 'A modern, API-based sudoku web app', annotation: 'Node.js', url: 'https://github.com/Galactim/Sudoku'},
      {title: 'NOVA-Transport', about: 'A webiste template for transport companies', annotation: 'HTML & CSS', url: 'https://karolsw3.github.io/NOVA-Transport/'},
      {title: 'Minesweeper', about: 'Object-oriented minesweeper adaptation', annotation: 'ES6', url: 'https://karolsw3.github.io/Minesweeper/'},
      {title: 'This portfolio', about: 'The page you are currently browsing', annotation: 'Vue.js', url: ''},
      {title: '65+ Pens on codepen.io', about: 'My front-end portfolio of website sketches', annotation: 'Various', url: 'https://codepen.io/karolsw2/'}
    ]
  }
})

// Vanilla js

var menu = document.getElementsByClassName('menu')[0]

window.addEventListener('scroll', () => {
  var scroll = document.body.scrollTop

  if (scroll > 60) {
    menu.classList.remove('menu--transparent')
  } else {
    menu.classList.add('menu--transparent')
  }

  Array.from(document.getElementsByClassName('revealOnScroll')).forEach((element, index) => {
    let rect = element.getBoundingClientRect()
    if (scroll >= (rect.top + element.style.height + 30)) {
      if (!element.classList.contains('revealAnimation')) {
        element.classList.add('revealAnimation')
      }
    }
  })
})
