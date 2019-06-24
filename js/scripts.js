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
    "y": 30
  },
  2: { 
    "x": 360, 
    "y": 60
  },
  3: { 
    "x": 470, 
    "y": 30
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
  },
  16: {
    "x": 50, 
    "y": 920
  },
  17: {
    "x": 180, 
    "y": 920
  },
  18: {
    "x": 310, 
    "y": 920
  },
  19: {
    "x": 440, 
    "y": 920
  }, 
  20: {
    "x": 570, 
    "y": 920
  }, 
  21: {
    "x": 700, 
    "y": 920
  },
  22: {
    "x": 830, 
    "y": 920
  }, 
  23: {
    "x": 960, 
    "y": 920
  }
}

// Forwards 
for (let i = 1; i < 9; i++){
  let kit_image = new Image(); 
  kit_image.src = "assets/Kit-imag-1.png";

  kit_image.onload = function() {
    
    c.drawImage(this, rugby_position[i].x, rugby_position[i].y, 70, 70 * this.height / this.width)
  }
}

// Backs
for (let i = 9; i < 16; i++){
  let kit_image = new Image(); 
  kit_image.src = "assets/Kit-imag-1.png";

  kit_image.onload = function() {

    c.drawImage(this, rugby_position[i].x, rugby_position[i].y, 70, 70 * this.height / this.width)
  }
}

// Subs
for (let i = 16; i < 24; i++){
  let kit_image = new Image(); 
  kit_image.src = "assets/Kit-imag-1.png";

  kit_image.onload = function() {
    
    c.drawImage(this, rugby_position[i].x, rugby_position[i].y, 60, 60 * this.height / this.width)
  }
}

let match_form = document.getElementById("JS-Form")

  match_form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let home_input = document.getElementById("js-input-home").value.toUpperCase()
    let away_input = document.getElementById("js-input-away").value.toUpperCase()
    // let match_date = document.getElementById("js-input-date").value
    c.textAlign = "center";
    c.font = "36px Arial";
    c.fillStyle = '#fff';
    c.fillText(home_input, 830, 300);
    c.fillText(away_input, 830, 400);
    c.font = "48px Arial";
    c.fillText("VS", 830, 355);
  })
    
let forwards_form = document.getElementById("JS-Form-forwards")

forwards_form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    for (let a = 1; a < 9; a++) {
      c.textAlign = "center";
      c.fillStyle = '#fff';
      c.font = "24px Arial";
      c.fillText(this.elements[a - 1].value, (rugby_position[a].x + 35), rugby_position[a].y + 110)
    }
  })

let backs_form = document.getElementById("JS-Form-backs")

backs_form.addEventListener("submit", function(e) {
    e.preventDefault();
    for (let b = 9; b < 16; b++) {
      console.log(this.elements[b])
      c.textAlign = "center";
      c.fillStyle = '#fff';
      c.font = "24px Arial";
      c.fillText(this.elements[b - 9].value, (rugby_position[b].x + 35), rugby_position[b].y + 110)
    }
  })

let subs_form = document.getElementById("JS-Form-Subs")

subs_form.addEventListener("submit", function(e) {
    e.preventDefault();
    for (let b = 16; b < 24; b++) {
      console.log(this.elements[b])
      c.textAlign = "center";
      c.fillStyle = '#fff';
      c.font = "24px Arial";
      c.fillText(this.elements[b - 16].value, (rugby_position[b].x + 30), rugby_position[b].y + 110)
    }
  })
      

let forms = document.getElementsByClassName("js-form"); 

Array.prototype.forEach.call(forms, form  => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(this.event.dataset)
  })
})