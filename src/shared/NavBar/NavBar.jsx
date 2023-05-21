import { Link } from 'react-router-dom';
import logo from '../../assets/sport18.jpg';
import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addToys'>Add A Toy</Link></li>
    </>;

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'LogOut :(',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar text-white font-semibold lg:px-24 bg-[#01b0ed]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#01b0ed] rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <div className='w-12 lg:w-16 mask mask-squircle'><img className='' src={logo} alt="" /></div>
                    <div>
                        <Link to='/' className="font-bold px-0 normal-case text-base lg:text-xl">Turbo<span className='text-[#ff1276] lg:text-2xl font-extrabold'>Sporty</span></Link>
                        <p className='py-0 my-0 text-base-200 lg:text-sm text-xs'><small>Unleash your inner champion</small></p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <>
                        {user?.photoURL ? <div className="w-12 tooltip-bottom tooltip mx-1 px-0 " data-tip={user?.displayName}>
                            <img className='rounded-full' src={user.photoURL} />
                        </div> : <></>}
                        <button onClick={handleSignOut} className="lg:btn-md btn btn-xs login">LogOut</button>
                    </>
                    : <Link to='/login' className="lg:btn-md btn btn-xs login">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;