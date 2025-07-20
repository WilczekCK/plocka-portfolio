import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioMarcysiak = () => {
  return (
      <>
        Zaprojektowałam nowoczesną stronę - wizytówkę oraz zestaw grafik do mediów społecznościowych dla eksperta finansowego. 
        Całość utrzymana jest w czytelnej, profesjonalnej stylistyce, która buduje zaufanie i podkreśla eksperckość marki osobistej.
        <StaticImage
          src="../../../images/portfolio-marcysiak-1.webp"
          alt="marcysiak main image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        Strona została zaprojektowana z myślą o klarownej prezentacji oferty oraz łatwym kontakcie z klientem.
        Uzupełnieniem projektu jest spójna identyfikacja graficzna postów na Instagramie i Facebooku, tworzona z uwzględnieniem merytorycznego charakteru treści.
        <StaticImage
          src="../../../images/portfolio-marcysiak-2.webp"
          alt="marcysiak mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioMarcysiak;
