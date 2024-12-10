import React from "react";
import { searchImg } from "../assets/images/images.js";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-icon-wrapper">
        <img src={searchImg} alt="search icon" /> <input placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
