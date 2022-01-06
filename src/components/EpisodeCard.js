import React from "react";
// import AAA from "";

function EpisodeCard({}) {
  return (
    <div className="episode_card" key={null}>
      <span>
        <img alt="no image :(" src={null} className="episode_image" />
      </span>
      <span> </span>
      <span className="episode_title"> {null} </span>
      <span> </span>
      <span className="episode_duration"> {null} min </span>
      <span>
        <img alt="upvotes" src="../upvote.png" className="episode_upvotes" />
        {null}
      </span>
    </div>
  );
}

export default EpisodeCard;

{
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
}
