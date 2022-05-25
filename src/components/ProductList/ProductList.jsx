import Product from "../Product/Product";
import './productList.css';
import products from '../api';





const ProductList = () => {

    console.log(products);

    const apiData = products.map((product) => (
        <li key={product.id}>{product.name}</li>
    ))
    return (
        <div>
            <h2>Products</h2>

            <ul>
                {apiData}
            </ul>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default ProductList;