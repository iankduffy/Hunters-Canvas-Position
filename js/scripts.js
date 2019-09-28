const canvasDiv = document.getElementById("js-canvas-rugby")
const canvasDivFB = document.querySelector('[data-canvas-child="fb"]')
const canvasDivParent = document.querySelector('.js-canvas-parent')

const create_button = document.querySelector('[data-create]');
const download_button = document.querySelector('[data-download]');
const download_button_fb = document.querySelector('[data-download-fb]');


create_button.addEventListener('click', (e) => {
  canvasDivParent.classList.remove("u-hid")
  download_button.classList.remove("c-btn--disabled");
  download_button_fb.classList.remove("c-btn--disabled");
  download_button.download = `${homeText.textContent}-VS-${awayText.textContent}-${dateText.textContent}`
  download_button_fb.download = `${homeText.textContent}-VS-${awayText.textContent}-${dateText.textContent}`
  canvasDivFB.innerHTML = canvasDiv.innerHTML
  html2canvas(canvasDiv).then(canvas => {
    canvas.toBlob((blob) => {
      download_button.href = URL.createObjectURL(blob)
    }, 'image/png', 1)
  })
  html2canvas(canvasDivFB.parentElement).then(canvas => {
    canvas.toBlob((blob) => {
      download_button_fb.href = URL.createObjectURL(blob)
    }, 'image/png', 1)
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

let teams = {
  "leeds-hunters": {
    "name": "Leeds Hunters"
  },
  "newcastle-ravens": {
    "name": "Newcastle Ravens"
  },
  "liverpool-tritons": {
    "name": "Liverpool Tritons"
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
  },
  "hull-roundheads": {
    "name": "Hull Roundheads"
  }
}

let dateField = document.querySelectorAll('[name="date"]')[0]
let dateText = document.querySelector("[data-date-text]")

dateField.addEventListener("change", (e) => {
  let value = e.target.value
  value = value.split("-").reverse().join(" / ") 
  dateText.textContent = value
})

let locationField = document.querySelectorAll('[name="location"]')[0]
let locationText = document.querySelector("[data-location-text]")

locationField.addEventListener("change", (e) => {
  let value = e.target.value
  locationText.textContent = value
})

let setUpDropDown = (input) => {
  for(let team in teams) {
    let option = document.createElement("option")
    option.textContent = teams[team].name
    option.value = team
    input.appendChild(option)
  }
}

setUpDropDown(homeTeam)
setUpDropDown(awayTeam)

// let backgroundImageInput = document.querySelector('[data-type="background-image"]')

// backgroundImageInput.addEventListener('change', (e) => {
//   console.log(backgroundImageInput.files[0])
//   let file = backgroundImageInput.files[0]
//   let reader = new FileReader();
//   value = reader.readAsDataURL(file);
//   console.log(value)
//   canvasDiv.style.backgroundImage = `url(${value})`
// })

document.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log("defaulted")
})

let bottom_text = document.querySelector('[data-text-change]')
let viaduct_sponsor = document.querySelector('[data-type="sponsor"]')
let sponsor_logo = document.querySelector('[data-sponsor]')


// viaduct_sponsor.addEventListener("change", () => {
//   bottom_text.classList.toggle("u-force-left")
//   sponsor_logo.style.display = "block"
// })

let backgroundImage = document.querySelector('[data-type="background-image"]')

backgroundImage.addEventListener("change", (e) => {
  let value = e.target.files[0]
  let reader = new FileReader();

  reader.onload = () => {
    canvasDiv.style.backgroundImage = `url( ${reader.result} )`;
  }

  reader.readAsDataURL(value);
})