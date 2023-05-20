import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                Swal.fire({
                    title: 'Account Created!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
            .catch(error => {
                console.log(error.message);
            });

        updateUserProfile(name, photo)
            .then(() => {
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <div className="banner w-full bg-repeat-x bg-center h-48">
                <div className="absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>Create An Acoount</h1>
                </div>
            </div>
            <div className="w-1/2 mx-auto py-8 px-20 shadow-2xl my-20">
                <div className="card-body ">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Link of your photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative w-3/4 lg:w-full">
                                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full pr-16" required />
                                <button className="btn login absolute top-0 right-0 rounded-l-none">Show</button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control w-2/3 mx-auto mt-6">
                            <input type="submit" className="btn arrow" value="Sign Up" />
                        </div>
                    </form>
                    <div className="form-control text-center mx-auto mt-6">
                        <p><small>Already have an Account? <Link to='/login' className="text-[#ff1276] font-bold">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;