import React, { useState } from "react";
import "./Download.css";
import {
  GiFeather,
  GiFruitTree,
  GiGraduateCap,
  GiGreekTemple,
  GiLitCandelabra,
  GiLockedChest,
} from "react-icons/gi";
import { IconContext } from "react-icons";
import Modal from "../../components/Portal/Modal";
import Modal1 from "../../components/Portal/Modal";
import Modal2 from "../../components/Portal/Modal";
import Modal3 from "../../components/Portal/Modal";

const Download = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);
  const Toggle3 = () => setModal3(!modal3);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <section id="życiorys" className="sect">
      <div className="container download">
        <h2>
          Najwybitniejszy twórca polskiego Renesansu, wybitny poeta na skalę
          europejską.
        </h2>
        <p className="u-text-small u-text-light">
          Był synem Piotra Kochanowskiego, prawnika i sędziego sandomierskiego i
          Anny Białaczowskiej.
        </p>
        <IconContext.Provider value={{ size: "25" }}>
          <div className="download-icons">
            <div className="download-icon" onClick={() => Toggle()}>
              <GiGreekTemple />
              &nbsp;<p>Rodzina</p>
            </div>
            <Modal show={modal} close={Toggle} title="Rodzina">
              <p>
                Piotr miał na utrzymaniu nader liczną rodzinę: Jan posiadał
                jedenaścioro rodzeństwa. Dwaj bracia - Mikołaj i Andrzej - także
                parali się literaturą, choć daleko im było do talentu i sławy
                Jana. Andrzej pozostał w historii literatury głównie jako
                tłumacz Eneidy Wergiliusza, a Mikołaj - Moraliów Plutarcha.
              </p>
              <br />
              <p>
                <em>culture.pl/pl/tworca/jan-kochanowski</em>
              </p>
            </Modal>
            <div className="download-icon" onClick={() => Toggle1()}>
              <GiGraduateCap />
              &nbsp;<p>Lata&nbsp;nauki</p>
            </div>
            <Modal1 show={modal1} close={Toggle1} title="Nauka">
              <p>
                W 1544 roku Jan Kochanowski został przyjęty w poczet żaków na
                wydziale sztuk wyzwolonych Akademii Krakowskiej. Studia
                krakowskie kontynuował w Królewcu i Padwie.
              </p>
              <p>
                W Padwie Kochanowski przebywał trzykrotnie: w latach 1552-1555,
                1556-1557 i 1558-1559. Studiował pod kierunkiem wybitnych
                humanistów, m.in. takich jak Francesco Robortello i Bernardino
                Tomitano.
              </p>
              <p>
                Ostatni pobyt w Padwie zakończył podróżą przez Francję i Niemcy.
                W Paryżu spotkał się z Pierrem Ronsardem, najwybitniejszym poetą
                Renesansu francuskiego, propagatorem twórczości w języku
                rodzimym.
              </p>
              <br />
              <p>
                <em>culture.pl/pl/tworca/jan-kochanowski</em>
              </p>
            </Modal1>

            <div className="download-icon" onClick={() => Toggle2()}>
              <GiLitCandelabra />
              <p>Kariera&nbsp;dworska&nbsp;i&nbsp;kościelna</p>
            </div>
            <Modal2
              show={modal2}
              close={Toggle2}
              title="Kariera dworska i kościelna"
            >
              <p>
                Po powrocie do kraju w 1559 Kochanowski rozpoczął karierę
                dworzanina u wybitnych rodzin arystokratycznych: m.in.
                Tarnowskich, Tęczyńskich, Firlejów. W 1563 dzięki protekcji
                biskupa Piotra Myszkowskiego został dworzaninem i sekretarzem na
                dworze królewskim Zygmunta Augusta.
              </p>
              <p>
                Po śmierci Zygmunta Augusta był zwolennikiem Henryka Walezego, w
                którego koronacji uczestniczył w 1573 roku.
              </p>
              <p>
                Dzięki wstawiennictwu biskupa Piotra Myszkowskiego otrzymał
                probostwo w Poznaniu i Zwoleniu. Obowiązki duszpasterskie
                pełnili opłacani przez niego kapłani, a on sam czerpał zyski
                pobierając dziesięciny z gruntów miejskich i wsi szlacheckich.
              </p>
              <br />
              <p>
                <em>culture.pl/pl/tworca/jan-kochanowski</em>
              </p>
            </Modal2>
            <div className="download-icon" onClick={() => Toggle3()}>
              <GiFruitTree />
              &nbsp;<p>Czarnolas</p>
            </div>
            <Modal3 show={modal3} close={Toggle3} title="Pobyt w Czarnolesie">
              <p>
                Kochanowski osiadł w Czarnym Lesie, majątku po ojcu, w 1575 roku
                ożenił się z Dorotą Podlodowską. Miał z nią sześć córek, z
                których trzy zmarły w dzieciństwie.
              </p>
              <p>
                Już po śmierci poety Dorota urodziła syna. Okres czarnoleski,
                mimo tragedii, jaką była śmierć dzieci, był pełen harmonii i
                spokoju. Znalazło to odbicie w twórczości, najbogatszej i
                najdojrzalszej właśnie w tych latach.
              </p>
              <p>
                Zakończył życie nagle, w pełni sił twórczych, w wieku 54 lat.
                Zmarł na atak serca w Lublinie, dokąd przybył w nadziei na pomoc
                króla w niejasnej sprawie brata żony, który został zamordowany w
                Turcji. W Lublinie też odbyły się uroczystości pogrzebowe, w
                których uczestniczyli liczni dostojnicy świeccy i duchowni, w
                tym również król Stefan Batory. Pochowany został w kaplicy
                kościoła w Zwoleniu, obok rodziców, gdzie do dziś znajduje się
                nagrobek z jego podobizną.
              </p>
              <br />
              <p>
                <em>culture.pl/pl/tworca/jan-kochanowski</em>
              </p>
            </Modal3>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
