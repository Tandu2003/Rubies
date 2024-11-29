import { Link } from "react-router-dom";
import "./NotFound.scss";

import Breadcrumb from "../../components/Breadcrumb";

// import img
import eror_404 from "../../assets/img/eror-404.png";

const NotFound = () => {
  return (
    <>
      <Breadcrumb breadcrumb="404 Không tìm thấy trang" />
      <main className="not-found">
        <div className="container">
          <div className="box-not-found">
            <img src={eror_404} alt="eror-404" />
            <p>Chúng tôi không thể tìm thấy trang bạn yêu cầu.</p>
            <Link to="/" className="btn-home">
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
