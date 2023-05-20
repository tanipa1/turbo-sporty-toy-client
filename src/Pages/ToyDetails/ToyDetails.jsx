import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    const { toy_name, price, rating,
        description, quantity, seller_email, seller_name, img } = toy;

    return (
        <div>
            <div>
                <div className="banner w-full bg-repeat-x bg-center h-48">
                    <div className="ovarlay-sec absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>Details of {toy_name}</h1>
                    </div>
                </div>
            </div>
            <div className="my-20 mx-24">
                <div className="px-40 py-12 hero mx-auto shadow-2xl">
                    <div className="hero-content flex-col gap-20 lg:flex-row">
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">{toy_name}</h1>
                            <p><span className="font-bold">Seller: </span> {seller_name}</p>
                            <p><span className="font-bold">Email: </span> {seller_email}</p>
                            <p><span className="font-bold">Available Quantity: </span> {quantity}</p>
                            <p className="py-6 text-justify"><span className="font-bold">Details: </span> <small>{
                                description}</small></p>
                            <div className="flex justify-between">
                                <p className="btn btn-sm arrow rounded-3xl"><span className="font-bold">Price:  </span> ${price}</p>
                                <p className="btn btn-sm arrow rounded-3xl"><span className="font-bold">Rating:  </span> {rating}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;