import React, { useState } from "react";
import "./Hero.scss";
import { StaticImage } from "gatsby-plugin-image";

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
        <StaticImage
          src="../../images/home-section-1.webp"
          alt="Hero section"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
    </div>
  );
};

export default Hero;
