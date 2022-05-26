import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
    return (
        <div className="home-parent-container">

            <div>
                <Header />
            </div>

            <div>
                <ProductList />
            </div>


            
        </div>
    );
}

export default Home;