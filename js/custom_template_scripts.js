const canvasDiv = document.getElementById("js-canvas-rugby")

const create_button = document.querySelector('[data-create]');
const download_button = document.querySelector('[data-download]');

create_button.addEventListener('click', (e) => {
  download_button.classList.remove("c-btn--disabled");;
  download_button.download = "image"
  html2canvas(canvasDiv).then(canvas => {
    canvas.toBlob((blob) => {
      download_button.href = URL.createObjectURL(blob)
    }, 'image/png', 1)
  })
})

document.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log("defaulted")
})

// Form sections
let preHeader = document.querySelector('[data-type="pre_header"]')
let header = document.querySelector('[data-type="main_header"]')
let logoPosition = document.querySelector('[data-type="logo_position"]')

let preFooter = document.querySelector('[data-type="footer"]')
let footer = document.querySelector('[data-type="footer"]')

let addParagraphBtn = document.querySelector('[data-add-paragraph]')

// Elements in Canvas
let preHeaderEle = document.querySelector('[data-pre-header]')
let headerEle = document.querySelector('[data-header]')
let headerContainer = document.querySelector('[data-header-container]')
let logoEle = document.querySelector('[data-logo]')

preHeader.addEventListener("change", (e) => {
  let value = e.target.value
  preHeaderEle.textContent = value
})

header.addEventListener("change", (e) => {
  let value = e.target.value
  headerEle.textContent = value
})

logoPosition.addEventListener("change", (e) => {
  let value = e.target.value
  logoEle.style.display = "block"
  switch(value) {
    case 'above': 
      headerContainer.style.flexDirection = "column"
      headerContainer.style.alignItems = "center"
      break;
    case 'flex-left': 
      headerContainer.style.flexDirection = "row"
      headerContainer.style.alignItems = "center"
      break;
    case 'flex-right': 
      headerContainer.style.flexDirection = "row-reverse"
      headerContainer.style.alignItems = "center"
      break;
    case 'hidden': 
      logoEle.style.display = "none"
      break;
    default:
      headerContainer.style.flexDirection = "column"
      headerContainer.style.alignItems = "center"
  }
})

let paraForm = document.querySelector('[data-behaviour="paragraph-form"]')
let firstPara = document.querySelector('[data-para="1"]')
let paraEle = document.querySelector('[data-para-container]')

addParagraphBtn.addEventListener("click", (e) => {
  let pForm = document.querySelectorAll('[data-behaviour="p-form"]').length

  let newPara = document.createElement("input")
  newPara.classList = "o-input"
  newPara.setAttribute('data-behaviour', "p-form");
  newPara.setAttribute('data-para', (pForm +1));
  addParaToCanvas(newPara, pForm)
  paraForm.append(newPara)
})

const addParaToCanvas = (element, pForm) => {
  element.addEventListener("change", (e) => {
    let pNo = element.getAttribute('data-para')
    if (paraEle.childNodes.length - 1 > pNo){
      console.log("exists")
      // We update text
    }
    else {
      let p = document.createElement("p")
      p.textContent = element.value
      paraEle.setAttribute('data-para', (pForm +1));
      paraEle.append(p)
    }
  })
}

addParaToCanvas(firstPara)

