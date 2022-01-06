import React, { useState, useEffect } from "react";
import Search from "./Search";
import CarouselContainer from "./CarouselContainer";

function HomePage({ setReturnedShows,authToken }) {
  
  const [search, setSearch] = useState("");
  //setting formSubmit to value that was entered in search form.

  function handleFormSubmit() {
    const encodedFormSubmit = encodeURI(search);

    fetch(
      `https://api.spotify.com/v1/search?q=${encodedFormSubmit}&type=show&market=US`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((showsBack) => {
        console.log("**********", showsBack.shows.items);
        setReturnedShows(showsBack.shows.items);
      });
  }

  return (
    <div>
      <Search
        handleFormSubmit={handleFormSubmit}
        search={search}
        setSearch={setSearch}
      />
      <CarouselContainer />
    </div>
  );
}

export default HomePage;
