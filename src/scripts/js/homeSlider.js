const images = ["breakout-area.jpg", "meeting.png", "YinYang.jpg"];
let slider = document.getElementById("slider");

let i = 0;
setInterval(() => {
  i += 1;
  if (i > images.length - 1) {
    i = 0;
  }
  slider.src = images[i];
}, 3000);
