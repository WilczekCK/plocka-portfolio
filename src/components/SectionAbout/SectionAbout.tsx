import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { StaticImage } from "gatsby-plugin-image";

import "./SectionAbout.scss";
import "swiper/css";
import "swiper/css/navigation";

const SectionAbout = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  return (
    <>
      <p>
        Pracuję, jako grafik w agencji e-commerce, gdzie zajmuje się przygotowywaniem materiałów reklamowych dla różnych branż. 
        Praca w tak dynamicznym środowisku nauczyła mnie wyczucia potrzeb różnych klientów i szybkiego tworzenia nowych koncepcji.
      </p>

      <p>
        Kilkuletnie doświadczenie w pracy grafika nauczyło mnie, że bez dobrego UX i UI nie ma dobrego projektu. 
        Kolory, dobrze dobrane fonty i funkcjonalność muszą iść w parze, dobra strona czy aplikacja to nie tylko estetyka, ale też intuicyjność i wygoda.</p>

      <p>
        Mogę stworzyć dla Ciebie zarówno materiały do druku, jak i projekty cyfrowe.
        Jeżeli potrzebujesz logo, wizytówki, grafik do social mediów, banerów reklamowych na stronę WWW czy projektu całej witryny, skontaktuj się ze mną. 
        Razem stworzymy unikalną identyfikację wizualną dla Twojej firmy. 
        Poza grafiką mam doświadczenie również z WordPressem, dzięki braniu udziału w hackathonach udoskonaliłam swoje umiejętności komunikacji z programistami, pracy w zespole i działania pod presją czasu — możesz to wykorzystać.
      </p>

      <div className={"certificates__container"}>
        <div className="certificates__container__swiper__btn" ref={prevRef}>
          &#8592;
        </div>

        <div className="certificates__container__swiper__btn" ref={nextRef}>
          &#8594;
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          style={{ width: "90%", height: "auto" }}
        >
          <SwiperSlide>
            <StaticImage
              src="../../images/about-image-1.webp"
              alt="certificate one"
              loading="lazy"
              placeholder="blurred"
              layout="constrained"
            />
          </SwiperSlide>

          <SwiperSlide>
            <StaticImage
              src="../../images/about-image-2.webp"
              alt="certificate one"
              loading="lazy"
              placeholder="blurred"
              layout="constrained"
            />
          </SwiperSlide>

          <SwiperSlide>
            <StaticImage
              src="../../images/about-image-3.webp"
              alt="certificate one"
              loading="lazy"
              placeholder="blurred"
              layout="constrained"
            />
          </SwiperSlide>

          <SwiperSlide>
            <StaticImage
              src="../../images/about-image-1.webp"
              alt="certificate one"
              loading="lazy"
              placeholder="blurred"
              layout="constrained"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <p>
        Każdy projekt to nowa lekcja i szansa rozwoju. 
        Interesuję się projektowaniem, które skupia się na użytkowniku — w końcu to on będzie z niego korzystał. 
        Dlatego interfejs musi być tak samo estetyczny, jak prosty i wygodny w użyciu. 
        W wolnych chwilach szkicuję i zgłębiam tematy związane z psychologią i typologią osobowości (MBTI).
        To pomaga mi lepiej rozumieć potrzeby użytkowników i tworzyć projekty z większą empatią. 
      </p>
    </>
  );
};

export default SectionAbout;
