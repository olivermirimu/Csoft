//Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./../serviceWorker.js')
      .then(reg => {
        console.log('Succesfully registered: ', reg);
      }).catch(err => {
        console.log('Sorry nimekataa: ', err);
      });
  });
}