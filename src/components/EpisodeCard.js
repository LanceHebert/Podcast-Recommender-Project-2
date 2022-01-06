import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

// import AAA from "";

function EpisodeCard({ episode, podcastObj }) {
  const [toggleHeart, setToggleHeart] = useState(false);
  const [fullDataArray, setFullDataArray] = useState([]);
  const [updateDBJSON, setUpdateDBJSON] = useState(false);

  //   useEffect(() => {
  //     getDBJSON();
  //   }, []);

  function getDBJSON() {
    const myRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3005/podcasts", myRequest)
      .then((response) => response.json())
      .then((newJSON) => {
        // console.log("This is the returned", newJSON);
        checkDBJSON(newJSON);
      });
  }

  function checkDBJSON(newJSON) {
    console.log("Drill here", newJSON);
    const whatFound = newJSON.find((id) => {
      console.log("This is the id", Object.keys(id)[0]);
      return Object.keys(id)[0] === podcastObj.name;
    });
    console.log("This was found", whatFound);
    if (whatFound !== undefined) {
      console.log("This should not be added");

      // this will be the second check for episode
    } else {
      console.log("This SHOULD be added.");

      //this will be the post
    }
  }

  function dbAdd(e) {
    const podcastID = podcastObj.name;
    // console.log("This is what we have", episode.id, podcastID);

    setToggleHeart(true);

    console.log("STATE", fullDataArray);
    // then you pass that array value into the obj
    // and post obj to db json
    const packagedObj = {
      [podcastID]: [...fullDataArray, episode.id],
    };
    fetch("http://localhost:3005/podcasts", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [podcastID]: [...fullDataArray, episode.id] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // setUpdateDBJSON(!updateDBJSON);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function dbSubtract() {
    console.log("Empty:Toggling to", !toggleHeart, "Captain");
    setToggleHeart(false);
  }

  return (
    <div className="episode_card" key={null}>
      <span>
        <img
          alt="none loaded :("
          src={episode.images[0].url}
          className="episode_image"
        />
      </span>
      <span className="episode_title"> {episode.name} </span>
      <span className="episode_duration">
        {" "}
        {Math.round(episode.duration_ms / 1000 / 60)} min{" "}
      </span>
      <span className="episode_playback">
        <video controls width="200">
          <source src={episode.audio_preview_url} type="audio/mp3"></source>
        </video>
        {/* <iframe
          src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator&theme=0`}
          width="250"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe> */}
      </span>
      <span className="episode_upvotes">
        {toggleHeart ? (
          <FontAwesomeIcon icon={faHeart} onClick={dbSubtract} />
        ) : (
          <FontAwesomeIcon icon={faHeartEmpty} onClick={getDBJSON} />
        )}
      </span>
    </div>
  );
}

export default EpisodeCard;

// {
/* <div className="episode_card" key={episode.id}>
      
      <span>
        <img
          alt="no image :("
          src={episode.picture}
          className="episode_image"
        />
      </span>
      <span> </span>
      <span className="episode_title"> {episode.name} </span>
      <span> </span>
      <span className="episode_duration"> {episode.duration} min </span>
      <span>
        <img alt="upvotes" src="../upvote.png" className="episode_upvotes" />
        {episode.votes}
      </span>
    </div> */
// }
