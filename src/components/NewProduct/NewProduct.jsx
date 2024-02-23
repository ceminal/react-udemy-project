import ProductForm from "./ProductForm";
import PropTypes from "prop-types";

const NewProduct = (props) => {
  return (
    <div className="new-product-wrapper">
      <ProductForm setProducts={props.setProducts} />
    </div>
  );
};

export default NewProduct;

NewProduct.propTypes = {
  setProducts: PropTypes.func,
};
