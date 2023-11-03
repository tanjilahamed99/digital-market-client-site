import PropTypes from 'prop-types';
import { AiTwotoneDelete } from 'react-icons/ai';

const DisplayProducts = ({ product, handleDelete }) => {
    const { _id, name, price, quality, brand, photo } = product

    return (
        <div className="card  bg-base-100 shadow-xl p-5 mx-auto">
            <img className='h-[300px] w-[300px]' src={photo} alt="Shoes" />
            <div className="space-y-2 mt-3">
                <h2 className="card-title font-bold  text-2xl">{name}</h2>
                <p className='font-semibold text-sm'>Brand: {brand}</p>
                <div className='flex gap-5'>
                    <p className='text-lg font-semibold'>Price: <span className='text-gray-500'>{price}TK</span></p>
                    <p className='text-lg font-semibold'>Quality: <span className='text-gray-500'>{quality}</span></p>
                </div>
                <div onClick={() => handleDelete(_id)} className='p-2 bg-orange-500 text-white rounded-lg'>
                    <AiTwotoneDelete className='mx-auto'></AiTwotoneDelete>
                </div>
            </div>
        </div>
    );
};

DisplayProducts.propTypes = {
    product: PropTypes.object,
    handleDelete: PropTypes.func
};

export default DisplayProducts;