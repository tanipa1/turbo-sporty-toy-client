import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {

    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toys = {
            toy_name: name,
            price,
            seller_name: sellerName,
            seller_email: email,
            category,
            img: photo,
            rating,
            quantity,
            description
        }

        console.log(toys);

        fetch('https://turbo-sporty-toy-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy has been added',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                form.reset();
            })
    }

    return (
        <div>
            <div>
                <div className="banner w-full bg-repeat-x bg-center h-48">
                    <div className="ovarlay-sec absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>ADD A TOY</h1>
                    </div>
                </div>
            </div>
            {/* form */}
            <form onSubmit={handleAddToy} className="mx-48 my-12 shadow-2xl px-24 py-12 rounded-xl ">
                <div className="flex gap-12 mb-6">
                    <div className="flex items-center gap-10">
                        <p className="font-mono">Toy-Name</p>
                        <input className="input input-bordered" type="text" name="name" placeholder="Enter Toy Name" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Price</p>
                        <input className="input input-bordered" type="text" name="price" placeholder="$ Price" id="" />
                    </div>
                </div>
                <div className="flex gap-12 mb-6">
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Seller-Name</p>
                        <input className="input input-bordered" type="text" name="sellerName" placeholder="Enter your Name" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Email</p>
                        <input className="input input-bordered" type="email" name="email" defaultValue={user?.email}  placeholder="Enter Your Email" id="" />
                    </div>
                </div>
                <div className="flex gap-12 mb-6">
                    <div className="flex items-center gap-10">
                        <p className="font-mono">Category</p>
                        <input className="input input-bordered" type="text" name="category" placeholder="Toy Category" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Photo</p>
                        <input className="input input-bordered" type="url" name="photo" placeholder="Toy Photo" id="" />
                    </div>
                </div>
                <div className="flex gap-10 mb-6">
                    <div className="flex items-center gap-10">
                        <p className="font-mono">Quantity</p>
                        <input className="input input-bordered" type="text" name="quantity" placeholder="Available Toy" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Rating</p>
                        <input className="input input-bordered" type="text" name="rating" placeholder="Toy Rating" id="" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className="font-mono">Description</p>
                    <textarea className="textarea textarea-bordered h-[100px] mr-10 w-full" name="description" id="" cols="10" rows="10"></textarea>
                </div>
                <div className="form-control w-1/2 mt-6 mx-auto">
                    <input type="submit" className="btn font-serif text-lg arrow rounded-3xl" value="Add  Toy" />
                </div>

            </form>
        </div>
    );
};

export default AddToys;