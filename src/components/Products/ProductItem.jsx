import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import PropTypes from "prop-types";
import Counter from "../Counter";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);

  const clickHandler = () => {
    setTitle("Güncellendi!");
    console.log(productName, "Güncellendi!");
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>

        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}₺</span>
        </Counter>
        <br />
        <button onClick={clickHandler}>Güncelle</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.any.isRequired,
  }).isRequired,
};
