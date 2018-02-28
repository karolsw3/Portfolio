var app = new Vue({
  el: '#projects',
  data: {
    projects: [
      {title: 'Telackes.com', description: 'A most recent project which I have made using Vue.js as the main framework and Joomla as CMS'},
      {title: 'Lakiery.hybrydowe.eu', description: 'A website which showcases products in a user-friendly style'},
      {title: 'My portfolio', description: 'This portfolio website has been written using Vue.js and Vanilla javascript.'},
      {title: '55+ Pens on codepen.io', description: 'Every now and then I am making a simple sketches of websites and applications. I have made about 55 various projects of this type'}
    ]
  }
})

var slogans = [
  'Minimalistic and affordable websites',
  'Simple and useful web apps',
  'Creative and artful workflow'
]
var actualSlogan = 0
var speed = 30
var timeUsed = 0
var text = document.getElementById('flashing_text')

function clearText () {
  for (let i = 0; i < text.innerHTML.length - 1; i++) {
    setTimeout(() => {
      text.innerHTML = text.innerHTML.slice(0, -1)
    }, speed * i)
  }
}

function writeText (slogan) {
  for (let i = 0; i < slogan.length; i++) {
    setTimeout(() => {
      text.innerHTML += '' + slogan.charAt(i)
    }, speed * i)
  }
}

writeText(slogans[0])
setInterval(() => {
  clearText()
  timeUsed = slogans[actualSlogan].length * speed + 1000
  actualSlogan++
  if (actualSlogan === slogans.length) actualSlogan = 0
  setTimeout(() => {
    writeText(slogans[actualSlogan])
  }, timeUsed)
}, slogans[actualSlogan].length * speed * 3 + 7000)
