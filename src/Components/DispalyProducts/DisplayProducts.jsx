import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayProducts = ({ products }) => {

    const { productName, price, details, brand, imageUrl, rating, _id } = products

    return (
        <Link to={`/brandDetail/${_id}`}>
            <div className="card  bg-base-100 shadow-xl flex-grow-0 hover:bg-slate-100 hover:shadow-2xl ">
                <img className='w-[300px] h-[300px] mx-auto' src={imageUrl} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title font-bold">{productName}</h2>
                    <p className='text-sm font-bold'>{brand}</p>
                    <p>{details}</p>
                    <p>Price: <span className='font-semibold'>${price}</span></p>
                    <Rating
                        className='text-yellow-400 text-xl '
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />

                </div>
            </div>
        </Link>
    );
};

DisplayProducts.propTypes = {
    products: PropTypes.object
};

export default DisplayProducts;