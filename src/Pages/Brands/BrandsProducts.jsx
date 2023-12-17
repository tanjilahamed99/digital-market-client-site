import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/AxiosPublic/UseAxiosPublic";
import useFeatureProducts from "../../Hooks/useFeature/useFeatureProducts";
import DisplayProducts from "../../Components/DispalyProducts/DisplayProducts";

const BrandsProducts = () => {
    const { name } = useParams()
    const [brand, setBrand] = useState([])
    const axiosPublic = UseAxiosPublic()
    const [feature] = useFeatureProducts()
    useEffect(() => {
        const brandName = feature?.filter(i => i.brand === name)
        setBrand(brandName)
    }, [axiosPublic, name, feature])

    console.log(name, brand)

    return (
        <div className="my-20">
            <h2 className="text-center text-3xl font-semibold my-5">{name}</h2>
            <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 lg:grid-cols-3">
                {
                    brand?.map(i => <DisplayProducts key={i._id} products={i}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default BrandsProducts;