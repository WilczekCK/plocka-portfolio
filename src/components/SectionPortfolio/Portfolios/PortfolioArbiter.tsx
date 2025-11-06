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
          style={{width: '80%'}}
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
    </>
  );
};

export default PortfolioPrefa;
