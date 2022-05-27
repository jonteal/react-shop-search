import { useEffect, useState } from "react";
import apiData from '../../components/api';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

    const FetchData = () => {
        setProducts(apiData)
    };

    useEffect(() => {
        FetchData();
    }, []);


    const convertCurrency = (money) => {
        const converted = (money / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return converted
    }



    return (
        <div className="home-parent-container">

            <h1>Product Search</h1>

            <input 
                type="text" 
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
                className='searchBar'
            />

            <ul>
                {products
                    .filter((val) => {
                        if (searchTerm === '') {
                            return val;
                        } else if (
                            val.name.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        } else if (
                            val.description.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return val;

                        }
                    })

                    .map((product) => (
                        <li key={product.id}>
                            <div>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{convertCurrency(product.price)}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>



            
        </div>
    );
}

export default Home;