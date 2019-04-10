
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
    <h5 class="card-title">Photo by: <a href="${img.user.links.html}?utm_source=your_app_name&utm_medium=referral">${img.user.name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a></h5>
    <a href="${img.links.download}" class="btn btn-primary">Download Image</a>
  </div>
</div>
</div>
      `;
    });
    this.results.innerHTML = output;
  }

  clearImage() {
    this.results.innerHTML = '';
  }
}
