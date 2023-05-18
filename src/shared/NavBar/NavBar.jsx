import { Link } from 'react-router-dom';
import logo from '../../assets/sport18.jpg';
import './NavBar.css';

const NavBar = () => {
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>Blogs</Link></li>
        <li><Link to=''>All Toys</Link></li>
        <li><Link to=''>My Toys</Link></li>
        <li><Link to=''>Add A Toy</Link></li>
        </>

    return (
        <div className="navbar text-white font-semibold lg:px-24 bg-[#01b0ed]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                <Link className="lg:btn-md btn btn-xs login">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;