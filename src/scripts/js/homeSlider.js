const images = [
  '../assets/images/breakout-area.jpg',
  '../assets/images/depresed.jpg',
  '../assets/images/limbo.png'
];
let slider = document.getElementById('slider');

let i = 0;
setInterval(() => {
  i += 1;
  if (i > images.length - 1) {
    i = 0;
  }
  slider.src = images[i];
}, 1000);