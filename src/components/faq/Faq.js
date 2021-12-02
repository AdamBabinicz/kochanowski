import React, { useState } from "react";
import "./Faq.css";
import { GiLockedChest } from "react-icons/gi";
import { questions } from "./data";
import Question from "./Question";

const Faq = () => {
  return (
    <section id="ciekawostki">
      <div className="container faq">
        <div className="u-title">
          <GiLockedChest />
          <h2>Ciekawostki</h2>
          <p className="u-text-small u-text-dark">o Janie Kochanowskim</p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
