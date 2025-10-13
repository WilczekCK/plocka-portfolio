import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ScrollProvider } from "../context/ScrollContext";

import "../components/layout.scss"
import 'normalize.css';
import "@fontsource/goldman";         
import "@fontsource/goldman/700.css"; 

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section";

import SectionAbout from "../components/SectionAbout/SectionAbout"
import SectionOffer from "../components/SectionOffer/SectionOffer";
import SectionPortfolio from "../components/SectionPortfolio/SectionPortfolio";

import PortfolioPathPro from "../components/SectionPortfolio/Portfolios/PortfolioPathPro";
import PortfolioMarcysiak from "../components/SectionPortfolio/Portfolios/PortfolioMarcysiak";
import PortfolioPrefa from "../components/SectionPortfolio/Portfolios/PortfolioPrefa";
import PortfolioArbiter from "../components/SectionPortfolio/Portfolios/PortfolioArbiter";
import PortfolioMoriar from "../components/SectionPortfolio/Portfolios/PortfolioMoriar";
import PortfolioProres from "../components/SectionPortfolio/Portfolios/PortfolioProres";
import PortfolioToiletki from "../components/SectionPortfolio/Portfolios/PortfolioToiletki";
import PortfolioKikeco from "../components/SectionPortfolio/Portfolios/PortfolioKikeco";
import PortfolioHss from "../components/SectionPortfolio/Portfolios/PortfolioHss";
import PortfolioMobile from "../components/SectionPortfolio/Portfolios/PortfolioMobile";
import SectionContact from "../components/SectionContact/SectionContact";
import Footer from "../components/Footer/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ScrollProvider>
      <Header />
      <main>
        <div className="main__wrapper">
          <Hero />
          
          <Section 
            heading={<><span>O mnie |</span> Z pasji do designu</>}
            subheading="O mnie"
            anchor="o-mnie"
            >
              <SectionAbout />
          </Section>

          <Section 
            heading={<><span>Moja oferta |</span> Co mogę wykonać?</>}
            subheading="Oferta"
            anchor="oferta"
            >
              <SectionOffer />
          </Section>

          <Section 
            heading={<><span>Portfolio |</span> Design w praktyce</>}
            subheading="Portfolio"
            anchor="portfolio"
            >
              <div className="section__portfolio">
                <div className="section__portfolio__content" >
                  <SectionPortfolio
                    heading={<>PathPro</>}
                    subheading="identyfikacja wizualna firmy"
                    children={<PortfolioPathPro />}
                  />

                  <SectionPortfolio
                    heading={<>Paweł Marcysiak - Ekspert finansowy</>}
                    subheading="projekt strony + social media"
                    children={<PortfolioMarcysiak />}
                    link={"https://marcysiak.eu"}
                  />

                  <SectionPortfolio
                    heading={<>PrefaHolding - Prefabrykaty żelbetowe</>}
                    subheading="projekt strony + social media"
                    children={<PortfolioPrefa />}
                  />

                  <SectionPortfolio
                    heading={<>Arbiter Stylu - Kate Ryhter Kasińska</>}
                    subheading="projekt strony + logo"
                    children={<PortfolioArbiter />}
                    link={"https://arbiterstylu.pl/"}
                  />

                  <SectionPortfolio
                    heading={<>Moriar Tables - sklep ze stołami i akcesoriami do gier planszowych</>}
                    subheading="projekt strony"
                    children={<PortfolioMoriar />}
                    link={"https://moriartables.pl/"}
                  />

                  <SectionPortfolio
                    heading={<>Prores - Firma konsultingowa</>}
                    subheading="projekt strony + logo"
                    children={<PortfolioProres />}
                    link={"https://prores.biz/"}
                  />

                  <SectionPortfolio
                    heading={<>Toiletki</>}
                    subheading="projekt sklepu internetowego"
                    children={<PortfolioToiletki />}
                    link={"https://toiletki.pl/"}
                  />

                  <SectionPortfolio
                    heading={<>Kik Eco Lab</>}
                    subheading="projekt strony"
                    children={<PortfolioKikeco />}
                    link={"https://kikecolab.pl/"}
                  />

                  <SectionPortfolio
                    heading={<>HS Studio</>}
                    subheading="Projekt rozbudowanej strony internetowej dot. nieruchomości wraz ze sklepem internetowym"
                    children={<PortfolioHss />}
                    link={"https://www.hsstudiosek.pl/"}
                  />

                  <SectionPortfolio
                    heading={<>Projekty aplikacji mobilnych</>}
                    subheading="UI/UX dla aplikacji mobilnych – prognoza pogody i zamówienia online"
                    children={<PortfolioMobile />}
                    linkProto={"#"}
                    linkProto2={"#"}
                  />
                </div>
              </div>
          </Section>

          <Section 
            heading={<><span>Kontakt |</span> Zapraszam do współpracy</>}
            subheading="Kontakt"
            anchor="kontakt"
            >
              <SectionContact />
          </Section>
        </div>
      </main>

      <Footer />
    </ScrollProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>Natalia Płocka - Portfolio</title>
    </>
  )
} 
