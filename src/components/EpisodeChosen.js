import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";



function EpisodeChosen({ authToken }) {
  const [{ podcastObj, errors, status }, setPodcastObj] = useState({
    podcastObj: null,
    errors: null,
    status: "idle",
  });
  const [dbJSON, setDBJSON] = useState([]);

  const params = useParams();
  const showid = params.showid;

  useEffect(() => {
    setPodcastObj((state) => ({ ...state, errors: null, status: "pending" }));
    getDBJSONNoCheck();
    getPodcastFetch();
  }, []);

  function getDBJSONNoCheck() {
    const myRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://podcast-recommend.herokuapp.com//podcasts", myRequest)
      .then((response) => response.json())
      .then((newJSON) => {
        console.log("Initial getDBJSON info before click", newJSON);
        setDBJSON(newJSON);
      });
  }

  function displayEpisodeTitle() {
    return (
      <div className="podcast_image">
        <img src={podcastObj.images[1].url} />
        <p id="podcast_description">{podcastObj.description}</p>
      </div>
    );
  }

  function showCards() {
 

    //ternary dbJSON.episode === episode.key from map , use epilist with isTrue=true. if its not
    const epiList = podcastObj.episodes.items.map((episode) => (
      <EpisodeCard
        key={episode.id}
        episode={episode}
        podcastObj={podcastObj}
        dbJSON={dbJSON}
      />
    ));
   
    return epiList;
  }

  function getPodcastFetch() {
    fetch(`https://api.spotify.com/v1/shows/${showid}?market=US`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          return r.text().then((err) => {
            throw err;
          });
        }
      })
      .then((data) => {
        setPodcastObj((state) => ({
          ...state,
          podcastObj: data,
          errors: null,
          status: "fulfilled",
        }));
      })
      .catch((err) => {
        setPodcastObj({ data: null, errors: [err], status: "rejected" });
      });
  }

  return (
    <>
      {status === "fulfilled" ? (
        <div>
          {displayEpisodeTitle()}
          <div id="podcastList">{showCards()}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default EpisodeChosen;
