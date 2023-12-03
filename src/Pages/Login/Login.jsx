import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import bgImage from '../../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'

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


    // const handleResetUserPassword = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const email = form.email.value
    //     console.log(email)
    // }


    return (
        <div className='hero  bg-cover bg-no-repeat h-[100vh]' style={{ backgroundImage: `url(${bgImage})` }} >

            <div className="hero-overlay bg-opacity-30"></div>

            <div className="w-[50%] shadow-2xl p-5 bg-white bg-opacity-10 rounded-xl">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[80%] mx-auto ">
                    <form onSubmit={handleLoginUser} className="card-body">
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
                                <span className="label-text text-white" >Password</span>
                            </label>
                            <input name="password" type={see ? 'text' : "password"} placeholder="password"
                                className="input border-none " required />
                            <hr className="border" />

                            {
                                see ? <FaEye onClick={() => setSee(!see)} className="absolute right-3 bottom-12"></FaEye> :
                                    <FaEyeSlash onClick={() => setSee(!see)} className="absolute right-3 bottom-12"></FaEyeSlash>
                            }



                            <label className="label">
                                <a href="#" className="label-text-alt link text-white link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-white">New here <Link className="font-semibold text-black" to={'/registration'}>Create account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;