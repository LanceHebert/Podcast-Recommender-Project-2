import React from "react";
// import AAA from "";

function EpisodeCard({ episode }) {
  return (
    <div className="episode_card" key={null}>
      <span>
        <img
          alt="no image :("
          src={episode.images[0].url}
          className="episode_image"
        />
      </span>
      <span> </span>
      <span className="episode_title"> {episode.name} </span>
      <span> </span>
      <span className="episode_duration">
        {" "}
        {Math.round(episode.duration_ms / 1000 / 60)} min{" "}
      </span>
      <span className="episode_playback">
        <video controls width="200">
          <source src={episode.audio_preview_url} type="audio/mp3"></source>
        </video>
        {/* <iframe
          src={`https://open.spotify.com/embed/episode/${episode.external_urls.spotify}?utm_source=generator&theme=0`}
          width="250"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe> */}
      </span>
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
