import useTitle from "../../../hooks/useTitle";
import Feedback from "../FeedBack/Feedback";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Home');
    
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <Header></Header>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;