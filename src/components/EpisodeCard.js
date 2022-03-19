import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";



function EpisodeCard({ episode, podcastObj, dbJSON }) {
  const [toggleHeart, setToggleHeart] = useState(false);
  const [fullDataArray, setFullDataArray] = useState([]);

  //Option for getting DB 50 times
  //   useEffect(() => {
  //     getDBJSONNoCheck();
  //   }, []);

  //   function getDBJSONNoCheck() {
  //     const myRequest = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     fetch("http://localhost:3005/podcasts", myRequest)
  //       .then((response) => response.json())
  //       .then((newJSON) => {
  //         return console.log("Initial getDBJSON info before click", newJSON);
  //         // compareFunction()
  //       });
  //   }

  //make use effect to run compare api function
  useEffect(() => {
    compareDBToAPI();
  }, []);

  function compareDBToAPI() {
    const whatFoundPodcast = dbJSON.find((id) => {
      return Object.keys(id)[0] === podcastObj.name;
    });
    const whatFoundEpisode = dbJSON.find((id) => {
      return Object.values(id)[0].find((id) => id === episode.id);
    });

    console.log("WhatFoundPodcast:", whatFoundPodcast);

    if (whatFoundPodcast !== undefined && whatFoundPodcast !== false) {
      console.log("This should not be added");

      if (whatFoundEpisode !== undefined) {
        setToggleHeart(true);
      }
    }
  }

  function getDBJSON() {
    const myRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://podcast-recommend.herokuapp.com/podcasts", myRequest)
      .then((response) => response.json())
      .then((newJSON) => {
        // console.log("This is the returned", newJSON);
        checkDBJSON(newJSON);
      });
  }

  function checkDBJSON(newJSON) {
    //Variables
    const foundNewEpisode = newJSON.find(
      (id) => Object.keys(id)[0] === podcastObj.name
    );

    const pleaseBeID = newJSON.find((key) => {
      return Object.keys(key)[0] === podcastObj.name;
    });
    const whatFoundPodcast = newJSON.find((id) => {
      return Object.keys(id)[0] === podcastObj.name;
    });

    const whatFoundEpisode = newJSON.find((id) => {
      return Object.values(id)[0].find((id) => id === episode.id);
    });

    //functions

    console.log("This was found", whatFoundEpisode);
    if (whatFoundPodcast !== undefined && whatFoundPodcast !== false) {
      console.log("This should not be added");

      if (whatFoundEpisode !== undefined) {
        console.log("Dont do anything");
        setToggleHeart(false);

        console.log("Log no filter", pleaseBeID[podcastObj.name]);

        //this is checking to see correct podcast, then it is filtering the correct episodes to be subtracted
        const subtractedArray = pleaseBeID[podcastObj.name].filter((epi) => {
          return epi !== episode.id;
        });
        fetch(`https://podcast-recommend.herokuapp.com/podcasts/${pleaseBeID.id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            [podcastObj.name]: subtractedArray,
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("THIS SHOULD NOW BE REMOVED--->>>", json);
          });
      } else {
        console.log("Activate the Patch function");

        // this will be the second check for episode

        console.log(
          "HERE BE FOUND NEW EPISODE",
          foundNewEpisode[podcastObj.name]
        );

        fetch(`https://podcast-recommend.herokuapp.com/podcasts/${pleaseBeID.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            [podcastObj.name]: [
              ...foundNewEpisode[podcastObj.name],
              episode.id,
            ],
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("THIS SHOULD NOW BE PATCHED--->>>", json);
            setToggleHeart(true);
          });
      }
    } else {
      console.log("This SHOULD be added.");
      dbAdd();
      //this will be the post
    }
  }

  function dbAdd(e) {
    const podcastID = podcastObj.name;
   

    setToggleHeart(true);

    console.log("STATE", fullDataArray);
    // then you pass that array value into the obj
    // and post obj to db json
    const packagedObj = {
      [podcastID]: [...fullDataArray, episode.id],
    };
    fetch("https://podcast-recommend.herokuapp.com/podcasts/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [podcastID]: [...fullDataArray, episode.id] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
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
      <div className="episode_duration">
        {" "}
        {Math.round(episode.duration_ms / 1000 / 60)} min{" "}
      </div>
      <div>
        {/* <video controls width="200" className="episode_playback">
          <source src={episode.audio_preview_url} type="audio/mp3"></source>
        </video> */}
        <iframe
          src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator&theme=0`}
          width="350"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <span className="episode_upvotes">
        {toggleHeart ? (
          <FontAwesomeIcon icon={faHeart} onClick={getDBJSON} />
        ) : (
          <FontAwesomeIcon icon={faHeartEmpty} onClick={getDBJSON} />
        )}
      </span>
    </div>
  );
}

export default EpisodeCard;
