import React from 'react';
import SingleCart from "../../Components/Cart/SingleCart";
import "./Cart.css";

const Cart = () => {
    const data = [
        { productName: 'TV', price: '$1300', description: 'Sony', imageUrl: 'https://via.placeholder.com/300' },
        { productName: 'Laptop', price: '$1500', description: 'Dell', imageUrl: 'https://via.placeholder.com/300' },
        { productName: 'Smartphone', price: '$800', description: 'Samsung', imageUrl: 'https://via.placeholder.com/300' },
        { productName: 'Headphones', price: '$200', description: 'Bose', imageUrl: 'https://via.placeholder.com/300' },
        { productName: 'Camera', price: '$1200', description: 'Canon', imageUrl: 'https://via.placeholder.com/300' },
        { productName: 'Smartwatch', price: '$300', description: 'Apple', imageUrl: 'https://via.placeholder.com/300' },
        { productName: 'Tablet', price: '$600', description: 'iPad', imageUrl: 'https://via.placeholder.com/300' }
    ];  

    return (
        <div className="cart-container">
            <div className="cart-items">
                {data.map((elem, i) => (
                    <SingleCart key={i} data={elem} />
                ))}
            </div>
            <div className="cart-summary">
                <h2>Total Price: </h2>
                <button>Buy Now</button>
            </div>
        </div>
    );
}

export default Cart;
