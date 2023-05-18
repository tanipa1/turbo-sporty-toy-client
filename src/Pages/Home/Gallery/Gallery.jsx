import gallery1 from '../../../assets/gallery-1.jpg';
import gallery2 from '../../../assets/gallery-2.jpg';
import gallery3 from '../../../assets/gallery-3.jpg';
import gallery4 from '../../../assets/gallery-4.jpg';
import gallery5 from '../../../assets/gallery-5.avif';
import gallery6 from '../../../assets/gallery-6.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <h2 className="text-3xl ">Our <span className="text-[#ff1276]">Gallery</span></h2>
                <p>A gallery of playfulness and joy</p>

                <div className='my-8 lg:mx-44 grid justify-center lg:grid-cols-3 gap-3'>

                    <div className="image-container mask mask-squircle m-0">
                        <img src={gallery1} className="max-w-sm  shadow-2xl" />
                        <div className="overlay">
                            <span className="overlay-text px-2">Capturing the spirit <br /> of play and adventure</span>
                        </div>
                    </div>

                    <div className="image-container mask mask-squircle m-0">
                        <img src={gallery2} className="max-w-sm  shadow-2xl" />
                        <div className="overlay">
                            <span className="overlay-text px-2">A visual journey through <br /> the world of sports toys</span>
                        </div>
                    </div>

                    <div className="image-container mask mask-squircle m-0">
                        <img src={gallery3} className="max-w-sm  shadow-2xl" />
                        <div className="overlay">
                            <span className="overlay-text px-2">Bringing the magic of <br /> sports toys to life</span>
                        </div>
                    </div>

                    <div className="image-container mask mask-squircle m-0">
                        <img src={gallery4} className="max-w-sm  shadow-2xl" />
                        <div className="overlay">
                            <span className="overlay-text px-2">Exploring the artistry of <br /> sports toy photography</span>
                        </div>
                    </div>

                    <div className="image-container mask mask-squircle m-0">
                        <img src={gallery5} className="max-w-sm  shadow-2xl" />
                        <div className="overlay">
                            <span className="overlay-text px-2">Inspiring 
                            <br /> imagination through captivating visuals</span>
                        </div>
                    </div>

                    <div className="image-container mask mask-squircle m-0">
                        <img src={gallery6} className="max-w-sm  shadow-2xl" />
                        <div className="overlay">
                            <span className="inline-block overlay-text ">Discover the beauty of <br /> sports  toys through our gallery</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;