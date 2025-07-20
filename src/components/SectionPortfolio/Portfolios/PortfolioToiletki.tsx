import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioToiletki = () => {
  return (
      <>
        Zaprojektowałam stronę internetową z funkcją sklepu online dla firmy oferującej wynajem kabin sanitarnych, kontenerów i ogrodzeń.
        Serwis prezentuje ofertę w przejrzysty sposób, umożliwiając klientom łatwe zapoznanie się z produktami i usługami firmy.
        Strona została zaprojektowana z naciskiem na przejrzystość, intuicyjną nawigację i spójność wizualną.

        <StaticImage
          src="../../../images/portfolio-toiletki-1.webp"
          alt="toiletki laptop mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioToiletki;
