import * as React from "react";
import "./SectionOffer.scss";

import { StaticImage } from "gatsby-plugin-image";
import { useSpring, animated } from "@react-spring/web";

import AppsIcon from '../../assets/icons/apps.svg';
import DtpIcon from '../../assets/icons/dtp.svg';
import IdentificationIcon from '../../assets/icons/identification.svg';
import MarketingIcon from '../../assets/icons/marketing.svg';
import SocialIcon from '../../assets/icons/social.svg';
import UiIcon from '../../assets/icons/ui.svg';
import PhoneIcon from '../../assets/icons/phone-2.svg';

const useMediaQuery = () => {
  const [desktopMedium, setDesktopMedium] = React.useState(window.matchMedia("(min-width: 768px)").matches);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      setDesktopMedium(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { desktopMedium };
};

const PanelItem = ({ panel, isSelected, onMouseEnter, desktopMedium, isCta }) => {
  const startWidth = desktopMedium ? 97 : 100;
  const endWidth = desktopMedium ? 563 : 575; 

  const props = useSpring({
    width: isSelected ? endWidth : startWidth,
    config: { mass: 5, friction: 120, tension: 600 },
  });

  const contentProps = useSpring({
    opacity: isSelected ? 1 : 0,
    config: { duration: 600 },
  });

  return (
    <animated.div
      className={`panel ${isSelected ? "panel-expanded" : "panel-collapsed"} ${isCta ? "panel-cta" : ""}`}
      style={props}
      onMouseEnter={onMouseEnter}
    >
      <div className={`panel-shine ${isSelected ? "shine-visible" : "shine-hidden"}`}></div>

      <div className={`panel-title-container ${isSelected ? "title-expanded" : "title-collapsed"}`}>
        <span>{panel.title}</span>
        <div className="panel-icon-wrapper">{panel.icon}</div>
      </div>

      <animated.div className="panel-expanded-content" style={contentProps}>
        <div className="panel-inner">
          <div className="panel-header">

          </div>

          <p className="panel-description">
            {panel.image}

            <p>{panel.description}</p>
          </p>
        </div>
      </animated.div>
    </animated.div>
  );
};

const SectionOffer = () => {
  const [expandedPanel, setExpandedPanel] = React.useState(0);
  const { desktopMedium } = useMediaQuery();

  const panels = [
    {
      id: 0,
      title: "Projektowanie stron (UI)",
      description: "Nowoczesne layouty stron internetowych, estetyczne i funkcjonalne. Dopasowane pod potrzeby użytkownika i marki.",
      icon: <UiIcon />,
      image:   <StaticImage
        src="../../images/offer-image-1.webp"
        alt="offer image ui"
        loading="lazy"
        placeholder="blurred"
        layout="constrained"
      />
    },
    {
      id: 1,
      title: "Identyfikacja wizualna",
      description: "Logo, kolory, typografia - zaprojektuję spójny wizerunek marki, dopasowany do jej charakteru i odbiorców.",
      icon: <IdentificationIcon />,
      image:   <StaticImage
        src="../../images/offer-image-2.webp"
        alt="offer image visual identification"
        loading="lazy"
        placeholder="blurred"
        layout="constrained"
      />
    },
    {
      id: 2,
      title: "Materiały marketingowe",
      description: "Banery, ulotki, projekty reklamowe do internetu i druku. Tworzę czytelne i skuteczne materiały promocyjne.",
      icon: <MarketingIcon />,
      image:   <StaticImage
        src="../../images/offer-image-3.webp"
        alt="offer image marketing materials"
        loading="lazy"
        placeholder="blurred"
        layout="constrained"
      />
    },
    {
      id: 3,
      title: "Grafika do Social Media",
      description: "Estetyczne grafiki do social mediów - atrakcyjne wizualnie i dopasowane do odbiorcy.",
      icon: <SocialIcon />,
      image:   <StaticImage
        src="../../images/offer-image-4.webp"
        alt="offer image social media"
        loading="lazy"
        placeholder="blurred"
        layout="constrained"
      />
    },
    {
      id: 4,
      title: "Projekty DTP pod druk",
      description: "Ulotki, wizytówki, katalogi, plakaty - przygotowane zgodnie z zasadami druku i dbałością o każdy szczegół.",
      icon: <DtpIcon />,
      image:   <StaticImage
        src="../../images/offer-image-5.webp"
        alt="offer image dtp"
        loading="lazy"
        placeholder="blurred"
        layout="constrained"
      />
    },
    {
      id: 5,
      title: "Interfejsy aplikacji",
      description: "Intuicyjne i nowoczesne interfejsy - od koncepcji po gotowy projekt w Figmie, z myślą o użytkownikach.",
      icon: <AppsIcon />,
      image:   <StaticImage
        src="../../images/offer-image-6.webp"
        alt="offer image ui/ux"
        loading="lazy"
        placeholder="blurred"
        layout="constrained"
      />
    },
    {
      id: 6,
      title: "Skontaktuj się ze mną!",
      gradientClass: "gradient-blue",
      icon: <PhoneIcon />,
      cta: true,
    },
  ];

  const handleMouseEnter = (id) => {
    if (id == 6) return;
    setExpandedPanel(id);
  };

  return (
    <div className="dashboard-container">
      <div className="panels-container">
        {panels.map((panel) => (
          <PanelItem
            key={panel.id}
            panel={panel}
            isSelected={expandedPanel === panel.id}
            onMouseEnter={() => handleMouseEnter(panel.id)}
            desktopMedium={desktopMedium}
            isCta={panel.cta}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionOffer;
