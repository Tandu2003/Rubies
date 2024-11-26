import { Link } from "react-router-dom";

import "./Header.scss";

// import img
import logo from "../../assets/img/logo.png";

// import gif
import promotion from "../../assets/gif/promotion.gif";

// import svg
import icon_search from "../../assets/svg/icon-search.svg";
import icon_heart from "../../assets/svg/icon-heart.svg";
import icon_user from "../../assets/svg/icon-user.svg";
import icon_cart from "../../assets/svg/icon-cart.svg";
import drop_down from "../../assets/svg/drop-down.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="box-header">
            <div className="header-left">
              <Link to="/" className="logo">
                <img src={logo} alt="Thời Trang Nữ RUBIES" />
              </Link>
            </div>
            <div className="header-center">
              <ul className="menu-top">
                <li className="list-top-item header-hotline">
                  <span>Hotline: </span>
                  <Link to="tel:0703470938">070 347 0938</Link>
                </li>
                <li className="list-top-item header-stores">
                  <Link to="/he-thong-cua-hang">Hệ thống cửa hàng</Link>
                </li>
                <li className="list-top-item header-search">
                  <form action="/search" method="get" role="search" className="header-search-form">
                    <input
                      type="text"
                      name="query"
                      placeholder="Tìm sản phẩm..."
                      autocomplete="off"
                    />
                    <input type="hidden" name="type" value="product" />
                    <button type="submit" className="btn-search">
                      <img src={icon_search} alt="Tìm kiếm" />
                    </button>
                  </form>
                </li>
              </ul>
              <ul className="menu-main">
                <li className="list-main-item active">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="list-main-item">
                  <Link to="/thoi-trang-nu">
                    Thời trang nữ
                    <img className="drop_down" src={drop_down} alt="drop down" />
                  </Link>
                </li>
                <li className="list-main-item">
                  <Link to="/bo-suu-tap">
                    Bộ sưu tập
                    <img className="drop_down" src={drop_down} alt="drop down" />
                  </Link>
                </li>
                <li className="list-main-item">
                  <Link to="/tin-tuc-thoi-trang">
                    Tin tức thời trang
                    <img className="drop_down" src={drop_down} alt="drop down" />
                  </Link>
                </li>
                <li className="list-main-item">
                  <Link to="/tro-giup">
                    Trợ giúp
                    <img className="drop_down" src={drop_down} alt="drop down" />
                  </Link>
                </li>
                <li className="list-main-item promotion">
                  <Link to="/khuyen-mai">
                    <img src={promotion} alt="Khuyến mãi" />
                    Khuyến mãi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="header-right-item">
                <Link to="/san-pham-yeu-thich">
                  <span class="box-icon">
                    <img src={icon_heart} alt="Yêu thích" />
                    <span class="favourite-count">0</span>
                  </span>
                  <span class="item-title">Yêu thích</span>
                </Link>
              </div>
              <div className="header-right-item">
                <Link>
                  <span class="box-icon">
                    <img src={icon_user} alt="Tài khoản" />
                  </span>
                  <span class="item-title">Tài khoản</span>
                </Link>
              </div>
              <div className="header-right-item">
                <Link to="/gio-hang">
                  <span class="box-icon">
                    <img src={icon_cart} alt="Giỏ hàng" />
                    <span class="cart-count">0</span>
                  </span>
                  <span class="item-title">Giỏ hàng</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
