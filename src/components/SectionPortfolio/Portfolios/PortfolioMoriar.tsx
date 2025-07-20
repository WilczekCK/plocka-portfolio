import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioPrefa = () => {
  return (
      <>
        <p>Zaprojektowałam sklep internetowy dla Moriar Tables, specjalizującej się w produkcji stołów do gier planszowych, bitewnych i RPG.</p>
        <p>
          Strona oferuje intuicyjną nawigację z podziałem na kategorie: stoły, akcesoria, dodatki meblowe. 
          Zintegrowany konfigurator umożliwia klientom personalizację stołu według własnych preferencji. 
          Projekt skupia się na czytelnej prezentacji produktów, podkreślając ich funkcjonalność i estetykę.
        </p>

        <StaticImage
          src="../../../images/portfolio-moriar-1.webp"
          alt="moriar main image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        <StaticImage
          src="../../../images/portfolio-moriar-2.webp"
          alt="moriar mockup image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioPrefa;
