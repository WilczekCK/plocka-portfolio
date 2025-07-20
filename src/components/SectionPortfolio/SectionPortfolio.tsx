import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { motion, useScroll, useTransform } from "motion/react"

import "./SectionPortfolio.scss";
import PortfolioPathPro from "./Portfolios/PortfolioPathPro";

const SectionPortfolio = () => {
  return (
    <div className="section__portfolio">
      <div className="section__portfolio__content" >
        <PortfolioPathPro />
        <PortfolioPathPro />
        <PortfolioPathPro />
        <PortfolioPathPro />
      </div>
    </div>
  );
};

export default SectionPortfolio;
