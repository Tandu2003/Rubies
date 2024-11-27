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
import ser_1 from "../../assets/img/ser_1.webp";
import ser_2 from "../../assets/img/ser_2.webp";
import ser_3 from "../../assets/img/ser_3.webp";
import ser_4 from "../../assets/img/ser_4.webp";

const Home = () => {
  const slides = [
    { id: 1, img: slider_1, link: "/thoi-trang-nu", alt: "slider_1" },
    { id: 2, img: slider_2, link: "/thoi-trang-nu", alt: "slider_2" },
    { id: 3, img: slider_3, link: "/thoi-trang-nu", alt: "slider_3" },
  ];

  const services = [
    {
      img: ser_1,
      alt: "Vận chuyển miễn phí",
      title: { text: "Vận chuyển", highlight: "MIỄN PHÍ" },
      description: { text: "Trong khu vực", highlight: "TP.HCM" },
    },
    {
      img: ser_2,
      alt: "Tích điểm Nâng hạng",
      title: { text: "Tích điểm Nâng hạng", highlight: null },
      description: { text: null, highlight: "THẺ THÀNH VIÊN" },
    },
    {
      img: ser_3,
      alt: "Thanh toán với nhiều phương thức",
      title: { text: "Tiến hành", highlight: "THANH TOÁN" },
      description: { text: "Với nhiều", highlight: "PHƯƠNG THỨC" },
    },
    {
      img: ser_4,
      alt: "100% hoàn tiền nếu sản phẩm lỗi",
      title: { text: null, highlight: "100% HOÀN TIỀN" },
      description: { text: "nếu sản phẩm lỗi", highlight: null },
    },
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

        <section className="service">
          <div className="container">
            <div className="box-service">
              {services.map((service, index) => (
                <div className="service-item" key={index}>
                  <div className="service-icon">
                    <img src={service.img} alt={service.alt} />
                  </div>
                  <div className="service-info">
                    <div className="service-title">
                      {service.title.text} <span>{service.title.highlight}</span>
                    </div>
                    <div className="service-description">
                      {service.description.text} <span>{service.description.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
