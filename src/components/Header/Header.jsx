import SearchBar from "../SearchBar/SearchBar";
import './header.css';

const Header = () => {
    return (
        <div className="header-container"> 
            <h1 className="header-text">
                Find your next Christmas gift!
            </h1>
            <div className="searchbar">
                <SearchBar />
            </div>
        </div>
    );
}

export default Header;