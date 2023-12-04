import PropTypes from 'prop-types';

const SectionBanner = ({ tittle,subTittle }) => {
    return (
        <div className='bg-fixed hero h-[70vh] text-center bg-center bg-cover ' style={{ backgroundImage: 'url(https://i.ibb.co/2n7dHW0/clem-onojeghuo-c4pbb7y-NM2c-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='hero-content gap-3 flex-col text-white '>
                <h2 className='text-3xl  font-bold'>{tittle}</h2>
                <h2 className='text-sm font-bold '>{subTittle}</h2>
            </div>

        </div>
    );
};

SectionBanner.propTypes = {
  tittle:PropTypes.string, 
  subTittle:PropTypes.string 
}

export default SectionBanner;