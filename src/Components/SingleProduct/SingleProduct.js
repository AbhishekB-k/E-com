import React from 'react';
import './SingleProduct.css';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ data }) => {
    const navigate = useNavigate();
    const { productName, price, description, imageUrl } = data;

    return (
        <div className="single-product">
            <div>
                <img className="product-image" src={imageUrl} alt={productName} />
            </div>
            <div className="product-info">
                <h2>{productName}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
            <div className="product-actions">
                <button onClick={()=>navigate(`/ProductInfo/id${price}`)}>View</button>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;

