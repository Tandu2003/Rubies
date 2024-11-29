import { Link } from "react-router-dom";
import "./Title.scss";

const Title = (props) => {
  const { title, type, link } = props;
  return (
    <>
      <div className="title">
        {type === "module" && (
          <h2 className="title_module">
            <Link to={link} title={title}>
              <span>{title}</span>
            </Link>
          </h2>
        )}

        {type === "head" && (
          <h2 className="title_head">
            <span>{title}</span>
          </h2>
        )}
      </div>
    </>
  );
};

export default Title;
