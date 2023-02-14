import React, { useState } from "react";
import "../url-short/URLShort.css";
import { IoCloseSharp } from "react-icons/io5";

function URL() {
  const api_url = "https://api.shrtco.de/v2/shorten?";
  const [search_url, setSearchUrl] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);
  const [buttonText, setButtonText] = useState("Copy");

  function handleSearchUrlChange(event) {
    setSearchUrl(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Check if search_url is a valid URL
    const urlRegex = /^(http(s)?:\/\/)([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;
    if (!search_url || !urlRegex.test(search_url)) {
      alert("Please enter a valid URL");
      return;
    }
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
    // setButtonText("Copied");
    setButtonText(buttonText === "Copy" ? "Copied" : "Copy");
    navigator.clipboard.writeText(link);
  }

  function handleRemoveLink(index) {
    const newShortenLinks = [...shortenLinks];
    newShortenLinks.splice(index, 1);
    setButtonText(buttonText === "Copy" ? "Copied" : "Copy");
    setShortenLinks(newShortenLinks);
  }

  return (
    <div>
      <div className="url-shortner">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search_url}
            onChange={handleSearchUrlChange}
            placeholder="Shorten a link here..."
          />
          <button className="url-btn" type="submit">
            Shorten it!
          </button>
        </form>
      </div>
      {shortenLinks.map((shortenLink, index) => (
        <div className="short-link" key={index}>
          <div>
            <p>{search_url}</p>
          </div>
          <div>
            <p>{shortenLink}</p>
          </div>
          <div>
            <button
              className={buttonText}
              onClick={() => copyToClipboard(shortenLink)}
            >
              {buttonText}
            </button>
          </div>
          <div className="close">
            <IoCloseSharp onClick={() => handleRemoveLink(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default URL;
