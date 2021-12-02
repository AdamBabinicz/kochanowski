import React from "react";
import "./Features.css";
import { FiBookOpen } from "react-icons/fi";
import img from "../../assets/7.png";
import img1 from "../../assets/5.png";
import img2 from "../../assets/12.jpg";
import Feature from "./Feature";
import { featureList } from "./data";

const Features = () => {
  return (
    <section className="" id="twórczość">
      <div className="container features">
        <div className="u-title">
          <FiBookOpen />
          <h2>Twórczość</h2>
          <p className="u-text-small u-text-dark">
            "człowiekiem jestem, więc nic, co ludzkie, nie może być mi obce"
            <br /> "homo sum, a me alienum esse puto"
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <img src={img1} alt="..." />
            <img src={img} alt="..." /> <br />
            <br />
            <br />
            <br />
            <img src={img2} alt="..." />
          </div>
          <div className="features-right">
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
