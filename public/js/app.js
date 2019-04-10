
const unsplash = new Unsplash;
const ui = new UI;

const searchImg = document.getElementById('searchImg');

searchImg.addEventListener('keyup', (e) => {
  const searchQuery = e.target.value;

  if(searchQuery !== '') {
    unsplash.getImage(searchQuery)
      .then(res => {
        if(res.message === 'Not Found') {
          console.log(res.image.message);
        }  else {
          console.log(res);
          ui.showImage(res);
        }
      })
      .catch(err => {
        console.log(err);
      })
  } else {
    ui.clearImage();
  }
})
