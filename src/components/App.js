import "../App.css";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import SearchList from "./SearchList";
import EpisodeChosen from "./EpisodeChosen";
import { Buffer } from "buffer";

// import styled from "styled-components";
const dotenv = require('dotenv').config()

function App() {
  const [returnedShows, setReturnedShows] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    console.log("Loading....");
    getSpotAuth();
  }, []);

  function getSpotAuth() {
    var client_id = "f85a953e44db4e769a3cf3dcdc9242d6";
   

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + api_key).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
      json: true,
    })
      .then((res) => res.json())
      .then((data) => {
        
        setAuthToken(data.access_token);
      });
  }

  return (
    <div className="App">
      <Header />
      {/* <h1 id="">Roe Jogan Poddr</h1> */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setReturnedShows={setReturnedShows}
              authToken={authToken}
            />
          }
        ></Route>
        <Route
          path="/searchlist"
          element={<SearchList returnedShows={returnedShows} />}
        />
        <Route
          path="/searchlist/:showid"
          element={<EpisodeChosen authToken={authToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
