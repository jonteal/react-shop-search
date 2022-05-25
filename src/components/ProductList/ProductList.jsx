import Product from "../Product/Product";
import './productList.css';
import productData from '../api';
import { useEffect, useState } from "react";





const ProductList = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, []);

    console.log(products);




    // useEffect(() => {
    //     setProducts(products);
    // }, []);

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
        <div>
            <h2>Products</h2>        
                <ul>
                    {apiData}
                </ul>       
        </div>
    );
}

export default ProductList;