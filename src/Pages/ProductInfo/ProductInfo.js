import React from "react";
import "./ProductInfo.css"; 

const ProductInfo = () => {
    const product = {
        name: 'Product Name',
        description: 'Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 100,
        imageUrl: 'https://example.com/product-image.jpg', 
    };

    return (
        <div className="product-info">
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductInfo;
