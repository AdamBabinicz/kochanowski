import React from "react";
import "./Feature.css";
import { GiBookCover, GiBookmarklet } from "react-icons/gi";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon />
        <div className="inner-icon">{icon}</div>
      </div>
      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
