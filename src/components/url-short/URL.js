import React, { useState } from "react";

function URL() {
  const api_url = "https://api.shrtco.de/v2/shorten?";
  const [search_url, setSearchUrl] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);

  function handleSearchUrlChange(event) {
    setSearchUrl(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(api_url + "url=" + search_url)
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setShortenLinks([...shortenLinks, data.result.short_link]);
      });
  }

  function copyToClipboard(link) {
    navigator.clipboard.writeText(link);
  }

  function handleRemoveLink(index) {
    const newShortenLinks = [...shortenLinks];
    newShortenLinks.splice(index, 1);
    setShortenLinks(newShortenLinks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search_url}
          onChange={handleSearchUrlChange}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortenLinks.map((shortenLink, index) => (
        <p key={index}>
          Shortened link {index + 1}: {shortenLink}
          <button onClick={copyToClipboard(shortenLink)}>Copy</button>
          <button onClick={handleRemoveLink(index)}>X</button>
        </p>
      ))}
    </div>
  );
}

export default URL;
