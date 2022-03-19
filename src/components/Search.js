import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Search({ handleFormSubmit, setSearch, search }) {
  return (
    <div className="searchbar">
      <input id="length"
        value={search}
        type="text"
        id="search"
        name="name"
        placeholder="Type Podcast Name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to={search !== "" ? "/searchlist" : "/"}>
        <Button
          style={{
            color: "black",
           
            borderColor: "#b1d0e0",
            backgroundColor: "#b1d0e0",
          }}
          onClick={handleFormSubmit}
        >
          Search
        </Button>
      </Link>
    </div>
  );
}

export default Search;
