import ProductList from "../../components/ProductList/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
    return (
        <div>
            <h1>Search for your products here!</h1>

            <SearchBar />

            <ProductList />
        </div>
    );
}

export default Home;