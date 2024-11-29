import { Link } from "react-router-dom";
import "./Footer.scss";

// import svg
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import youtube from "../../assets/svg/youtube.svg";
import tiktok from "../../assets/svg/tiktok.svg";
import { useState } from "react";

const Footer = () => {
  const [isShowCompany, setIsShowCompany] = useState(false);
  const [isShowCustomerPolicy, setIsShowCustomerPolicy] = useState(false);

  const handleShowCompany = () => {
    setIsShowCompany(!isShowCompany);
  };

  const handleShowCustomerPolicy = () => {
    setIsShowCustomerPolicy(!isShowCustomerPolicy);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-content">
              <div className="footer-top-content-item">
                <h4 className="title-menu">Công ty TNHH Rubies</h4>
                <div className="footer-top-des">
                  {"MST: "}
                  <Link title="0314839029">0314839029</Link>
                </div>
                <ul className="footer-top-contact">
                  <li>
                    <span>47 - 49 Trần Quang Diệu, Phường 14, Quận 3, TP. HCM</span>
                  </li>
                  <li>
                    <span>
                      <b>{"Điện thoại: "}</b>
                      <Link to="tel:0703470938" title="070 347 0938">
                        070 347 0938
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>{"Email: "}</b>
                      <Link to="mailto:rubiesin2015@gmail.com" title="rubiesin2015@gmail.com">
                        rubiesin2015@gmail.com
                      </Link>
                    </span>
                  </li>
                </ul>
                <div className="footer-top-social">
                  <Link
                    to="https://www.facebook.com/rubiesin2015"
                    target="_blank"
                    aria-label="Facebook"
                    title="Theo dõi Thời Trang Nữ RUBIES trên Facebook"
                  >
                    <img src={facebook} alt="facebook" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/rubies.sg/"
                    target="_blank"
                    aria-label="Instagram"
                    title="Theo dõi Thời Trang Nữ RUBIES trên Instagram"
                  >
                    <img src={instagram} alt="instagram" />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCALOExnNJaJG9YS9lvTnhsg"
                    target="_blank"
                    aria-label="Youtube"
                    title="Theo dõi Thời Trang Nữ RUBIES trên Youtube"
                  >
                    <img src={youtube} alt="youtube" />
                  </Link>
                  <Link
                    to="https://www.tiktok.com/@rubiesin2015"
                    target="_blank"
                    aria-label="Tiktok"
                    title="Theo dõi Thời Trang Nữ RUBIES trên Tiktok"
                  >
                    <img src={tiktok} alt="tiktok" />
                  </Link>
                </div>
              </div>
              <div className="footer-top-content-item" onClick={handleShowCompany}>
                <h4 className={`title-menu${isShowCompany ? " active" : ""}`}>Công ty</h4>
                <ul className={`footer-top-company${isShowCompany ? " active" : ""}`}>
                  <li className="footer-top-company-item">
                    <Link to="/rubies-rubies" title="RUBIES RUBIES">
                      RUBIES RUBIES
                    </Link>
                  </li>
                  <li className="footer-top-company-item">
                    <Link to="/tuyen-dung-viec-lam" title="Tuyển Dụng & Việc Làm">
                      Tuyển Dụng & Việc Làm
                    </Link>
                  </li>
                  <li className="footer-top-company-item">
                    <Link to="/tin-tuc-thoi-trang" title="Tin tức thời trang">
                      Tin Tức Thời Trang
                    </Link>
                  </li>
                  <li className="footer-top-company-item">
                    <Link to="/cham-soc-khach-hang" title="Chăm sóc khách hàng">
                      Chăm Sóc Khách Hàng
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-top-content-item" onClick={handleShowCustomerPolicy}>
                <h4 className={`title-menu${isShowCustomerPolicy ? " active" : ""}`}>
                  Chính sách khách hàng
                </h4>
                <ul
                  className={`footer-top-customer-policy${isShowCustomerPolicy ? " active" : ""}`}
                >
                  <li className="footer-top-customer-policy-item">
                    <Link to="/chinh-sach-kh-thanh-thiet" title="Chính Sách KH Thân Thiết">
                      Chính Sách KH Thân Thiết
                    </Link>
                  </li>
                  <li className="footer-top-customer-policy-item">
                    <Link to="/chinh-sach-doi-va-tra-hang" title="Chính Sách Đổi và Trả Hàng">
                      Chính Sách Đổi và Trả Hàng
                    </Link>
                  </li>
                  <li className="footer-top-customer-policy-item">
                    <Link to="/chinh-sach-van-chuyen" title="Chính Sách Vận Chuyển">
                      Chính Sách Bảo Hành
                    </Link>
                  </li>
                  <li className="footer-top-customer-policy-item">
                    <Link to="/chinh-sach-bao-mat" title="Chính Sách Bảo Mật">
                      Chính Sách Bảo Mật
                    </Link>
                  </li>
                  <li className="footer-top-customer-policy-item">
                    <Link to="/huong-dan-su-dung" title="Hướng Dẫn Sử Dụng">
                      Hướng Dẫn Sử Dụng
                    </Link>
                  </li>
                  <li className="footer-top-customer-policy-item">
                    <Link to="/cau-hoi-thuong-gap" title="Các Câu Hỏi Thường Gặp">
                      Các Câu Hỏi Thường Gặp
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-top-content-item">
                <h4 className="title-menu">Thông tin cửa hàng</h4>
                <ul className="footer-top-info">
                  <li className="footer-top-info-item">
                    <span>
                      <b>CỬA HÀNG SỐ 5</b>
                    </span>
                  </li>
                  <li className="footer-top-info-item">
                    <span>09 Thái Phiên, Phường Lê Đại Hành, Quận Hai Bà Trưng, Hà Nội</span>
                  </li>
                  <li className="footer-top-info-item">
                    <span>
                      <Link to="/he-thong-cua-hang" title="Xem tất cả cửa hàng">
                        Xem tất cả cửa hàng
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-copyright">
              <span className="footer-copyright-info">
                <span className="footer-copyright-brand">
                  {"© Bản quyền thuộc về "} <b>Rubies Rubies</b>
                  <span className="footer-copyright-separator">{" | "}</span>
                </span>
                <span className="footer-copyright-provider">
                  {"Cung cấp bởi "}
                  <Link to="https://www.sapo.vn/?utm_campaign=cpn:site_khach_hang-plm:footer&utm_source=site_khach_hang&utm_medium=referral&utm_content=fm:text_link-km:-sz:&utm_term=&campaign=site_khach_hang">
                    Sapo
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
