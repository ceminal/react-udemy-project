import PropTypes from "prop-types";

const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">bilgisayargenetiği.com</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;

ProductInfo.propTypes = {
  children: PropTypes.array,
};
