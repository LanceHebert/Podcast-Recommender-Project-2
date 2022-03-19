import React from "react";
import { Link } from "react-router-dom";

function SearchList({ returnedShows }) {
  const displaySearchResults = returnedShows.map((show) => (
    <li key={show.href}>
      <Link to={`/searchlist/${show.id}`}>
        <img
          className="podcastSearchImage"
          src={show.images[1].url}
          alt={show.name + "podcast"}
        />
      </Link>
   
    </li>
  ));

  return (
    <div className="searchResults">
      <h1 id="searchResults2">Search Results</h1>
      <div id="bar" />
      <div id="searchResults3">{displaySearchResults}</div>
    </div>
  );
}

export default SearchList;
