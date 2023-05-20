import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";

const AllToys = () => {
    const toys = useLoaderData();

    return (
        <div className="mx-40 my-12 shadow-2xl">
            <table className="table w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy</th>
                        <th>Toy-Category</th>
                        <th>Seller Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    toys.map(toy => <ToysTable
                        key={toy._id}
                        toy={toy}
                    ></ToysTable>)
                }
            </table>
        </div>
    );
};

export default AllToys;