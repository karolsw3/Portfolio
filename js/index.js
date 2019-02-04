
var menu = document.getElementsByClassName('menu')[0]

window.addEventListener('scroll', () => {
  var scroll = document.body.scrollTop

  // Change the navbar class after a slight scroll
  if (scroll > 60) {
    menu.classList.remove('menu--transparent')
  } else {
    menu.classList.add('menu--transparent')
  }

  // Reveal objects on scroll
  Array.from(document.getElementsByClassName('revealOnScroll')).forEach((element, index) => {
    var rect = element.getBoundingClientRect()
    if (scroll >= (rect.top + element.style.height + 30)) {
      if (!element.classList.contains('revealAnimation')) {
        element.classList.add('revealAnimation')
      }
    }
  })
})

// Generate the portfolio projects list using the data below:
var data = {
  projects: [
    {title: 'Veganbase', about: 'I\'m making a web app for a company with a beautiful mission. Veganbase helps vegans find vegan restaurants and hotels anywhere they are.', annotation: 'Vue.js', url: 'https://new.veganbase.com/restaurants'},
    {title: 'Sudoku', about: 'Sudoku is one of my biggest personal projects. Players can gain points for solving sudoku puzzles and compete with others from all over the world.', annotation: 'Vue.js', url: 'https://github.com/Galactim/Sudoku'},
    {title: 'Detektyw24.eu', about: 'A website for a detective company.', annotation: 'HTML & CSS', url: 'https://detektyw24.eu/en.html'},
    {title: 'Lakiery.hybrydowe.eu', about: 'A website for cosmetics seller.', annotation: 'HTML & CSS', url: 'http://lakiery.hybrydowe.eu/'},
    {title: 'Gradientify.js', about: 'Javascript library for creating animated gradient backgrounds.', annotation: 'Pure JS', url: 'https://karolsw3.github.io/gradientify.js/'},
    {title: 'Lubie.trawe.pl', about: 'A website for a horticultural company.', annotation: 'HTML & CSS', url: 'http://lubie.trawe.pl/'},
    {title: 'Minesweeper', about: 'Object-oriented minesweeper adaptation.', annotation: 'Vanilla JS', url: 'https://karolsw3.github.io/Minesweeper/'}
  ]
}

var projects = document.getElementById('projects')

for (var i = 0; i < data.projects.length; i++) {
  var project = document.createElement('div')
  project.className = 'project revealOnScroll'
  if (i < 3) project.className += ' project--primary'

  var description = document.createElement('div')
  description.className = 'project__desc'

  var descriptionTitle = document.createElement('a')
  descriptionTitle.innerHTML = data.projects[i].title
  descriptionTitle.className = 'project__title'
  descriptionTitle.target = '_blank'
  descriptionTitle.href = data.projects[i].url
  description.appendChild(descriptionTitle)

  var descriptionAbout = document.createElement('div')
  descriptionAbout.innerHTML = data.projects[i].about
  descriptionAbout.className = 'project__about'
  description.appendChild(descriptionAbout)

  var descriptionAnnotation = document.createElement('div')
  descriptionAnnotation.innerHTML = data.projects[i].annotation
  descriptionAnnotation.className = 'project__annotation'
  description.appendChild(descriptionAnnotation)

  project.appendChild(description)
  projects.appendChild(project)
}

// Smoothscroll
Array.from(document.getElementsByClassName('smoothScroll')).forEach(
  function (element) {
    element.onclick = function () {
      var targetId = element.getAttribute('href')
      var target = document.getElementById(targetId)
      var targetScroll = target.getBoundingClientRect().top
      for (var i = 0; i < 100; i++) {
        window.setTimeout(function () {
          document.body.scrollTop += targetScroll / i
        }, i * 5)
      }
    }
  }
)
