import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { GiLyre } from "react-icons/gi";

const Footer = () => {
  return (
    <section id="stopka">
      <div className="container footer">
        <div className="footer-box">
          <h4>Linki</h4>
          <div className="footer-links">
            <a href="#">&bull; Start</a>
            <a href="#twórczość">&bull; Twórczość</a>
            <a href="#życiorys">&bull; Życiorys</a>
            <a href="#dorobek">&bull; Dorobek</a>
            <a href="#ciekawostki">&bull; Ciekawostki</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Filmy</h4>
          <div className="footer-links">
            <a
              href="//www.youtube.com/watch?v=VjOM4EdJqfM"
              target="_blank"
              rel="noopener noreferrer"
            >
              &bull; Jan Kochanowski
            </a>
            <a
              href="//www.youtube.com/watch?v=PxcOR4RF_SY"
              target="_blank"
              rel="noopener noreferrer"
            >
              &bull; Poeta
            </a>
            <a
              href="//www.youtube.com/watch?v=OI7c1JULtSU"
              target="_blank"
              rel="noopener noreferrer"
            >
              &bull; Matura
            </a>
            <a
              href="//www.youtube.com/watch?v=xlsM-cNw3tw"
              target="_blank"
              rel="noopener noreferrer"
            >
              &bull; Lektury
            </a>
            <a
              href="//www.youtube.com/watch?v=dm1ykMcE9gw"
              target="_blank"
              rel="noopener noreferrer"
            >
              &bull; Jacek Kaczmarski
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Kontakt</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Adres: Polska.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: puaro@vp.pl
            </p>
          </div>
        </div>
        <div className="footer-box">
          <div className="logo">
            <GiLyre />
            <p className="logo-text">
              &nbsp;Mistrz&nbsp;<span>z&nbsp;Czarnolasu</span>
            </p>
          </div>
          <p className="u-text-small">2021 - {new Date().getFullYear()}.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
