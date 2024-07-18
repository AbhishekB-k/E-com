import { useState } from "react";
import Category from "../../Components/Category/Category";
import "./Homepage.css";

const Homepage = () => {
    const data1 = [
        { name: 'A', data: [{ product: 'product1', image: 'https://via.placeholder.com/150', prize: 100 }, { product: 'product2', image: 'https://via.placeholder.com/150', prize: 150 }, { product: 'product3', image: 'https://via.placeholder.com/150', prize: 120 }, { product: 'product4', image: 'https://via.placeholder.com/150', prize: 180 }] },
        { name: 'B', data: [{ product: 'product1', image: 'https://via.placeholder.com/150', prize: 110 }, { product: 'product2', image: 'https://via.placeholder.com/150', prize: 130 }, { product: 'product3', image: 'https://via.placeholder.com/150', prize: 140 }, { product: 'product4', image: 'https://via.placeholder.com/150', prize: 170 }] },
        { name: 'C', data: [{ product: 'product1', image: 'https://via.placeholder.com/150', prize: 105 }, { product: 'product2', image: 'https://via.placeholder.com/150', prize: 155 }, { product: 'product3', image: 'https://via.placeholder.com/150', prize: 125 }, { product: 'product4', image: 'https://via.placeholder.com/150', prize: 185 }] },
        { name: 'D', data: [{ product: 'product1', image: 'https://via.placeholder.com/150', prize: 115 }, { product: 'product2', image: 'https://via.placeholder.com/150', prize: 135 }, { product: 'product3', image: 'https://via.placeholder.com/150', prize: 145 }, { product: 'product4', image: 'https://via.placeholder.com/150', prize: 175 }] },
        { name: 'E', data: [{ product: 'product1', image: 'https://via.placeholder.com/150', prize: 125 }, { product: 'product2', image: 'https://via.placeholder.com/150', prize: 145 }, { product: 'product3', image: 'https://via.placeholder.com/150', prize: 135 }, { product: 'product4', image: 'https://via.placeholder.com/150', prize: 165 }] }
    ];

    return (
        <div className="homepage">
            <Category />
            <img className="home-img" src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/eda9fda22c567a49.jpg?q=20" alt="Homepage Image" />
            <div className="home-products">
                {data1.map((category, index) => (
                    <div key={index} className="category-section">
                        <h2>{category.name}</h2>
                        <div className="product-list">
                            {category.data.map((product, i) => (
                                <div key={i} className="product-item">
                                    <img src={product.image} alt={product.product} />
                                    <p>{product.product}</p>
                                    <p>${product.prize}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
