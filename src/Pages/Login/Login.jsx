import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Login = () => {

    const [see, setSee] = useState(false)

    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLoginUser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const tokenEmail = { email }

        userLogin(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire(
                    'Good job!',
                    'Successful login account',
                    'success'
                )

                axios.post('http://localhost:5000/login', tokenEmail, { withCredentials: true })
                    .then(res => console.log(res.data))
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



    return (
        <div className="hero py-10 bg-[url(https://i.ibb.co/Kybz9h0/Stock-Snap-TEJEVWYFCK.jpg)] bg-cover bg-no-repeat h-[600px]">
            <div className="w-[40%]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
                </div>
                <div className="card   flex-shrink-0 w-[80%] mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginUser} className="card-body">
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
                                see ? <FaEye onClick={() => setSee(!see)} className="absolute right-3 bottom-12"></FaEye> :
                                    <FaEyeSlash onClick={() => setSee(!see)} className="absolute right-3 bottom-12"></FaEyeSlash>
                            }



                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here <Link className="font-semibold text-purple-700" to={'/registration'}>Create account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;