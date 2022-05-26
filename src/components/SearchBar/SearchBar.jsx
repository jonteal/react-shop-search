import { useState } from "react";
import './searchBar.css';
import jsonData from '../api';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm);



    // SEARCH WORKS BUT IS CURRENTLY ONLY SEARCHING NAMES.
    // NEEDS TO WORK FOR DESCRIPTIONS AND PRICING
    // ALSO NEEDS TO PULL THE DATA FROM THE TABLE, 
    // NOT DIRECTLY FROM THE API
    return (
        <div>
            <input 
                type="text" 
                placeholder="search for an item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchBar"
            />
            {jsonData.filter((val) => {
                if (searchTerm === '') {
                    return val;
                } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div className="item" key={key}>
                        <p>{val.name}</p>
                    </div>
                )
            })
            
            }




        </div>
    );
}

export default SearchBar;