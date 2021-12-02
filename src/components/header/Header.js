import React, { useState, useEffect } from "react";
import "./Header.css";
import img from "../../assets/6.png";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import img1 from "../../assets/3.png";
import { BsMouse } from "react-icons/bs";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Jan Kochanowski</span>
            <span>1530 - 1584</span>
            <span>
              herbu Korwin <img src={img1} className="herb" alt="..." />
            </span>
          </h1>
          <p className="u-text-small u-text-light">
            "Ja jeden niech wam służę, a za cześć poczytam <br /> Sobie, że się
            dróg innych niż pospólstwo&nbsp;chwytam.
            <br /> Wy mię z ziemie wzwodzicie, wy mię wyłączacie <br />Z liczby
            nieznacznej i nad obłoki wsadzacie."
          </p>
          <div className="header-cta">
            <div onClick={() => Toggle()}>
              <Button text={"Czytaj"} btnClass={"btn-dark"} />
            </div>
            <Modal
              show={modal}
              close={Toggle}
              title="Znaczenie dla literatury polskiej"
            >
              <p>
                Dzięki Kochanowskiemu literatura polska weszła w krąg
                europejskiej kultury umysłowej, powstał nowoczesny język
                poetycki bogaty w nowoczesne formy gatunkowe, wersyfikacyjne,
                stylistyczne i wątki tematyczne — od najbardziej osobistych
                przeżyć wewnętrznych do zagadnień filozoficznych, spraw
                publicznych i ogólnonarodowych. Liryka Kochanowskiego stała się
                rychło wzorem licznych naśladownictw w polskiej poezji barokowej
                oraz przedmiotem niekwestionowanego uwielbienia potomnych.
              </p>
              <br />
              <p>
                <em>encyklopedia.pwn.pl/haslo/Kochanowski-Jan;3923464.html</em>
              </p>
            </Modal>
            <div onClick={() => Toggle1()}>
              <Button text={"Więcej"} btnClass={"btn-aqua"} />
            </div>
            <Modal1 show={modal1} close={Toggle1} title="Twórczość i spuścizna">
              <p>
                Jego poezja cechowała się niesłychaną różnorodnością, poruszał
                poważne i lekkie tematy. Chciał przekazać odbiorcom kompletny
                pogląd na świat, postrzeganie wszystkich aspektów życia. Pisał
                treny, refleksyjne pieśni, psalmy, ale również lekkie i zabawne
                fraszki.
              </p>
              <p>
                XVI wiek był momentem ukształtowania współczesnej polszczyzny.
                Jednym z jej współtwórców był Jan Kochanowski.
              </p>
              <p>
                – Jan Kochanowski był niewątpliwie największym polskim twórcą
                doby odrodzenia, który mógł konkurować z największymi mistrzami
                starożytności. Najlepszym świadectwem wielkości Kochanowskiego
                jest fakt, że ciągle badacze literatury znajdują coś nowego –
                stwierdziła prof. Jolanta Choińska-Mika w audycji "Kronika
                polska".
              </p>
              <br />
              <p>
                <em>
                  www.polskieradio.pl/39/156/Artykul/2358075,Jan-Kochanowski-Mistrz-poezji-z-Czarnolasu
                </em>
              </p>
            </Modal1>
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={img} alt="..." />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#twórczość">
          <BsMouse className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
