import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";
import useTitle from "../../hooks/useTitle";
// import { useState } from "react";

const AllToys = () => {
    useTitle('All Toys');
    const toys = useLoaderData();
    // const [search, setSearch] = useState("");

/*     const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredToys = toys.filter((toy) =>
        toy.toy_name.toLowerCase().includes(search.toLowerCase())
    ); */

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
            {/* <div>
                <input
                    className="input input-bordered input-sm  max-w-xs border-[#ff1276] shadow-xl"
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />
            </div> */}
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
                        toys.map(toy => <ToysTable
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