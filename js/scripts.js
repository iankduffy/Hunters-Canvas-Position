const canvasDiv = document.getElementById("js-canvas-rugby")
const download_button = document.getElementById("btn-download");

download_button.addEventListener('click', function(e){
  html2canvas(canvasDiv).then(canvas => {
    let dataURL = canvas.toDataURL('image/png');
    download_button.href = dataURL; 
  }) 
})

let homeTeam = document.querySelectorAll('[name="home"]')

homeTeam.addEventListener("change", (e) => {
  
})
