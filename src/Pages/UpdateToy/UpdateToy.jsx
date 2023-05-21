// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    // const [updatedToy, setUpdatedToy] = useState();
    const toy = useLoaderData();
    const { toy_name, _id, price, quantity, description } = toy;

    const handleUpdateToy = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {price, quantity, description}
        // console.log(updateToy);

        fetch(`https://turbo-sporty-toy-server.vercel.app/toys/${_id}`, {
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  form.reset();
            }
        })
    }


    return (
        <div>
            <div className="banner w-full bg-repeat-x bg-center h-48">
                <div className="ovarlay-sec absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>Update Info of: {toy_name}</h1>
                </div>
            </div>
            {/* form */}
            <form onSubmit={handleUpdateToy} className="mx-48 my-12 shadow-2xl px-24 py-12 rounded-xl ">
                <div className="flex gap-12 mb-6">
                    <div className="flex items-center gap-10">
                        <p className="font-mono">Quantity</p>
                        <input className="input input-bordered" type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" id="" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-mono">Price</p>
                        <input className="input input-bordered" type="text" name="price" defaultValue={price} placeholder="$ Price" id="" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className="font-mono">Description</p>
                    <textarea className="textarea textarea-bordered h-[100px] mr-10 w-full" defaultValue={description} placeholder="About You Toy..." name="description" id="" cols="10" rows="10"></textarea>
                </div>
                <div className="form-control w-1/2 mt-6 mx-auto">
                    <input type="submit" className="btn font-serif text-lg arrow rounded-3xl" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;