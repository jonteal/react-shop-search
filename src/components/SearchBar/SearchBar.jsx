import { useState } from "react";

const SearchBar = () => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput()
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="search for an item"
                value={userInput}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;