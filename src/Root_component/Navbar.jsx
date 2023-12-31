import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext)

    const navLinks = <>
        <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""
            }
        >
            Home
        </NavLink></li>
        <li>

            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                Products
            </NavLink>
        </li>
        <li>

            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                About
            </NavLink>
        </li>
        {
            !user && <li>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                >
                    login
                </NavLink>
            </li>
        }
    </>

    const handleLogout = () => {
        userLogout()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(() => {

            })
    }


    return (
        <div className="navbar bg-gray-200">
            <div className="flex-1 gap-10 items-center">
                <a className=" text-2xl font-semibold"><span className="text-bold text-purple-500">Style</span>Byte</a>
                <ul className="hidden md:flex gap-7 font-semibold">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">0 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    {
                        user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="justify-between"> Profile </a></li>
                        <li><a>Settings</a></li>
                        {
                            user && <li onClick={handleLogout}><a>Logout</a></li>
                        }
                        <div className="md:hidden">

                            {
                                navLinks
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;