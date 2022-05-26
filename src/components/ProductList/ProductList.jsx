import Product from "../Product/Product";
import './productList.css';
import productData from '../api';
import { useEffect, useState } from "react";





const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, []);

    // console.log(products);


    const apiData = products.map((product) => (
        <li key={product.id}>
            <Product 
                name={product.name}
                description={product.description}
                price={product.price}
            />
        </li>
    ))


    return (
        <div className="product-container">
            
            <div className="product-category-container">
                <div className="product-name">
                    <h3>Name</h3>
                </div>
                <div className="product-description">
                    <h3>Description</h3>
                </div>
                <div className="product-price">
                    <h3>Price</h3>
                </div>
            </div>
            
            
            <ul className="product-list">
                {apiData}
            </ul> 
            

        </div>
    );
}

export default ProductList;