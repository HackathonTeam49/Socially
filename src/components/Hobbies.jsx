import React, { useState } from "react";
import Button from "./Button";
import "./Hobbies.css";

function Hobbies() {
  // Initial hobby names for 4 divs
  const initialHobbies = ["Crochet", "Painting", "Gardening", "Cooking"];
  const [hobbies, setHobbies] = useState(initialHobbies);
  const [isSpinning, setIsSpinning] = useState(false);

  // List of possible hobbies to cycle through
  const hobbyPool = [
    "Crochet",
    "Painting",
    "Gardening",
    "Cooking",
    "Knitting",
    "Photography",
    "Sculpting",
    "Drawing",
  ];

  const handleRefresh = () => {
    setIsSpinning(true);
    // Randomly select new hobbies from the pool
    const newHobbies = Array.from(
      { length: 4 },
      () => hobbyPool[Math.floor(Math.random() * hobbyPool.length)]
    );
    setHobbies(newHobbies);
    setTimeout(() => setIsSpinning(false), 1000); // Spin for 1s
  };

  return (
    <section className="hobbies">
      <div className="h-h">
        <div className="hobbies-h">
          <h1>Hobbies for you</h1>{" "}
          <img
            alt="refresh"
            className={`refresh ${isSpinning ? "spin" : ""}`}
            src="/src/assets/refresh.png"
            onClick={handleRefresh}
          />
        </div>
        <p>
          Take up hobbies. Apart from occupying your time, hobbies also help you
          connect with those with similar hobbies
        </p>
      </div>
      <div className="container">
        {hobbies.map((hobby, index) => (
          <div className="h-details" key={index}>
            <div className="h-img">
              <img
                alt="hobby"
                className="hobby-img"
                src="/src/assets/hobby.png"
              />
            </div>
            <div className="h-m-details">
              <div className="hobby-name">{hobby}</div>
              <div className="price-details">
                <p className="price">
                  Est.<span>N15,000 </span>
                  <span className="to-start">to start</span>
                </p>
                <Button>Start</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
