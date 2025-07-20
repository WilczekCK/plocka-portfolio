import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioProres = () => {
  return (
      <>
        Zaprojektowałam logo oraz nowoczesną i przejrzystą stronę internetową dla firmy konsultingowej Prores, specjalizującej się w doradztwie biznesowym.
        Projekt skupia się na czytelnej prezentacji usług i klarownej strukturze treści, ułatwiającej nawigację i szybki kontakt z klientem.
        
        <StaticImage
          src="../../../images/portfolio-prores.webp"
          alt="prefa laptop mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioProres;
