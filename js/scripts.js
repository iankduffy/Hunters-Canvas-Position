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
    "x": 250,
    "y": 60
  },
  2: { 
    "x": 360, 
    "y": 60
  },
  3: { 
    "x": 470, 
    "y": 60
  },
  4: { 
    "x": 300, 
    "y": 190
  }, 
  5: { 
    "x": 410, 
    "y": 190
  }, 
  6: {
    "x": 190,
    "y": 270
  },
  7: {
    "x": 530, 
    "y": 270
  }, 
  8: {
    "x": 360, 
    "y": 310
  },
  9: {
    "x": 430, 
    "y": 430
  }, 
  10: {
    "x": 550, 
    "y": 480
  }, 
  11: {
    "x": 90, 
    "y": 650
  },
  12: {
    "x": 670, 
    "y": 550
  },
  13: {
    "x": 780, 
    "y": 600
  },
  14: {
    "x": 890, 
    "y": 660
  },
  15: {
    "x": 490, 
    "y": 720
  }

}


console.table(rugby_position)

let position = 150; 
for (let i = 0; i < 20; i++){
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
    c.font = "36px Arial";
    c.fillStyle = '#fff';
    c.fillText(home_input, 830, 300);
    c.fillText(away_input, 830, 400);
    c.font = "48px Arial";
    c.fillText("VS", 830, 355);
    console.log(match_date)
  })
    