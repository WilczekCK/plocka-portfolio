import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "../components/layout.scss"
import 'normalize.css';

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section";

import SectionAbout from "../components/SectionAbout/SectionAbout"
import SectionOffer from "../components/SectionOffer/SectionOffer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
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
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>Natalia Płocka - Portfolio</title>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Goldman:wght@400;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
      </style>
    </>
  )
} 
