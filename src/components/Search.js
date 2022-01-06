import React from "react";
import { Link } from "react-router-dom";

function Search({ handleFormSubmit, setSearch, search }) {
  return (
    <div className="searchbar">
      <input
        value={search}
        type="text"
        id="search"
        name="name"
        placeholder="Type Podcast Name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/searchlist">
        <button onClick={handleFormSubmit}>Search</button>
      </Link>
    </div>
  );
}

export default Search;
