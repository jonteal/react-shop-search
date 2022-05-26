import { useState } from "react";
import './searchBar.css';

const SearchBar = () => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput();
        console.log(userInput);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="search for an item"
                value={userInput}
                onChange={handleChange}
                className="searchBar"
            />
        </div>
    );
}

export default SearchBar;