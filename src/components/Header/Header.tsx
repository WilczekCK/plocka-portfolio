import React, { useState, useEffect } from "react";
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

const Header = () => {
  if (typeof window === "undefined") return null; 

  const [highlighted, setHighlighted] = useState<HeaderProps["highlighted"]>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.find((e) => e.isIntersecting);
        if (vis) {
          setHighlighted(vis.target.id);
        } else {
          setHighlighted("hero");
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
   
    ["hero", "o-mnie", "oferta", "portfolio","kontakt","blog"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

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
                        e.preventDefault();
                        setHighlighted(item as HeaderProps["highlighted"])

                        const el = document.getElementById(item);
                        if (!el) return;

                        const y = el.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        history.replaceState(null, "", `#${item}`);
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
