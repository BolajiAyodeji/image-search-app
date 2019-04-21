
class UI {
  constructor() {
    this.results = document.getElementById('image-results');
  }

  showImage(image) {
    let output = '';

    image.map((img) => {
       output += `
     <div class="image-results">
       <div class="card mt-2" style="width: 50rem;">
        <img class="card-img-top" src="${img.urls.regular}" alt="${img.description}">
       <div class="card-body">
        <h6 class="card-title">
         Photo by: <a href="${img.user.links.html}?utm_source=image-search-app&utm_medium=referral" target="_blank">${img.user.name}</a>
         on <a href="https://unsplash.com/?utm_source=image-search-app&utm_medium=referral" target="_blank">Unsplash</a>
        </h6>
        <a class="btn btn-primary" href="${img.links.download}" download>⤵ Download</a>
     </div>
    </div>
  </div>
      `;
    });
    this.results.innerHTML = output;
  }

  showAlert(msg, cN) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = cN;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearImage() {
    this.results.innerHTML = '';
  }
}

export default UI;
