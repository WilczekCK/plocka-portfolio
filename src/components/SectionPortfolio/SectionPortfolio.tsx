import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

import "./SectionPortfolio.scss";

const SectionPortfolio = ({heading, children}) => {
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
      <div className="section__portfolio__content__project__name">{heading}</div>

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
          {children}
      </div>
    </div>
  );
};

export default SectionPortfolio;
