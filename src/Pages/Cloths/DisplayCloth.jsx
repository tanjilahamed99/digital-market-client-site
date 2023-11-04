import PropTypes from 'prop-types';

const DisplayCloth = ({ cloth }) => {
    const { price, seller, img, discount, desc } = cloth
    return (
        <div>
            <div className="card p-5 bg-blue-100 shadow-xl">
                <img className='h-[300px] w-[300px] mx-auto' src={img} alt="Shoes" />
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        <h2 className="btn btn-sm bg-red-500 text-white w-fit">{discount}% off</h2>
                        <p className='text-sm font-bold'>{seller}</p>
                    </div>
                    <h3 className='text-lg'>${price}</h3>
                    <p>{desc.slice(0, 70)}....</p>
                </div>
            </div>
        </div>
    );
};

DisplayCloth.propTypes = {
    cloth: PropTypes.object
};

export default DisplayCloth;