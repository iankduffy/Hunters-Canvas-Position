const canvasDiv = document.getElementById("js-canvas-rugby")
const create_button = document.querySelector('[data-create]');
const download_button = document.querySelector('[data-download]');


create_button.addEventListener('click', (e) => {
  html2canvas(canvasDiv).then(canvas => {
    let dataURL = canvas.toDataURL('image/png');
    download_button.href = dataURL; 
  }) 
})

let homeTeam = document.querySelectorAll('[name="home"]')[0]
let homeLogo = document.querySelector("[data-home-logo]")

homeLogo.style.backgroundImage = "url(assets/hunters-logo.png)"

let awayTeam = document.querySelectorAll('[name="away"]')[0]
let awayLogo = document.querySelector("[data-away-logo]")

awayLogo.style.backgroundImage = "url(assets/Ravens.png)"

homeTeam.addEventListener("change", (e) => {
})
