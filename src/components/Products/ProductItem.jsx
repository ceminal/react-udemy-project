import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import PropTypes from "prop-types";
import Counter from "../Counter";

const ProductItem = (props) => {
  const { productImage, productName, productPrice } = props;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);

  function clickHandler() {
    setTitle("Güncellendi");
    console.log(productName, "Güncellendi");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={productImage} />
      </div>
      <ProductInfo>
        <h2 className="product-title">{title}</h2>
        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span className="product-price">{counter}₺</span>
        </Counter>
        <br />
        <button onClick={clickHandler} id="myButton">
          Güncelle
        </button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
};
