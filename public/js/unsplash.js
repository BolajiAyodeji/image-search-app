
class Unsplash {

  constructor()  {
    this.access_key = 'bcbb04cfca25878e93843be6fee130e6b90e79eed0b42633aeac41a891c44353';
    this.secret_key = 'b88c03118aa533efb930c6844d8ad6af8cec7f22c319954fea3dacce833cb775';
  }

  async getImage(query) {
    const responseData = await fetch
    (`https://api.unsplash.com/search/photos/?client_id=${this.access_key}&per_page=15&orientation=landscape&query=${query}}`);


    let res = await responseData.json();

    const image = res.results;

    return image;
  }
}
