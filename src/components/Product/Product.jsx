const Product = (props) => {

    console.log(props);
    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.description}
            </div>
            <div>
                {props.price}
            </div>
        </div>
    );
}

export default Product;