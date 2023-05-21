import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyToy from "./MyToy";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const navigate = useNavigate();

    const url = `https://turbo-sporty-toy-server.vercel.app/toys?seller_email=${user.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data);
                }
                else {
                    navigate('/')
                }
            })
    }, [url, navigate]);

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://turbo-sporty-toy-server.vercel.app/toys/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id)
                            setToys(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className="mx-28 my-12 shadow-2xl">
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
                {
                    toys.map(toy => <MyToy
                        key={toy._id}
                        toy={toy}
                        handleDelete={handleDelete}
                    ></MyToy>)
                }
            </table>
        </div>
    );
};

export default MyToys;