import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [text, setText] = useState("MENTAL HEALTH");
  const [animation, setAnimation] = useState("fade-in");

  // Change text every 3 seconds
  useEffect(() => {
    const texts = [
      "SELF MANAGEMENT",
      "ENHANCING MENTAL HEALTH",
      "STRESS RELIEF TIP",
      "TRICKS",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setAnimation("fade-out"); // Start fade-out animation

      // Change text after animation duration
      setTimeout(() => {
        index = (index + 1) % texts.length; // Cycle through the array
        setText(texts[index]);
        setAnimation("fade-in"); // Start fade-in animation
      }, 500); // Time for fade-out animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="d-navbar">
      <div className="body-content">
        <h1 className="first-text-body">
          LICENSED THERAPIST AND TRANSFORMATIONAL <br />
          SPEAKER ON
          <span className={`change-text ${animation}`}> {text}</span>
        </h1>
        <button className="btn-1">SEE JEREMIAH IN ACTION</button>
        <button className="btn-2">SPEAKING PROGRAMS</button>
      </div>
    </div>
  );
}
