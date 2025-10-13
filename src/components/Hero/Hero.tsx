import React, { useState, useContext } from "react";
import { ScrollContext } from "../../context/ScrollContext";
import "./Hero.scss";
import { StaticImage } from "gatsby-plugin-image";

const Hero: React.FC<BodyProps> = () => {
  const {highlighted, scrollFunction, setHighlighted} = useContext(ScrollContext);

  return (
    <div className={"hero__container"}>
      <div className={"hero__container__left"}>
        <span className={"hero__container__left--subheader"}>Cześć, jestem...</span>
        <h1 className={"hero__container__left--header"}>Natalia Płocka</h1>

        <div className={"hero__container__left--description"}>
          Tworzę projekty graficzne, dbając o każdy szczegół i wysoką jakość wykonania.
          W mojej pracy łączę kreatywność, wyczucie estetyki i doświadczenie, co pozwala mi tworzyć oryginalne koncepcje dla firm z różnych branż.
        </div>

        <div className={"hero__container__left__actions"}>
          <a className={"btn btn--purple"} onClick={() => [setHighlighted('portfolio'), scrollFunction('portfolio')]}>
            ZOBACZ PORTFOLIO
          </a>

          <a className={"btn btn--gray"} onClick={() => [setHighlighted('kontakt'), scrollFunction('kontakt')]}>
            SKONTAKTUJ SIĘ ZE MNĄ
          </a>
        </div>
      </div>
      <div className={"hero__container__right"}>
        <StaticImage
          src="../../images/home-section-1.webp"
          alt="Hero image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
    </div>
  );
};

export default Hero;
