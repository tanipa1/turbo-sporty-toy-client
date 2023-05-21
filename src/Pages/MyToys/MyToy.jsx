import { Link } from "react-router-dom";

const MyToy = ({ toy, handleDelete }) => {
    const { toy_name, img, price, rating, quantity, _id, seller_name, seller_email, category } = toy;
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            
                        </th>
                        <th>Toy Info</th>
                        <th>Category</th>
                        <th>Seller Info</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <button onClick={() => handleDelete(_id)} className="btn login btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="w-24 ">
                                    <img src={img} className="rounded-xl" />
                                </div>
                                <div>
                                    <div className="font-bold">{toy_name}</div>
                                    <div className="text-sm opacity-50">Available:{quantity}</div>
                                    <div className="text-sm opacity-50">Rating:{rating}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {category}
                        </td>
                        <td>
                            <div>
                                <p>{seller_name}</p>
                                <div className="text-sm opacity-50">Email :  {seller_email}</div>
                            </div>
                        </td>
                        <td>${price}</td>
                        <th className="grid grid-cols-1 gap-3 my-3 justify-center items-center">
                            <Link className="mx-auto" to={`/toyDetails/${_id}`}><button className="btn arrow btn-xs">View details</button></Link>
                            <Link className="mx-auto"><button className="btn arrow btn-xs">U p d a t e</button></Link>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;