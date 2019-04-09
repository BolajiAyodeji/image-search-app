
require('dotenv').config()

class GitHub {

  constructor()  {
    this.client_id = 'process.env.CLIENT_ID';
    this.client_secret = 'process.env.CLIENT_SECRET';
    this.repos_count = 10;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch
    (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch
    (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
