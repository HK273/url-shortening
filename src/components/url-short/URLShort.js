import React, { useState } from "react";
import "../url-short/URLShort.css";
import { IoCloseSharp } from "react-icons/io5";

// https://www.bbc.co.uk
function URLShort() {
  const api_url = "https://api.shrtco.de/v2/shorten?";
  const [search_url, setSearchUrl] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);
  const [inputStyle, setInputStyle] = useState("valid");
  const [additionalHtml, setAdditionalHtml] = useState(null);

  function handleSearchUrlChange(event) {
    const input = event.target.value;
    setInputStyle("valid");
    setAdditionalHtml(null);
    setSearchUrl(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const urlRegex = /^(http(s)?:\/\/)([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;
    if (!search_url || !urlRegex.test(search_url)) {
      setInputStyle("invalid");
      setAdditionalHtml(
        <p className="placeholder-validate">please add a valid URL</p>
      );
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
        setShortenLinks((prevShortenLinks) => {
          console.log("prevShortenLinks below..");
          console.log(prevShortenLinks); // log prevShortenLinks array
          return [
            ...prevShortenLinks,
            {
              originalLink: search_url,
              shortLink: data.result.short_link,
              isCopied: false,
            },
          ];
        });
        console.log("ShortenLinks below..");
        console.log(shortenLinks);
        setSearchUrl(""); // clear input
        // reset placeholder and HTML
        setInputStyle("valid");
        setAdditionalHtml(null);
      });
  }

  function handleCopy(index) {
    setShortenLinks((prevShortenLinks) => {
      const newShortenLinks = [...prevShortenLinks];
      console.log("index: " + index);
      console.log("newShortenLinks handleCopy...");
      console.log(newShortenLinks);
      newShortenLinks[index].isCopied = true; // set current link as copied
      return newShortenLinks;
    });
  }

  function handleRemoveLink(index) {
    setShortenLinks((prevShortenLinks) => {
      const newShortenLinks = [...prevShortenLinks];
      console.log("index: " + index);
      console.log("newShortenLinks handleRemoveLink...");
      newShortenLinks.splice(index, 1);
      return newShortenLinks;
    });
  }

  return (
    <div className="url-wrap">
      <div className="url-shortner">
        <form onSubmit={handleSubmit}>
          <input
            className={inputStyle} // set input style based on state
            type="text"
            value={search_url}
            onChange={handleSearchUrlChange}
            placeholder="Shorten a link here..."
          />
          <button className="url-btn" type="submit">
            Shorten it!
          </button>
          {additionalHtml}
        </form>
      </div>
      {shortenLinks.map((shortenLink, index) => (
        <div className="short-link" key={index}>
          <div>
            <p className="p-link">{shortenLink.originalLink}</p>
          </div>
          <div>
            <p className="p-link">{shortenLink.shortLink}</p>
          </div>
          <div>
            <button
              className={shortenLink.isCopied ? "copied-btn" : "copy-btn"} // toggle button state based on isCopied state
              onClick={() => handleCopy(index)}
            >
              {shortenLink.isCopied ? "Copied" : "Copy"}
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

export default URLShort;
