// https://shrtco.de/

const api_url = "https://api.shrtco.de/v2/shorten?";
const search_url = "https://www.bbc.co.uk/";
fetch(api_url + "url=" + search_url)
  .then((response) => {
    if (!response.ok) {
      throw Error("something went wrong");
    }
    return response.json();
  })
  .then((data) => {
    console.log("data below");
    console.log(data);
  });
