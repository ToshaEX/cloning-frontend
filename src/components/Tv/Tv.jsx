import React from 'react'
import tvJpg from "../../assets/tv.png"
import  "./Tv.css"


const Tv = () => {
  return (
    <>
      <div className="tv">
        <p className="tv-para">
          <span className="glob-para-line-1">Enjoy on your TV.</span>
          <br />
          <span className="glob-para-line-2">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </span>
        </p>
        <div>
          <img src={tvJpg} className="tv-image" />
        </div>
      </div>
      <div className="divider" />
    </>
  );
}

export default Tv