import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioMobile = () => {
  return (
      <>
        <b>Projekt 1 - aplikacja pogodowa</b>

        Prosty i estetyczny interfejs aplikacji pogodowej z trybem dziennym, popołudniowym i nocnym. 
        Zaprojektowany z myślą o czytelnej prezentacji podstawowych informacji pogodowych w przejrzystej, mobilnej formie.
        Prototyp gotowy do przeklikania.
        
        <StaticImage
          src="../../../images/portfolio-self-1.webp"
          alt="mobile app mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />

        <b>Projekt 2 - aplikacja do zamawiania jedzenia</b>

        Interaktywny prototyp aplikacji do zamawiania jedzenia z wykorzystaniem variables i conditional logic.
        W zależności od wybranych dań i dodatków, użytkownik widzi dynamicznie aktualizowaną cenę.
        Możliwy pełny przegląd procesu - od wyboru po ekran podziękowania.

        <StaticImage
          src="../../../images/portfolio-self-2.webp"
          alt="mobile app 2 mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioMobile;
