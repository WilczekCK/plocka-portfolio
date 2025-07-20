import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioHss = () => {
  return (
      <>
        Rozbudowana strona internetowa z ofertami nieruchomości oraz zintegrowanym sklepem online z produktami cyfrowymi.
        Strona została zaprojektowana z naciskiem na przejrzystość, intuicyjną nawigację i spójność wizualną.
        
        <StaticImage
          src="../../../images/portfolio-hss-1.webp"
          alt="hss laptop mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        

        <StaticImage
          src="../../../images/portfolio-hss-2.webp"
          alt="hss mockups"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
    </>
  );
};

export default PortfolioHss;
