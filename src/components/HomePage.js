import React, { useState, useEffect } from "react";
import Search from "./Search";
import EpisodeList from "./EpisodeList";
import { Buffer } from "buffer";

function HomePage() {
  const [authToken, setAuthToken] = useState("");
  const [search, setSearch] = useState("");
  const [returnedShows, setReturnedShows] = useState([]);

  useEffect(() => {
    console.log("Loading....");
    getSpotAuth();
  }, []);

  function getSpotAuth() {
    var client_id = "6f9666b315ce4b59a68c96974576e616";
    var client_secret = "75d1ac22e0f1438db1c1026b76aa4e4d";

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
      json: true,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);
        setAuthToken(data.access_token);
        // getSpotData();
        // searchSpot();
      });
  }

  function getSpotData(data) {
    fetch(
      `https://api.spotify.com/v1/shows/4rOoJ6Egrf8K2IrywzwOMk/episodes?market=US`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((dataBack) => {
        console.log("This is normal GET:", dataBack);
      });
  }

  function searchSpot(data) {
    fetch(
      `https://api.spotify.com/v1/shows/4rOoJ6Egrf8K2IrywzwOMk/episodes?market=US`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((dataBack) => {
        console.log("This is search:", dataBack);
      });
  }

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

  const displaySearchResults = returnedShows.map((show) => (
    <li key={show.name}>
      
        <img
          onClick={() => handleClick(show)}
          src={show.images[1].url}
          alt={show.name + "podcast"}
        />
      
    </li>
  ));

  function handleClick(show) {
    console.log(show);
  }

  return (
    <div>
      <Search
        handleFormSubmit={handleFormSubmit}
        search={search}
        setSearch={setSearch}
      />
      <EpisodeList returnedShows={returnedShows} />

      {displaySearchResults}
    </div>
  );
}

export default HomePage;
