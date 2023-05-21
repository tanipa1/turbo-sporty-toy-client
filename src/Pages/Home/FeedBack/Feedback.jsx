import client1 from "../../../assets/client-1.jpg";
import client2 from "../../../assets/client-2.jpg";
import client3 from "../../../assets/client-3.jpg";
const Feedback = () => {
    return (
        <div className="my-12 lg:my-24">
            <div className="text-center">
                <p><small className="font-serif text-[#ff1276] tracking-widest">F e e d b a c k</small></p>
                <h1 className="mb-8 text-2xl lg:text-3xl font-bold">OUR <span className="text-[#ff1276]">CLIENT</span> SAYS</h1>
            </div>
            <div className="lg:mx-36 mx-12 lg:flex justify-between gap-10">
                {/* Feedback-1 */}
                <div className="grid mb-8 lg:mb-0 mx-auto px-6 py-3 rounded-lg shadow-2xl">
                    <div className="avatar grid mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={client1} />
                        </div>
                    </div>
                    <p className="text-center">"Excellent cricket set, competitive pricing, and top-notch customer service. Will definitely return for future purchases." <br /><br />  <b>-Mark R. (Cricket Coach)</b></p>
                </div>
                {/* Feedback-2 */}
                <div className="grid mb-8 lg:mb-0 mx-auto px-6 py-3 rounded-lg shadow-2xl">
                    <div className="avatar grid mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={client3} />
                        </div>
                    </div>
                    <p className="text-center">"Impressed with the wide range of high-quality toys and user-friendly website. Highly recommend for sports enthusiasts." <br /><br />  <b>-Sarah W. (Fitness Trainer)</b></p>
                </div>
                {/* Feedback-3 */}
                <div className="grid mb-8 lg:mb-0 mx-auto px-6 py-3 rounded-lg shadow-2xl">
                    <div className="avatar grid mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={client2} />
                        </div>
                    </div>
                    <p className="text-center">"Always impressed with the latest football toys, great quality, and fast shipping. My go-to site for football toys." <br /><br />  <b>-Emily T. (Soccer Player)</b></p>
                </div>
            </div>  
        </div>
    );
};

export default Feedback;