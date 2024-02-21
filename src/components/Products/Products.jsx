import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";


const Products = () => {
    return (
        <div className="product-wrapper">
            <h1>Products</h1>
            <div className="products">
                {productData.map((product) => (
                    <ProductItem 
                    key={product.productName} 
                    productImage={product.imageUrl}
                    productName={product.productName}
                    productPrice={product.productPrice} />
                ))}
            </div>
        </div>
    );
}

export default Products;