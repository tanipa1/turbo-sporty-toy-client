
const Badminton = ({ toy }) => {
    const { toy_name, img, price, rating } = toy;
    return (
        <div className="card card-compact p-5 w-72 lg:w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="badminton" className="rounded-2xl lg:h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <div className="flex justify-between">
                    <div>
                        <p>Price: ${price}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-xs lg:btn-sm login "><small>View Details</small></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badminton;