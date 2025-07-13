import React from 'react';
import './Header.scss';

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <div className={"header--wrapper"}>
               <nav>
                    <ul>
                        <li>
                            <a href="#o-mnie">O Mnie</a>
                        </li>
                        
                        <li>
                            <a href="#oferta">Oferta</a>
                        </li>
                        
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        
                        <li>
                            <a href="#kontakt">Kontakt</a>
                        </li>
                        
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                    </ul>
                </nav>

                <a href="tel:884935095">
                    884 935 095
                </a>
            </div>
        </header>
    )   
}

export default Header;