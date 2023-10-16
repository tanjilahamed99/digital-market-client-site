import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {

    const [see, setSee] = useState(false)

    return (
        <div className="hero  py-10">
            <div className="w-[40%]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card   flex-shrink-0 w-[80%] mx-auto shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={see ? 'text' : "password"} placeholder="password" className="input input-bordered" required />

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