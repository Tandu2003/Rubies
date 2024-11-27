import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./Home.scss";

// import img
import slider_1 from "../../assets/img/slider_1.webp";
import slider_2 from "../../assets/img/slider_2.webp";
import slider_3 from "../../assets/img/slider_3.webp";

const Home = () => {
  const slides = [
    { id: 1, img: slider_1, link: "/thoi-trang-nu", alt: "slider_1" },
    { id: 2, img: slider_2, link: "/thoi-trang-nu", alt: "slider_2" },
    { id: 3, img: slider_3, link: "/thoi-trang-nu", alt: "slider_3" },
  ];

  return (
    <>
      <main className="home">
        <section className="slider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={500}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link to={slide.link}>
                  <img src={slide.img} alt={slide.alt} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Home;
