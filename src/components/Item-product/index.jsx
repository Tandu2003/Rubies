import { Link } from "react-router-dom";

import "./Item-product.scss";

// import img
import cart_option from "../../assets/img/cart_option.png";
import view from "../../assets/img/view.png";
import heart from "../../assets/img/heart.png";

const ItemProduct = ({ product, index }) => {
  return (
    <div className="item-product">
      <div className="product-image">
        <Link className="product-link" to={`/${product.alias}`} title={product.name}>
          <img className="product-img" src={product.img} alt={product.name} />
        </Link>
        {index !== undefined && (
          <div className="product-rank">
            <span className="rank-icon"></span>
            <span className="rank-number">#{index + 1}</span>
          </div>
        )}
        <Link to={product.alias} className="product-actions">
          <div className="action-buttons">
            <Link className="btn-action btn-option" to={product.alias} title="Tùy chọn">
              <img className="img_option" src={cart_option} alt="Tùy chọn" />
            </Link>
            <Link className="btn-action btn-quickview" to={product.alias} title="Xem nhanh">
              <img className="img_quickview" src={view} alt="Xem nhanh" />
            </Link>
            <Link className="btn-action btn-favorite" title="Thêm vào yêu thích">
              <img className="img_favorite" src={heart} alt="Thêm vào yêu thích" />
            </Link>
          </div>
        </Link>
      </div>
      <div className="product-details">
        <h3 className="product-name">
          <Link to={product.alias} title={product.name}>
            {product.name}
          </Link>
        </h3>
        <div className="product-price">{product.price.toLocaleString()}vnđ</div>
      </div>
    </div>
  );
};

export default ItemProduct;
