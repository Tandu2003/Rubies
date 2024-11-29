import { Link } from "react-router-dom";
import "./Breadcrumb.scss";

// import svg
import arrow_right from "../../assets/svg/arrow-right.svg";

const Breadcrumb = (props) => {
  const { breadcrumb, list } = props;

  return (
    <>
      <div className="bread-crumb">
        <div className="container">
          <ul className="breadcrumb">
            <li className="home">
              <Link to="/">
                <span>Trang chủ</span>
              </Link>
              <img src={arrow_right} alt="arrow-right" />
            </li>
            {list &&
              list.length > 0 &&
              list.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>
                    <span>{item.name}</span>
                  </Link>
                  {breadcrumb ? (
                    <img src={arrow_right} alt="arrow-right" />
                  ) : index === list.length - 1 ? null : (
                    <img src={arrow_right} alt="arrow-right" />
                  )}
                </li>
              ))}
            {breadcrumb && (
              <li>
                <strong>{breadcrumb}</strong>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
