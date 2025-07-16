import React, { useState } from "react";
import "./Header.scss";
import HamburgerIcon from '../../assets/icons/hamburger.svg';

interface HeaderProps {
  highlighted?: "hero" | "o-mnie" | "oferta" | "portfolio" | "kontakt" | "blog";
  setHighlighted?: React.Dispatch<
    React.SetStateAction<
      "hero" | "o-mnie" | "oferta" | "portfolio" | "kontakt" | "blog"
    >
  >;
}

const Header: React.FC<HeaderProps> = () => {
  const [highlighted, setHighlighted] = useState<HeaderProps["highlighted"]>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className={`header--wrapper ${isMobileMenuOpen ? "header__hamburger--active" : ""}`}>
        <div className={`header__hamburger ${isMobileMenuOpen ? "header__hamburger--active" : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <HamburgerIcon />
        </div>

        <nav className={`header__menu ${isMobileMenuOpen ? "header__menu--active" : ""}`}>
          <ul>
            {
                ['o-mnie', 'oferta', 'portfolio', 'kontakt'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setHighlighted(item as HeaderProps["highlighted"])}
                      className={highlighted === item ? "active" : ""}
                    >
                      {
                        item.toUpperCase().replace(/-/g, " ")
                      }
                    </a>
                  </li>
                ))
            }
          </ul>
        </nav>

        <a className={"btn btn--white header--cta"} href="tel:884935095">
          884 935 095
        </a>
      </div>
    </header>
  );
};

export default Header;
