import React, { useState } from "react";
import "./Header.scss";

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

  return (
    <header>
      <div className={"header--wrapper"}>
        <nav>
          <ul>
            {
                ['o-mnie', 'oferta', 'portfolio', 'kontakt', 'blog'].map((item) => (
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

        <a className={"btn btn-white"} href="tel:884935095">
          884 935 095
        </a>
      </div>
    </header>
  );
};

export default Header;
