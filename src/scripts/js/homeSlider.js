const images = [
  '../assets/images/breakout-area.jpg',
  '../assets/images/depresed.jpg',
  '../assets/images/limbo.png'
];
let slider = document.getElementById('slider');

let i = 0;
<<<<<<< HEAD
setInterval(() => { 
=======
setInterval(() => {
>>>>>>> 88420c06f34b3e345c93c0eb47b201d59c585398
  i += 1;
  if (i > images.length - 1) {
    i = 0;
  }
  slider.src = images[i];
}, 1000);