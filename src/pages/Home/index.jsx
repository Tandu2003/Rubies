import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "./Home.scss";

// import img
import slider_1 from "../../assets/img/slider_1.webp";
import slider_2 from "../../assets/img/slider_2.webp";
import slider_3 from "../../assets/img/slider_3.webp";
import ser_1 from "../../assets/img/ser_1.webp";
import ser_2 from "../../assets/img/ser_2.webp";
import ser_3 from "../../assets/img/ser_3.webp";
import ser_4 from "../../assets/img/ser_4.webp";
import ao_khoac_nu from "../../assets/img/ao_khoac_nu.webp";
import ao_so_mi_nu from "../../assets/img/ao_so_mi_nu.webp";
import ao_kieu_nu from "../../assets/img/ao_kieu_nu.webp";
import vay from "../../assets/img/vay.webp";
import quan_dai_nu from "../../assets/img/quan_dai_nu.webp";
import quan_ngan_nu from "../../assets/img/quan_ngan_nu.webp";
import quan_jeans_nu from "../../assets/img/quan_jeans_nu.webp";
import dam from "../../assets/img/dam.webp";

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

  const categories = [
    { img: ao_khoac_nu, title: "Áo khoác nữ", link: "/ao-khoac-nu", count: 10 },
    { img: ao_so_mi_nu, title: "Áo sơ mi nữ", link: "/ao-so-mi-nu", count: 8 },
    { img: ao_kieu_nu, title: "Áo kiểu nữ", link: "/ao-kieu-nu", count: 12 },
    { img: vay, title: "Váy", link: "/vay", count: 15 },
    { img: quan_dai_nu, title: "Quần dài nữ", link: "/quan-dai-nu", count: 7 },
    { img: quan_ngan_nu, title: "Quần ngắn nữ", link: "/quan-ngan-nu", count: 5 },
    { img: quan_jeans_nu, title: "Quần jeans nữ", link: "/quan-jeans-nu", count: 9 },
    { img: dam, title: "Đầm", link: "/dam", count: 11 },
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

        <section className="category">
          <div className="container">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              loop={false}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {categories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="category-item">
                    <div className="category-box-item">
                      <div className="category-box-item-img">
                        <Link to={category.link} title={category.title}>
                          <div className="img_cus">
                            <img src={category.img} alt={category.title} />
                          </div>
                        </Link>
                      </div>
                      <div className="category-box-item-title">
                        <h3 className="title_title">
                          <Link to={category.link}>{category.title}</Link>
                          <span className="count_sp">{category.count}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
