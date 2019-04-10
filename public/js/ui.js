
class UI {
  constructor() {
    this.results = document.getElementById('image-results');
  }

  showImage(image) {
    let output = '';

    image.map((img) => {
       output += `
      <div class="image-results">
        <div>
          <a href ="${img.user.links.html}" alt="${img.links.self}" target="_blank">
            <img class="img-list" src="${img.urls.small}" alt="${img.description}"
              key=${img.id}/>
              </a>
              <p class="text">${img.user.username}</p>
            <button class="btn btn-info"><a href="${img.links.download}"></a></button>
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
