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
        Na co dzień pracuję jako grafik w agencji e-commerce, gdzie zajmuję się
        przygotowaniem banerów i materiałów promocyjnych dla różnych branż.
        Dzięki temu <b>wyczuwam potrzeby wizualne klienta i potrafię błyskawicznie
        tworzyć nowe koncepcje.</b> Równolegle rozwijam się w kierunku UX/UI,
        zrealizowałam już wiele projektów stron i aplikacji w Figmie, co
        potwierdzają liczne realizacje dostępne w moim portfolio.
      </p>

      <p>
        Mam również doświadczenie w pracy z WordPressem oraz w projektowaniu identyfikacji
        wizualnej, grafik do social mediów i materiałów DTP. Brałam udział w
        hackathonach, co udoskonaliło moje umiejętności pracy w zespole,
        komunikacji z programistami i szybkiego działania. Projekty, które
        tworzę, są dopracowane wizualnie, ale też intuicyjne w użytkowaniu. Nie
        stoję w miejscu - stale inwestuję czas w naukę.
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
        Każdy projekt traktuję jako nową szansę na rozwój i eksperyment.
        Interesuję się psychologią oraz designem skupionym na użytkowniku - to
        pozwala mi tworzyć interfejsy, które nie tylko wyglądają dobrze, ale też
        odpowiadają na realne potrzeby odbiorcy. Umiem pracować pod presją czasu
        i odnajduję się tam, gdzie potrzeba szybkich, kreatywnych decyzji. W
        wolnych chwilach szkicuję i zgłębiam tematy związane z psychologią i
        typologią osobowości (MBTI). To pomaga mi lepiej rozumieć potrzeby
        użytkowników i tworzyć projekty z większą empatią.
      </p>
    </>
  );
};

export default SectionAbout;
