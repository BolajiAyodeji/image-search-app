
class UI {
  constructor() {
    this.results = document.getElementById('image-results');
  }

  showProfile(query) {
    this.results.innerHTML = `
    <div className="image-results">
              <div>
                  <a href =${image.user.links.html} alt="${linktounsplash}" target="_blank">
                  <img className="img-list" src=${image.urls.small} alt="searchresult"
                       key=${image.id}/>
                       <div class="middle">
                          <p class="text">${image.user.username}</p>
                      </div>
                      </a>
              </div>
      </div>
    `;
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

  clearProfile() {
    this.results.innerHTML = '';
  }
}
