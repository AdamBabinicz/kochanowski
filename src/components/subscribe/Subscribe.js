import React from "react";
import "./Subscribe.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section id="dorobek">
      <div className="container subscribe">
        <h2>Poeta renesansowy</h2>
        <div className="control">
          <p>
            Jan Kochanowski pisać zaczął we Włoszech, używając wytwornej łaciny:
            powstały wówczas ody, pieśni, elegie i epigramaty. Nie wszystko się
            zachowało. Ocalone utwory wraz z innymi późniejszymi łacińskimi
            zostały wydane w 1584 roku w Krakowie pod tytułem "Elegiarum libri
            IV".
          </p>
          <br />
          <p>
            Ogromna większość utworów Kochanowskiego powstała w języku polskim.
            Był to jego programowy wybór, zgodny z renesansowym trendem
            tworzenia w językach narodowych. Był to jednocześnie krok, który
            spowodował jakościową przemianę języka polskiego w ciągu zaledwie 30
            lat. Polszczyzna Kochanowskiego i po nim jest inną polszczyzną niż
            wcześniejsza. Tak gwałtownej rewolucji językowej nie było w polskiej
            historii.
          </p>
          <p>
            Kochanowski był świadom swojej roli w literaturze. Był świadom roli
            poety: jako pierwszy sformułował etos twórcy, którego talent jest
            darem od Boga, zarazem przywilejem, obowiązkiem i cierpieniem.
          </p>
          <br />
          <p>
            W okresie dworskim Kochanowski rozpoczął, a kontynuował przez całe
            życie, pisanie "Fraszek", drobnych, celnie spuentowanych utworów,
            których tradycja sięga epigramatów i anakreontyków w poezji
            antycznej.
          </p>
          <p>
            Okres dworski to przede wszystkim epika, bardzo zróżnicowana, od
            poematów okolicznościowych do publicystyki polityczno-społecznej.
          </p>
          <br />
          <p>
            Poglądy polityczne Kochanowskiego cechowało to, co w ogóle stanowiło
            istotę jego wizji świata: umiar, poczucie harmonii i potrzeba ładu.
            W doskonałym świecie stworzonym przez Boga chciałby widzieć
            doskonałe społeczeństwo, zbudowane na zgodzie, przyjaźni i trosce o
            dobro wspólne. Zatem był umiarkowanie reformatorski i umiarkowanie
            katolicki. Choć krytyczny wobec szlachty, unikał przesady i
            zacietrzewienia w dyskusji.
          </p>
          <br />
          <p>
            <em>culture.pl/pl/tworca/jan-kochanowski</em>
          </p>
          <div className="social-icons">
            <a
              href="//pl.wikipedia.org/wiki/Jan_Kochanowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">
                <AiOutlineGoogle />
              </div>
            </a>
            <a
              href="//www.facebook.com/jan.kochanowski.5283166"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">
                <FaFacebookF />
              </div>
            </a>
            <a
              href="//twitter.com/czarnolas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">
                <FaTwitter />
              </div>
            </a>
            <a
              href="//www.instagram.com/jan_kochanowski1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
