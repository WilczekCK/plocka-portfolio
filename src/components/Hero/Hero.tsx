import React, { useState } from "react";
import "./Hero.scss";
import HeroImage from '../../images/home-section-1.webp';

const Hero: React.FC<BodyProps> = () => {
  return (
    <div className={"hero__container"}>
      <div className={"hero__container__left"}>
        <span className={"hero__container__left--subheader"}>Cześć, jestem...</span>
        <h1 className={"hero__container__left--header"}>Natalia Płocka</h1>

        <div className={"hero__container__left--description"}>
          Z pasją tworzę unikalne <b>projekty graficzne</b>, łącząc kreatywność z doświadczeniem i estetycznym wyczuciem.
          Każdy projekt traktuję indywidualnie, dbając o najwyższą jakość i oryginalność wykonania dla każdego projektu.
        </div>

        <div className={"hero__container__left__actions"}>
          <a className={"btn btn--purple"}>
            ZOBACZ PORTFOLIO
          </a>

          <a className={"btn btn--gray"}>
            SKONTAKTUJ SIĘ ZE MNĄ
          </a>
        </div>
      </div>
      <div className={"hero__container__right"}>
        <img src={HeroImage} alt="Natalia Płocka" className={"hero__container__right--image"} />
      </div>
    </div>
  );
};

export default Hero;
