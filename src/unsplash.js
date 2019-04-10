
import { ACCESS_KEY } from "babel-dotenv"

class Unsplash {

  constructor()  {
    this.access_key = ACCESS_KEY;
  }

  async getImage(query) {
    const responseData = await fetch(`https://api.unsplash.com/search/photos/?client_id=${this.access_key}&per_page=30&orientation=landscape&query=${query}}`);


    let res = await responseData.json();

    const image = res.results;

    return image;
  }
}

export default Unsplash;
