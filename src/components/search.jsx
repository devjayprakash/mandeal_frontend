import React, { useState } from "react";

const Search = () => {
  let [open, setOpen] = useState(false);

  return open ? (
    <div className="search searchbox">
      <input
        className="search-container"
        type="text"
        className="search-container-bar"
        placeholder="Search for Products"
      />
      <img
        onClick={() => {
          setOpen(false);
        }}
        className="search-container-icon"
        src="../images/icons/letter-x.png"
        alt="search"
      />
    </div>
  ) : (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="searchbox closed"
      >
        <img
          className="search-container-icon"
          src="../images/icons/search.svg"
          alt="search"
        />
      </div>
    </>
  );
};

export default Search;
