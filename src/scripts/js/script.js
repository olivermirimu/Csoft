<<<<<<< HEAD
//Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceWorker.js').catch(err => {
      console.log('Sorry nimekataa: ', err);
    });
  });
}
=======
// //Service Worker registration
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('./../serviceWorker.js', {
//       scope: '/src/'
//     }).then(reg => {
//       console.log('Succesfully registered: ', reg);
//     }).catch(err => {
//       console.log('Sorry nimekataa: ', err);
//     });
//   });
// }
>>>>>>> 88420c06f34b3e345c93c0eb47b201d59c585398
