import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioKikeco = () => {
  return (
      <>
        Strona internetowa zaprojektowana dla firmy oferującej usługi w zakresie ochrony środowiska. 
        Projekt oparty został na rozbudowanej siatce ikon, przyjaznej kolorystyce i uporządkowanym układzie treści, który ułatwia szybkie zapoznanie się z ofertą.
        
        <StaticImage
          src="../../../images/portfolio-kikeco-1.webp"
          alt="kikeco laptop mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />

        <StaticImage
          src="../../../images/portfolio-kikeco-2.webp"
          alt="kikeco mockups"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioKikeco;
