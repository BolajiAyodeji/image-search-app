
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
     <div class="row">
     <div class="col-md-3">
      <img class="img-fluid mb-3" src="${user.avatar_url}">
      <a class="btn btn-block btn-primary mb-4" href="${user.html_url}" target="_blank">View Profile</a>
     </div>
     <div class="col-md-9">
      <span class="badge badge-primary mb-2">
      Public Repos: ${user.public_repos}
      </span>
      <span class="badge badge-secondary mb-2">
      Public Gists: ${user.public_gists}
      </span>
      <span class="badge badge-success mb-2">
      Followers: ${user.followers}
      </span>
      <span class="badge badge-info mb-2">
      Following: ${user.following}
      </span>
      <br /><br />

      <ul class="list-group">
       <li class="list-group-item">Company: ${user.company}</li>
       <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
       <li class="list-group-item">Location: ${user.location}</li>
       <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
     </div>
     </div>
    </div>

    <h3 class="page-heading mb-3">Latest Repositories</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.map((repo) => {
      output += `
      <div class="card card-body mb-2">
       <div class="row">
        <div class"col-md-6">
        <a class="mr-3 mb-2 badge badge-info" href="${repo.html_url}"
        target="_blank">${repo.name}</a>
        </div>
        <br>
        <div class"col-md-6">
         <span class="badge badge-dark mb-2">
          Stars: ${repo.stargazers_count}
         </span>
         <span class="badge badge-dark mb-2">
         Watchers: ${repo.watchers_count}
         </span>
         <span class="badge badge-dark mb-2">
         Forks: ${repo.forks}
         </span>
        </div>
       </div>
      </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
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
    this.profile.innerHTML = '';
  }
}
