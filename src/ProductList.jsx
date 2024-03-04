import { ProductItem } from "./ProductItem"
import "./css/ProductList.css"

export const ProductList = ({ products }) => {
    return (
        <ul className="product-list">
            {products.map((product) => (
                <li className="product-list__item" key={product.id}>
                    <ProductItem
                        title={product.title}
                        price={product.price}
                        discount={product.discount}
                        src={product.imageUrl}
                    />
                </li>
            ))}
        </ul>
    );
};