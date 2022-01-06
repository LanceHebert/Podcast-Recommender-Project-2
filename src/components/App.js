import "../App.css";
import React, { useState,useEffect } from "react";
import HomePage from "./HomePage";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import SearchList from "./SearchList";
import EpisodeChosen from "./EpisodeChosen";
import { Buffer } from "buffer";


function App() {
  const [returnedShows, setReturnedShows] = useState([]);
  const [authToken, setAuthToken] = useState("");

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
      });
  }

  return (
    <div className="App">
      <Header />
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
