import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "./Home.scss";

import ItemProduct from "../../components/Item-product";

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
import Ao_det_kim_Sarah_Top_rr24dk24 from "../../assets/img/Ao_det_kim_Sarah_Top_rr24dk24.webp";
import Ao_kieu_nu_Lanna_Top_rr24ak60 from "../../assets/img/Ao_kieu_nu_Lanna_Top_rr24ak60.webp";
import Ao_det_kim_Lina_Polo_rr24dk23 from "../../assets/img/Ao_det_kim_Lina_Polo_rr24dk23.webp";
import Ao_nu_det_kim_Dessy_Polo_r24dk09 from "../../assets/img/Ao_nu_det_kim_Dessy_Polo_r24dk09.webp";
import Ao_nu_det_kim_Sassy_Polo_rr24dk07 from "../../assets/img/Ao_nu_det_kim_Sassy_Polo_rr24dk07.webp";
import Ao_nu_det_kim_Ivy_Polo_rr24dk06 from "../../assets/img/Ao_nu_det_kim_Ivy_Polo_rr24dk06.webp";
import Ao_nu_det_kim_Jade_Polo_rr24dk05 from "../../assets/img/Ao_nu_det_kim_Jade_Polo_rr24dk05.webp";
import img_banner_tab from "../../assets/img/img_banner_tab.webp";
import icon_1_allpro from "../../assets/img/icon_1_allpro.webp";
import icon_2_allpro from "../../assets/img/icon_2_allpro.webp";
import bg_banner_big from "../../assets/img/bg_banner_big.webp";

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

  const products_feature = [
    {
      id: 1,
      img: Ao_det_kim_Sarah_Top_rr24dk24,
      name: "Áo dệt kim Sarah Top RR24DK24",
      price: 250000,
      alias: "ao-det-kim-sarah-top-rr24dk24",
    },
    {
      id: 2,
      img: Ao_kieu_nu_Lanna_Top_rr24ak60,
      name: "Áo kiểu nữ Lanna Top RR24AK60",
      price: 350000,
      alias: "ao-kieu-nu-lanna-top-rr24ak60",
    },
    {
      id: 3,
      img: Ao_det_kim_Lina_Polo_rr24dk23,
      name: "Áo dệt kim Lina Polo RR24DK23",
      price: 450000,
      alias: "ao-det-kim-lina-polo-rr24dk23",
    },
    {
      id: 4,
      img: Ao_nu_det_kim_Dessy_Polo_r24dk09,
      name: "Áo nữ dệt kim Dessy Polo R24DK09",
      price: 550000,
      alias: "ao-nu-det-kim-dessy-polo-r24dk09",
    },
    {
      id: 5,
      img: Ao_nu_det_kim_Sassy_Polo_rr24dk07,
      name: "Áo nữ dệt kim Sassy Polo RR24DK07",
      price: 650000,
      alias: "ao-nu-det-kim-sassy-polo-rr24dk07",
    },
    {
      id: 6,
      img: Ao_nu_det_kim_Ivy_Polo_rr24dk06,
      name: "Áo nữ dệt kim Ivy Polo RR24DK06",
      price: 750000,
      alias: "ao-nu-det-kim-ivy-polo-rr24dk06",
    },
    {
      id: 7,
      img: Ao_nu_det_kim_Jade_Polo_rr24dk05,
      name: "Áo nữ dệt kim Jade Polo RR24DK05",
      price: 850000,
      alias: "ao-nu-det-kim-jade-polo-rr24dk05",
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

        <section className="product-feature">
          <div className="container">
            <div className="product-feature-title">
              <h2>
                <Link to="/best-seller" title="Sản phẩm bán chạy">
                  <span>Sản Phẩm Bán Chạy</span>
                </Link>
              </h2>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              loop={false}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {products_feature.map((product, index) => (
                <SwiperSlide key={index}>
                  <ItemProduct product={product} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="all-product">
          <div className="container">
            <div className="all-product-box">
              <div className="all-product-title">
                <h2>
                  <Link to="/thoi-trang-nu" title="Sản Phẩm Mới">
                    <span>Sản Phẩm Mới</span>
                  </Link>
                </h2>
              </div>
              <div className="all-product-content">
                <div className="all-product-left">
                  <Link to="/thoi-trang-nu" title="Banner">
                    <img src={img_banner_tab} alt="banner" />
                  </Link>
                </div>
                <div className="all-product-right">
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    loop={false}
                    breakpoints={{
                      0: { slidesPerView: 1.5 },
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 4 },
                    }}
                  >
                    {products_feature.map((product, index) => (
                      <SwiperSlide key={index}>
                        <ItemProduct product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="content-collection">
                    <div className="collection-item">
                      <div className="img_icon current">
                        <img src={icon_1_allpro} alt="icon_1_allpro" />
                      </div>
                      <p className="collection_description">
                        {" Rubies Rubies "}
                        <span>389 sản phẩm</span>
                      </p>
                    </div>

                    <div className="collection-item">
                      <div className="img_icon">
                        <img src={icon_2_allpro} alt="icon_1_allpro" />
                      </div>
                      <p className="collection_description">
                        {" Special Collection "}
                        <span>389 sản phẩm</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="big-seal">
          <div className="big-seal-box">
            <Link to="/bo-suu-tap" title="Banner">
              <img src={bg_banner_big} alt="bg_banner_big" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
