const canvas = document.getElementById("js-canvas-rugby"), 
      c = canvas.getContext("2d");

const download_button = document.getElementById("btn-download");

download_button.addEventListener('click', function(e){
  let dataURL = canvas.toDataURL('image/png');
  download_button.href = dataURL; 
})

const background_image = new Image();
      background_image.src = "assets/pitch-v2.jpg";


background_image.onload = function () {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  c.drawImage(this, 0, 0)
}

let rugby_position = {
  1: {
    "x": 230,
    "y": 100
  },
  2: { 
    "x": 340, 
    "y": 100
  },
  3: { 
    "x": 450, 
    "y": 100
  },
  4: { 
    "x": 280, 
    "y": 230
  }
}


console.table(rugby_position)

let position = 150; 
for (let i = 1; i < 5; i++){
  let kit_image = new Image(); 
  kit_image.src = "assets/Kit-imag-1.png";

  kit_image.onload = function() {
    
    position += 80
    console.log(rugby_position[i].x)
    c.drawImage(this, rugby_position[i].x, rugby_position[i].y, 70, 70 * this.height / this.width)
    c.textAlign = "center";
    c.font = "18px Arial";
    c.fillText("Hello world", (rugby_position[i].x + 35), rugby_position[i].y + 110)
  }
}

let match_form = document.getElementById("JS-Form")

  match_form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let home_input = document.getElementById("js-input-home").value.toUpperCase()
    let away_input = document.getElementById("js-input-away").value.toUpperCase()
    let match_date = document.getElementById("js-input-date").value
    c.textAlign = "center";
    c.font = "38px Arial";
    c.fillStyle = '#fff';
    c.fillText(home_input, 830, 300);
    c.fillText(away_input, 830, 400);
    c.font = "48px Arial";
    c.fillText("VS", 830, 350);
    console.log(match_date)
  })
    