
const unsplash = new Unsplash;
const ui = new UI;

const searchImg = document.getElementById('searchImg');

searchImg.addEventListener('keyup', (e) => {
  const searchQuery = e.target.value;

  if(searchQuery !== '') {
    unsplash.getImage(searchQuery)
      .then(res => {
        if(res.message === 'Not Found') {
          ui.showAlert('Keyword not found', 'alert alert-danger');
        }  else {
          ui.showImage(res);
        }
      })
      .catch(err => {
        ui.showAlert('Something went wrong, check your connection and try again...', 'alert alert-danger');
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
