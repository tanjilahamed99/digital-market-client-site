import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const Registration = () => {

    const { createUser } = useContext(AuthContext)

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const newUser = { name, email, password }
        console.log(newUser)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire(
                    'Good job!',
                    'Successful create account',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }


    const [see, setSee] = useState(false)

    return (
        <div className="hero py-10 bg-[url(https://i.ibb.co/Kybz9h0/Stock-Snap-TEJEVWYFCK.jpg)] bg-cover bg-no-repeat h-[600px]">
            <div className="w-[40%]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white mb-5">Create Account</h1>
                </div>
                <div className="card   flex-shrink-0 w-[80%] mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input name="name" type="text" placeholder="email"
                                className="input border-none " required />
                            <hr className="border" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input name="email" type="email" placeholder="email"
                                className="input border-none " required />
                            <hr className="border" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={see ? 'text' : "password"} placeholder="password"
                                className="input border-none " required />
                            <hr className="border" />

                            {
                                see ? <FaEye onClick={() => setSee(!see)} className="absolute right-3 bottom-5"></FaEye> :
                                    <FaEyeSlash onClick={() => setSee(!see)} className="absolute right-3 bottom-5"></FaEyeSlash>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create</button>
                        </div>
                        <p>Already have account <Link className="font-semibold text-purple-700" to={'/login'}>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;