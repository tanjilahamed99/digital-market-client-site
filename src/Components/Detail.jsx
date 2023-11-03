import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Detail = () => {
    const { user } = useContext(AuthContext)
    const { name, brand, price, quality, photo } = useLoaderData()

    const newProduct = { name, brand, price, quality, photo, email: user.email }

    const handleAdd = newItem => {

        axios.post('http://localhost:5000/myproducts', newItem)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'You added a shirt',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div>
                <Link className="flex items-center text-white font-semibold gap-2" to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Go Beck</Link>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" flex gap-10  items-center text-white text-left shadow-xl p-10 mx-auto">
                        <img className='h-[300px] w-[300px]' src={photo} alt="Shoes" />
                        <div className="space-y-2 mt-3 font- text-xl">
                            <h2 className=" ">Name: <span className="font-semibold">{name}</span></h2>
                            <p className=' '>Brand: <span className="font-semibold">{brand}</span></p>
                            <div className=''>
                                <p className='mb-1'>Price: <span className="font-semibold">{price}Tk</span></p>
                                <p className=''>Quality: <span className="font-semibold">{quality}</span></p>
                            </div>
                            <button onClick={() => handleAdd(newProduct)} className="btn btn-outline mt-2 text-white">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;