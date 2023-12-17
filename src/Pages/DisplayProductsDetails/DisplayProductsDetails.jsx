import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAxiosPublic from '../../Hooks/AxiosPublic/UseAxiosPublic';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import useFeatureProducts from '../../Hooks/useFeature/useFeatureProducts';
import DisplayProducts from '../../Components/DispalyProducts/DisplayProducts';

const DisplayProductsDetails = () => {
    const { id } = useParams()
    const [feature] = useFeatureProducts()
    const [brand, setBrand] = useState([])

    const [product, setProduct] = useState([])
    const axiosPublic = UseAxiosPublic()

    useEffect(() => {
        axiosPublic.get(`/productDetail/${id}`)
            .then(res => setProduct(res.data))
    }, [id, axiosPublic, setProduct])

    useEffect(() => {
        const brandName = feature?.filter(i => i.brand === product?.brand)
        setBrand(brandName)
    }, [axiosPublic, feature, product])



    return (
        <div className='my-20'>
            <div className=" flex flex-col justify-center md:flex-row  mx-auto md:items-center">
                <div className='w-1/2'>
                    <img className='w-[400px] rounded-lg h-[300px] mx-auto' src={product?.imageUrl} alt="Shoes" />
                </div>
                <div className=" w-1/2 space-y-2">
                    <h2 className="text-3xl font-bold">{product?.productName}</h2>
                    <p className='text-sm font-bold'>{product?.brand}</p>
                    <p>{product?.details}</p>
                    <p>Price: <span className='font-semibold'>${product?.price}</span></p>
                    <Rating
                        className='text-yellow-400 text-xl block'
                        placeholderRating={product?.rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <button className='btn btn-outline block'>Add To Cart</button>

                </div>
            </div>
            <div className='my-20'>
                <h2 className='text-2xl font-medium my-10'>Relevant Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10'>
                    {
                        brand.map(i => <DisplayProducts key={i._id} products={i}></DisplayProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisplayProductsDetails;