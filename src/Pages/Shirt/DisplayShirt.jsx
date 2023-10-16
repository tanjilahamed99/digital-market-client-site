import PropTypes from 'prop-types';
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEye, FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DisplayShirt = ({ shirt, setShirts, shirts }) => {

    const { _id, name, price, quality, brand, photo } = shirt;

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/shirt/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Good job!',
                                'shirt delete dane',
                                'delete'
                            )
                            const reaming = shirts.filter(item => item._id !== _id)
                            setShirts(reaming)
                        }
                    })
            }
        })
    }

    return (
        <div className="card  bg-base-100 shadow-xl p-5 mx-auto">
            <img className='h-[300px] w-[300px]' src={photo} alt="Shoes" />
            <div className="space-y-2 mt-3">
                <h2 className="card-title font-bold  text-2xl">{name}</h2>
                <p className='font-semibold text-sm'>{brand}</p>
                <div className='flex gap-5'>
                    <p className='text-lg font-semibold'>Price: <span className='text-gray-500'>{price}TK</span></p>
                    <p className='text-lg font-semibold'>Quality: <span className='text-gray-500'>{quality}</span></p>
                </div>
                <div className='flex gap-4 pt-2'>
                    <Link to={`/detail/${_id}`}>
                        <div className='p-2 bg-red-500 text-white rounded-lg'>
                            <FaEye></FaEye>
                        </div>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <div className='p-2 bg-black text-white rounded-lg'>
                            <FaPen></FaPen>
                        </div>
                    </Link>
                    <div onClick={() => handleDelete(_id)} className='p-2 bg-orange-500 text-white rounded-lg'>
                        <AiTwotoneDelete></AiTwotoneDelete>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayShirt.propTypes = {
    shirt: PropTypes.object,
    shirts: PropTypes.array,
    setShirts: PropTypes.func
};

export default DisplayShirt;