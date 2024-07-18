import React from 'react';
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import "./Products.css";
import Category from '../../Components/Category/Category';

const data = [
    { productName: 'TV', price: '$1300', description: 'Sony', imageUrl: 'https://via.placeholder.com/300' },
    { productName: 'Laptop', price: '$1500', description: 'Dell', imageUrl: 'https://via.placeholder.com/300' },
    { productName: 'Smartphone', price: '$800', description: 'Samsung', imageUrl: 'https://via.placeholder.com/300' },
    { productName: 'Headphones', price: '$200', description: 'Bose', imageUrl: 'https://via.placeholder.com/300' },
    { productName: 'Camera', price: '$1200', description: 'Canon', imageUrl: 'https://via.placeholder.com/300' },
    { productName: 'Smartwatch', price: '$300', description: 'Apple', imageUrl: 'https://via.placeholder.com/300' },
    { productName: 'Tablet', price: '$600', description: 'iPad', imageUrl: 'https://via.placeholder.com/300' }
];

const Products = () => {
    return (
        <div>
            <Category/>
        <div className="products">
            {data.map((elem, i) => (
                <SingleProduct key={i} data={elem} />
            ))}
        </div>
        </div>
    );
};

export default Products;
