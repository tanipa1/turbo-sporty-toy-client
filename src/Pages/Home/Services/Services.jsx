import service from '../../../assets/service.avif';
const Services = () => {
    return (
        <div className="mb-12 text-center lg:text-left">
            <div className="text-center">
                <p><small className="font-serif text-[#ff1276] tracking-widest">WE PROVIDE</small></p>
                <h1 className="mb-6 text-2xl lg:text-3xl font-bold">OUR SERVICES</h1>
            </div>
            {/* Service Body */}
            <div className="lg:mx-36 mx-12 lg:flex justify-between items-center shadow-2xl rounded-2xl py-6  lg:px-12">
                {/* left */}
                <div className="grid gap-8">
                    <div>
                        <h4 className="font-bold">World Wide Delivery</h4>
                        <p className="text-sm opacity-50">On Order over $150-7days</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Gift Voucher</h4>
                        <p className="text-sm opacity-50">Good Gifts for Good Relation</p>
                    </div>
                </div>
                {/* middle */}
                <div>
                    <img className='lg:w-2/3 mx-auto ' src={service} alt="" />
                </div>
                {/* Right */}
                <div className="grid gap-8">
                    <div>
                        <h4 className="font-bold">Money Back Guarantee</h4>
                        <p className="text-sm opacity-50">Send within 14 working days</p>
                    </div>
                    <div>
                        <h4 className="font-bold">24X7 Support</h4>
                        <p className="text-sm opacity-50">Call us 24X7 at +66032 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;