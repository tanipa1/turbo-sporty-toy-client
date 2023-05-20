import { Link } from "react-router-dom";

const ToysTable = ({ toy }) => {
    const { _id, toy_name, seller_name, price, quantity, img, category } = toy;
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="w-24 rounded-xl">
                            <img src={img} />
                        </div>
                        <div>
                            <div className="font-bold">{toy_name}</div>
                            <div className="text-sm opacity-50">Available:{quantity}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {category}
                </td>
                <td>
                    {seller_name}
                </td>
                <td>${price}</td>
                <th>
                    <Link to={`/toyDetails/${_id}`}><button className="btn arrow btn-xs">View details</button></Link>
                </th>
            </tr>
        </tbody>
    );
};

export default ToysTable;