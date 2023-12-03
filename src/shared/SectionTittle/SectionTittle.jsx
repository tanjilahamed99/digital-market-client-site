import PropTypes from 'prop-types';

const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className='text-center my-4'>
            <h2 className='text-3xl font-semibold'>{tittle}</h2>
            <p className='text-sm font-bold mt-2'>{subTittle}</p>
        </div>
    );
};

SectionTittle.propTypes = {
    tittle: PropTypes.string,
    subTittle: PropTypes.string,
};

export default SectionTittle;