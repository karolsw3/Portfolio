// Vue.js

var app = new Vue({
  el: '#projects',
  data: {
    projects: [
      {title: 'Gradientify.js', about: 'Javascript library for creating animated gradient backgrounds', annotation: 'Pure JS', image: './images/projects/gradientify.png', url: 'https://karolsw2.github.io/gradientify.js/'},
      {title: 'Cookieclicker', about: 'Cookieclicker game written in ES6', annotation: 'Node.js', image: './images/projects/cookieclicker.png', url: 'https://github.com/karolsw2/Cookieclicker'},
      {title: 'Lakiery.hybrydowe.eu', about: 'A website for cosmetics seller', annotation: 'HTML & CSS', image: './images/projects/lakiery.png', url: 'http://lakiery.hybrydowe.eu/'},
      {title: 'This portfolio', about: 'The page you are currently browsing', annotation: 'Vue.js', image: './images/projects/portfolio.png', url: ''},
      {title: '65+ Pens on codepen.io', about: 'My front-end portfolio of website sketches', annotation: 'Various', image: './images/projects/codepen.png', url: 'https://codepen.io/karolsw2/'}
    ]
  }
})

// Vanilla js

var menu = document.getElementsByClassName('menu')[0]

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 60) {
    menu.classList.remove('menu--transparent')
  } else {
    menu.classList.add('menu--transparent')
  }
})
