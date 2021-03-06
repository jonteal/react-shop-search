import { useEffect, useState } from "react";
import apiData from '../../components/api';
import './home.css';


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

    const handleRefresh = (e) => {
        // e.preventDefault();
        setSearchTerm('')
    }



    return (
        <div className="home-parent-container">

            <h1>Product Search</h1>

            <input 
                type="text" 
                value={searchTerm}
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
                className='searchBar'
            />

            <button onClick={handleRefresh}>Clear</button>

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
                            <div className="product">
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