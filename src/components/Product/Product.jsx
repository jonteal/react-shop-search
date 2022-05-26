import './product.css';

const Product = (props) => {

    // console.log(props);
    return (
        <div className="product-body">
            <div className="single-product-name">
                <p>{props.name}</p>
            </div>
            <div className="single-product-description">
                <p>{props.description}</p>
            </div>
            <div className="single-product-price">
                <p>$ {props.price}</p>
            </div>
        </div>
    );
}

export default Product;