import banner1 from '../../../assets/banner-1.jpg';
import banner2 from '../../../assets/banner-2.jpg';
import banner3 from '../../../assets/banner-3.jpg';
import banner4 from '../../../assets/banner-4.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className="carousel  lg:mx-24 my-10 lg:h-[500px] ">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle arrow">❮</a>
                    <a href="#slide2" className="btn btn-circle arrow">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle arrow">❮</a>
                    <a href="#slide3" className="btn btn-circle arrow">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle arrow">❮</a>
                    <a href="#slide4" className="btn btn-circle arrow">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle arrow">❮</a>
                    <a href="#slide1" className="btn btn-circle arrow">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Header;