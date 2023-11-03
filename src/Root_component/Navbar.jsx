import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext)

    const handleLogout = () => {
        userLogout()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Successful log out account',
                    'success'
                )
            })
            .then(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const navLinks = <>
        <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Home
        </NavLink></li>

        <li>
            <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                registration
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                login
            </NavLink>
        </li>
        <li>

            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                About
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/customerProducts"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My Product
            </NavLink>
        </li>

    </>

    return (
        <div className="navbar bg-gray-500 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl text-white">My-Shop</a>
            </div>
            <div className="navbar-end flex gap-2 items-center">
                {
                    user && <img className="w-10 rounded-full h-10 " src={user.photoURL} alt="" />
                }
                {
                    user ? <button className="btn btn-outline text-white" onClick={handleLogout}>log out</button> : <Link to={'/login'}><h2 className="btn text-white btn-outline">login</h2></Link>
                }
            </div>
        </div >
    );
};

export default Navbar;