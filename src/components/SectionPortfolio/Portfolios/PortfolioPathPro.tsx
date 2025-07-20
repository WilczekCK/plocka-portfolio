"use client";

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const PortfolioPathPro = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: sectionRef,});
  let height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  height = useSpring(height, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <div className="section__portfolio__content__project">
      <div className="section__portfolio__content__project__name">PathPro</div>

      <div className="section__portfolio__scroll" ref={sectionRef}>
        <motion.div 
            className={`section__portfolio__scroll--dot`}
            style={{
            top: height,
            }}
            >
        </motion.div>

        <motion.div
          className="section__portfolio__scroll--highlight"
          style={{
            height,
          }}
        ></motion.div>
      </div>

      <div className="section__portfolio__content__project__description">
        Kompleksowy projekt identyfikacji wizualnej dla marki specjalizującej
        się w doradztwie zawodowym. Stworzyłam spójny system graficzny
        obejmujący logo, materiały do social mediów, broszurę informacyjną oraz
        slajdy prezentacyjne.
        <StaticImage
          src="../../../images/portfolio-pathpro-1.webp"
          alt="pathpro main image"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        <StaticImage
          src="../../../images/portfolio-pathpro-2.webp"
          alt="pathpro main image variable"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        Motyw przewodni - gwiazda-kompas - symbolizuje kierunek, rozwój i
        nowoczesne podejście do planowania kariery. Całość została
        zaprojektowana z naciskiem na profesjonalizm, zaufanie i przejrzystość
        wizualną. Projekt realizowany od podstaw - od koncepcji po finalne
        makiety materiałów marketingowych.
        <StaticImage
          src="../../../images/portfolio-pathpro-3.webp"
          alt="pathpro mobile mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        <StaticImage
          src="../../../images/portfolio-pathpro-4.webp"
          alt="pathpro banners"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        <StaticImage
          src="../../../images/portfolio-pathpro-5.webp"
          alt="pathpro magazine mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
        <StaticImage
          src="../../../images/portfolio-pathpro-6.webp"
          alt="pathpro card mockup"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
    </div>
  );
};

export default PortfolioPathPro;
