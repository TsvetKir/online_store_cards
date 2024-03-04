import "./css/ProductItem.css"

export const ProductItem = ({ title, price, discount, src }) => {
    return (
        <div className="product-item">
            <img className="product-item__img" src={src} alt="Product" />
            {!discount ? (<p className="product-item__price">{price} ₽</p>) :
                (<p className="product-item__new-price">
                    {price * discount} ₽ 
                    <span className="product-item__old-price">{price} ₽</span>
                </p>)
            }
            <h2 className="product-item__title">{title}</h2>
        </div>
    )
};