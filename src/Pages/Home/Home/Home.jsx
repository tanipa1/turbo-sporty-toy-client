import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Services></Services>
        </div>
    );
};

export default Home;