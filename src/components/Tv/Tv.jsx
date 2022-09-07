import React from 'react'
import tvJpg from "../../assets/tv.png"
import  "./Tv.css"


const Tv = () => {
  return (
    <>
      <div className="tv">
        <div className="tv-para">
          <p className="glob-para-line-1">Enjoy on your TV.</p>
          <p className="glob-para-line-2">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className='tv-image-container'>
          <img src={tvJpg} className="tv-image" />
        </div>
      </div>
      <div className="divider" />
    </>
  );
}

export default Tv;