import * as React from "react";
import "./SectionOffer.scss";

import { StaticImage } from "gatsby-plugin-image";
import { useSpring, animated } from "@react-spring/web";

import AppsIcon from "../../assets/icons/apps.svg";
import DtpIcon from "../../assets/icons/dtp.svg";
import IdentificationIcon from "../../assets/icons/identification.svg";
import MarketingIcon from "../../assets/icons/marketing.svg";
import SocialIcon from "../../assets/icons/social.svg";
import UiIcon from "../../assets/icons/ui.svg";
import PhoneIcon from "../../assets/icons/phone-2.svg";

type Bp = {
  desktopMedium: boolean;
};

type Panel = {
  id: number;
  title: string;
  description?: string;
  icon: React.ReactNode;
  image?: React.ReactNode;
  cta?: boolean;
  gradientClass?: string;
};

const DESKTOP_MEDIUM = "(min-width: 768px)";

const useMediaQuery = (): Bp => {
  const getInitial = () =>
    typeof window !== "undefined"
      ? window.matchMedia(DESKTOP_MEDIUM).matches
      : false;

  const [desktopMedium, setDesktopMedium] = React.useState<boolean>(getInitial);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(DESKTOP_MEDIUM);
    const handleChange = (e: MediaQueryListEvent) => {
      setDesktopMedium(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      (mediaQuery as any).addListener(handleChange);
    }

    setDesktopMedium(mediaQuery.matches);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        (mediaQuery as any).removeListener(handleChange);
      }
    };
  }, []);

  return { desktopMedium };
};

type PanelItemProps = {
  panel: Panel;
  isSelected: boolean;
  onMouseEnter: () => void;
  desktopMedium: boolean;
  isCta?: boolean;
};

const PanelItem: React.FC<PanelItemProps> = ({
  panel,
  isSelected,
  onMouseEnter,
  desktopMedium,
  isCta,
}) => {
  const startWidth = desktopMedium ? 97 : 100;
  const endWidth = desktopMedium ? 563 : 575;

  const widthSpring = useSpring({
    width: isSelected ? endWidth : startWidth,
    config: { mass: 5, friction: 120, tension: 600 },
  });

  const contentSpring = useSpring({
    opacity: isSelected ? 1 : 0,
    config: { duration: 600 },
  });

  return (
    <animated.div
      className={`panel ${isSelected ? "panel-expanded" : "panel-collapsed"} ${
        isCta ? "panel-cta" : ""
      } ${panel.gradientClass ?? ""}`}
      style={{ width: widthSpring.width.to((w) => `${w}px`) }}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={`panel-shine ${isSelected ? "shine-visible" : "shine-hidden"}`}
      ></div>

      <div
        className={`panel-title-container ${
          isSelected ? "title-expanded" : "title-collapsed"
        }`}
      >
        <span>{panel.title}</span>
        <div className="panel-icon-wrapper">{panel.icon}</div>
      </div>

      {!panel.cta && (
        <animated.div className="panel-expanded-content" style={contentSpring}>
          <div className="panel-inner">
            <div className="panel-header"></div>

            <p className="panel-description">
              {panel.image}
              <p>{panel.description}</p>
            </p>
          </div>
        </animated.div>
      )}
    </animated.div>
  );
};

const SectionOffer: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = React.useState<number>(0);
  const { desktopMedium } = useMediaQuery();

  const panels: Panel[] = [
    {
      id: 0,
      title: "Projektowanie stron (UI)",
      description: "Estetyczne i funkcjonalne layouty stron internetowych, które łączą potrzeby marki i wygodę użytkowników.",
      icon: <UiIcon />,
      image: (
        <StaticImage
          src="../../images/offer-image-1.webp"
          alt="offer image ui"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      ),
    },
    {
      id: 1,
      title: "Identyfikacja wizualna",
      description: "Kolory firmowe, logo, typografię — zaprojektuję spójny wizerunek marki, dopasowany do jej specyfiki.",
      icon: <IdentificationIcon />,
      image: (
        <StaticImage
          src="../../images/offer-image-2.webp"
          alt="offer image visual identification"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      ),
    },
    {
      id: 2,
      title: "Materiały marketingowe",
      description: "Materiały reklamowe do druku oraz do Internetu — tworzę czytelne projekty, które pracują na sukces firmy.",
      icon: <MarketingIcon />,
      image: (
        <StaticImage
          src="../../images/offer-image-3.webp"
          alt="offer image marketing materials"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      ),
    },
    {
      id: 3,
      title: "Grafika do Social Media",
      description: "Atrakcyjne grafiki do mediów społecznościowych dopasowane do odbiorców i zgodne z wymaganiami różnych serwisów.",
      icon: <SocialIcon />,
      image: (
        <StaticImage
          src="../../images/offer-image-4.webp"
          alt="offer image social media"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      ),
    },
    {
      id: 4,
      title: "Projekty DTP pod druk",
      description: "Ulotki, wizytówki, plakaty reklamowe i wiele więcej zaprojektuje dla Ciebie dopracowane materiały zgodne z zasadami druku.",
      icon: <DtpIcon />,
      image: (
        <StaticImage
          src="../../images/offer-image-5.webp"
          alt="offer image dtp"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      ),
    },
    {
      id: 5,
      title: "Interfejsy aplikacji",
      description: "Nowoczesne i intuicyjne interfejsy — przygotuje dla Ciebie wszystko od koncepcji po gotowy projekt w Figmie.",
      icon: <AppsIcon />,
      image: (
        <StaticImage
          src="../../images/offer-image-6.webp"
          alt="offer image ui/ux"
          loading="lazy"
          placeholder="blurred"
          layout="constrained"
        />
      ),
    },
    {
      id: 6,
      title: "Skontaktuj się ze mną!",
      gradientClass: "gradient-blue",
      icon: <PhoneIcon />,
      cta: true,
    },
  ];

  const handleMouseEnter = (id: number) => {
    if (id === 6) return;
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
