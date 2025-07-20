import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioPrefa = () => {
  return (
      <>
        <StaticImage
          src="../../../images/portfolio-arbiter-1.webp"
          alt="arbiter stylu main image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />

        Stworzyłam eleganckie logo oraz estetyczną, przejrzystą stronę internetową, której design oddaje charakter marki i podkreśla jej wyrafinowany styl.

        <StaticImage
          src="../../../images/portfolio-arbiter-2.webp"
          alt="arbiter laptop mockups"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />

        <StaticImage
          src="../../../images/portfolio-arbiter-3.webp"
          alt="arbiter mockups"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />

        <p>Zaprojektowałam sklep internetowy dla Moriar Tables, specjalizującej się w produkcji stołów do gier planszowych, bitewnych i RPG. </p>
        
        <p>
          Strona oferuje intuicyjną nawigację z podziałem na kategorie: stoły, akcesoria, dodatki meblowe. 
          Zintegrowany konfigurator umożliwia klientom personalizację stołu według własnych preferencji.
          Projekt skupia się na czytelnej prezentacji produktów, podkreślając ich funkcjonalność i estetykę
        </p>
    </>
  );
};

export default PortfolioPrefa;
