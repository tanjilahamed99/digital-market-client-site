import PropTypes from 'prop-types';

const DisplayProducts = ({ products }) => {

    const { productName, price, details, brand,imageUrl } = products

    return (
        <div className="card  bg-base-100 shadow-xl flex-grow-0">
            <img className='w-[300px] h-[300px] mx-auto' src={imageUrl} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className='text-sm font-bold'>{brand}</p>
                <p>{details}</p>
                <p>Price: <span className='font-semibold'>${price}</span></p>
            </div>
        </div>
    );
};

DisplayProducts.propTypes = {
    products: PropTypes.object
};

export default DisplayProducts;