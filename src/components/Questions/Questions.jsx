import React, { useState } from "react";
import "./Questions.css";

const Questions = () => {
  const display = {
    question1: "none",
    question2: "none",
    question3: "none",
    question4: "none",
  };
  const [dis, setDis] = useState(display);
  return (
    <>
      <div className="questions">
        <p className="questions-heading">Frequently Asked Questions</p>

        <div className="questions-container">
          <div
            onClick={() => {
              dis.question1 === "none"
                ? setDis({ ...display, question1: "" })
                : setDis(display);
              console.log(dis);
            }}
            className="questions-button"
          >
            What is Netflix?
          </div>
          <div
            className="answer"
            style={{ display: dis.question1, fontSize: "1.5rem" }}
          >
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br />
            <br />
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </div>
        </div>

        <div className="questions-container">
          <div
            onClick={() => {
              dis.question2 === "none"
                ? setDis({ ...display, question2: "" })
                : setDis(display);
              console.log(dis);
            }}
            className="questions-button"
          >
            How much does Netflix cost?
          </div>
          <div
            className="answer"
            style={{ display: dis.question2, fontSize: "1.5rem" }}
          >
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            USD3.99 to USD11.99 a month. No extra costs, no contracts.
          </div>
        </div>
        <div className="questions-container">
          <div className="questions-button">What is Netflix?</div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Questions;
