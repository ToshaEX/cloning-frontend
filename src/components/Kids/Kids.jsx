import React from 'react'
import kidsImage from "../../assets/kids.png"
import "./Kids.css"

const Kids = () => {
  return (
    <>
      <div className="kids">
        <img src={kidsImage} alt="kids" className="kids-image"></img>
        <div className="kids-intro">
          <div className="kids-para">
            <p className="glob-para-line-1">Create profiles for kids.</p>

            <p className="glob-para-line-2">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <div className="divider" />
    </>
  );
}

export default Kids