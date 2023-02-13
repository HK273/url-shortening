import React, { useState } from "react";

const api_url = "https://api.shrtco.de/v2/shorten?";

const URL = () => {
  const [search_url, setSearchUrl] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(api_url + "url=" + search_url)
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setShortenLinks([...shortenLinks, data.result.short_link]);
        console.log(shortenLinks);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search_url}
          onChange={(e) => setSearchUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortenLinks.map((shortenLink, index) => (
        <p key={index}>
          Shortened link {index + 1}: {shortenLink}
        </p>
      ))}
    </div>
  );
};

export default URL;
