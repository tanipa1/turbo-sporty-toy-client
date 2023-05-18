import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            Swal.fire({
                title: 'Successfully Login!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        })
    }
    return (
        <div>
            <div className="banner w-full bg-repeat-x bg-center h-48">
                <div className="absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>Login to your Account</h1>
                </div>
            </div>
            <div className="w-1/2 mx-auto py-8 px-20 shadow-2xl my-20">
                <div className="card-body ">
                    <form onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
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
                            <input type="submit" className="btn arrow" value="Login" />
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="form-control w-2/3 mx-auto mt-6">
                        <button className="btn-outline btn-primary btn ">
                            <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
                            Sign in with Google
                        </button>
                    </div>
                    <div className="form-control text-center mx-auto mt-6">
                        <p><small>Don`t have an Account? <Link to='/register' className="text-[#ff1276] font-bold">Register</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;