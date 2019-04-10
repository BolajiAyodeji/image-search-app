
const unsplash = new Unsplash;
const ui = new UI;

const searchImg = document.getElementById('searchImg');

searchImg.addEventListener('keyup', (e) => {
  const searchQuery = e.target.value;

  if(searchQuery !== '') {
    unsplash.getImage(searchQuery)
      .then(res => {
        ui.showImage(res);
      })
      .catch(err => {
        if(err.message === 'Unexpected token R in JSON at position 0') {
          ui.showAlert('Oops! Invalid keyword', 'alert alert-danger');
        } else {
          ui.showAlert('Something went wrong, check your connection and try again...', 'alert alert-danger');
        }
      })
  } else {
    ui.clearImage();
  }
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function() {
      console.log('Service Worker Registered')
    })
  })
}
