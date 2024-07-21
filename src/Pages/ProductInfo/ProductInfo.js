import React, { useEffect } from "react";
import "./ProductInfo.css"; 
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const [productData,setProductData] = useState();
    const {id} = useParams();
    
    
    const getProductData = async ()=>{
        const data = await fetch(`http://localhost:1400/api/v1/product/singleproduct/?id=${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const responseData = await data.json();
        setProductData(responseData)

    }
    useEffect(()=>{
        getProductData();
    },[id]);

    return (
        <div className="product-info">
            <div className="product-image">
                <img src={productData?.images[0]} alt={productData?.name} />
            </div>
            <div className="product-details">
                <h1 className="product-title">{productData?.name}</h1>
                <p className="product-description">{productData?.description}</p>
                <p className="product-price">${productData?.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductInfo;
