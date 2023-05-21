import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
    useTitle('All Toys');
    const toys = useLoaderData();

    const [query, setQuery] = useState('');
    const [filteredToys, setFilteredToys] = useState(toys);

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        const filteredToys = toys.filter((toy) =>
            toy.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredToys(filteredToys);
    };

    return (
        <div>
            {/* banner */}
            <div>
                <div className="banner w-full bg-repeat-x bg-center h-48">
                    <div className="ovarlay-sec absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>All Toys Here</h1>
                    </div>
                </div>
            </div>
            <div className="mx-40 mt-6">
                <input type="text" placeholder="Search toy by name" className="input input-bordered" value={query} onChange={handleSearch} />
            </div>
            {/* Tabular form */}
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
                        filteredToys.map(toy => <ToysTable
                            key={toy._id}
                            toy={toy}
                        ></ToysTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;