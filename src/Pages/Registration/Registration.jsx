import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase-config";
import bgImage from '../../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'



const Registration = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        const newUser = { name, email, password }
        console.log(newUser)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })

                Swal.fire(
                    'Good job!',
                    'Successful create account',
                    'success'
                )
                navigate('/')
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
        <div className="hero bg-cover bg-no-repeat h-[100vh]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="w-[50%] shadow-2xl bg-white bg-opacity-10 p-5 rounded-xl">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white ">Create Account</h1>
                </div>
                <div className="card flex-shrink-0 w-[80%] mx-auto">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>

                            <input name="name" type="text" placeholder="email"
                                className="input border-none " required />
                            <hr className="border" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo</span>
                            </label>

                            <input name="photo" type="text" placeholder="https://"
                                className="input border-none " required />
                            <hr className="border" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>

                            <input name="email" type="email" placeholder="email"
                                className="input border-none " required />
                            <hr className="border" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
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
                        <p className="text-white">Already have account <Link className="font-semibold text-black" to={'/login'}>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;