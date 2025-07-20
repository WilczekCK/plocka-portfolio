import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioPrefa = () => {
  return (
      <>
        Zaprojektowałam stronę internetową oraz zestaw grafik do mediów społecznościowych dla firmy z branży prefabrykatów żelbetowych.
        Całość utrzymana jest w technicznej, przejrzystej stylistyce, z naciskiem na czytelną prezentację oferty i profesjonalny wizerunek marki.
        <StaticImage
          src="../../../images/portfolio-prefa-1.webp"
          alt="prefa main image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        <StaticImage
          src="../../../images/portfolio-prefa-2.webp"
          alt="prefa mockup image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioPrefa;
