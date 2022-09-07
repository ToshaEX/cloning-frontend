import React from "react";
import homeMain from "../../assets/home-main.jpg";
import logo from "../../assets/netflix-logo.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${homeMain}),linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 100%)`,
          backgroundSize: "cover",
        }}
      >
        <div className="home-top">
          <img src={logo} alt="Logo" className="top-logo" />
          <button type="button" className="btn btn-primary">
            {" "}
            Sign Out
          </button>
        </div>
        <div className="home-intro">
          <p className="intro-para">
            Welcome back!
            <br />
            <span className="para-line-1">
              Unlimited movies, TV shows, and more.
              <br />
            </span>
            <span className="para-line-2">Watch anywhere. Cancel anytime.</span>
          </p>
          <button type="button" className="btn btn-primary finish">
            {" "}
            Finish Sign Up
          </button>
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

export default Home;
