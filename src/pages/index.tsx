import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "../components/layout.scss"
import 'normalize.css';

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <div class="main__wrapper">
          <Hero />
          
          <Section 
            heading={<><span>O mnie |</span> Z pasji do designu</>}
            subheading="O mnie"
            anchor="o-mnie"
            >
              Na co dzień pracuję jako grafik w agencji e-commerce, gdzie zajmuję się przygotowaniem banerów i materiałów promocyjnych dla różnych branż. 
              Dzięki temu wyczuwam potrzeby wizualne klienta i potrafię błyskawicznie tworzyć nowe koncepcje. 
              Równolegle rozwijam się w kierunku UX/UI, zrealizowałam już wiele projektów stron i aplikacji w Figmie, co potwierdzają liczne realizacje dostępne w moim portfolio.
              Mam również doświadczenie w pracy z WordPressem oraz w projektowaniu identyfikacji wizualnej, grafik do social mediów i materiałów DTP.  
              Brałam udział w hackathonach, co udoskonaliło moje umiejętności pracy w zespole, komunikacji z programistami i szybkiego działania.
              Projekty, które tworzę, są dopracowane wizualnie, ale też intuicyjne w użytkowaniu. Nie stoję w miejscu - stale inwestuję czas w naukę.

              <h1>XDDDD</h1>
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
