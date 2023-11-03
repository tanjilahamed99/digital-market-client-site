import PropTypes from 'prop-types';
import { FaEye, FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayShirt = ({ shirt }) => {

    const { _id, name, price, quality, brand, photo } = shirt;
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