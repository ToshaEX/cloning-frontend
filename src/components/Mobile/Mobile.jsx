import React from "react";
import mobileImage from "../../assets/mobile-0819.jpg";
import "./Mobile.css";

const Mobile = () => {
  return (
    <>
      <div className="mobile">
        <div className="mobile-container">
          <img src={mobileImage} alt="mobile" className="mobile-image"></img>
        </div>
        <div className="mobile-intro">
          <div className="mobile-para">
            <p className="glob-para-line-1">
              Download your shows to watch offline.
            </p>
            <p className="glob-para-line-2">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

export default Mobile;
