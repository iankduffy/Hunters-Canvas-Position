const canvasDiv = document.getElementById("js-canvas-rugby")
const create_button = document.querySelector('[data-create]');
const download_button = document.querySelector('[data-download]');


create_button.addEventListener('click', (e) => {
  download_button.classList.remove("c-btn--disabled");    
  html2canvas(canvasDiv).then(canvas => {
    let dataURL = canvas.toDataURL('image/png');
    download_button.href = dataURL;
  }) 
})

let homeTeam = document.querySelectorAll('[name="home"]')[0]
let homeLogo = document.querySelector("[data-home-logo]")
let homeText = document.querySelector("[data-home-text]")

let awayTeam = document.querySelectorAll('[name="away"]')[0]
let awayLogo = document.querySelector("[data-away-logo]")
let awayText = document.querySelector("[data-away-text]")

homeTeam.addEventListener("change", (e) => {
  let value = e.target.value
  homeLogo.style.backgroundImage = `url(assets/${value}.png)`
  homeText.textContent = teams[value].name
})

awayTeam.addEventListener("change", (e) => {
  let value = e.target.value
  awayLogo.style.backgroundImage = `url(assets/${value}.png)`
  awayText.textContent = teams[value].name
})

let teams = [{
  "leeds-hunters": {
    "name": "Leeds Hunters"
  },
  "newcastle-ravens": {
    "name": "Newcastle Ravens"
  }, 
  "glasgow-alphas": {
    "name": "Glasgow Alphas"
  }, 
  "chester-centurions": {
    "name": "Chester Centurions"
  },
  "manchester-spartans": {
    "name": "Manchester Spartans"
  }, 
  "typhoons": {
    "name": "Typhoons"
  }, 
  "bristol-bisons": {
    "name": "Bristol Bisons"
  }, 
  "birmingham-bulls": {
    "name": "Birmingham Bulls"
  }, 
  "cardiff-lions": {
    "name": "Cardiff Lions"
  }, 
  "northampton-outlaws": {
    "name": "Northampton Outlaws"
  }, 
  "swansea-viking": {
    "name": "Swansea Vikings"
  },
  "wessex-wyverns": {
    "name": "Wessex Wyverns"
  }, 
  "belfast-azlans": {
    "name": "Belfast Azlans"
  }
}]

let dateField = document.querySelectorAll('[name="date"]')[0]
let dateText = document.querySelector("[data-date-text]")

dateField.addEventListener("change", (e) => {
  let value = e.target.value
  value = value.split("-").reverse().join("/") 
  dateText.textContent = value
})

let locationField = document.querySelectorAll('[name="location"]')[0]
let locationText = document.querySelector("[data-location-text]")

locationField.addEventListener("change", (e) => {
  let value = e.target.value
  locationText.textContent = value
})


let igrClubsInput = document.querySelectorAll('[data-type="match"]')

for(let i = 1; i > igrClubsInput.length; i++) { 
  teams.forEach((team) => {
    console.log(team)
  })
}