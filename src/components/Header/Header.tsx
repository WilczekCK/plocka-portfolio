import React, { useState, useEffect, useContext } from "react";
import "./Header.scss";
import HamburgerIcon from '../../assets/icons/hamburger.svg';
import useScrollHook from "../../hooks/useScrollHook";
import { ScrollContext } from "../../context/ScrollContext";


interface HeaderProps {
  highlighted?: "hero" | "o-mnie" | "oferta" | "portfolio" | "kontakt" | "blog";
  setHighlighted?: React.Dispatch<
    React.SetStateAction<
      "hero" | "o-mnie" | "oferta" | "portfolio" | "kontakt" | "blog"
    >
  >;
}

const Header = () => {
  if (typeof window === "undefined") return null; 
  const {highlighted, scrollFunction, setHighlighted} = useContext(ScrollContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`${highlighted != 'hero' ? "header--sticky" : ""}`}>
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
                      className={highlighted === item ? "active" : ""}
                      href={`#${item}`}
                      onClick={(e) => {
                        scrollFunction(item);
                        setHighlighted(item);
                      } }
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
