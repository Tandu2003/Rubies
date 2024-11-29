import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <Link to="/thoi-trang-nu" title="Banner">
          <img src={props.img} alt={props.title} />
        </Link>
      </div>
    </>
  );
};

export default Banner;
