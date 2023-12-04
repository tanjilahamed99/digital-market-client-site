import Marquee from "react-fast-marquee";
import useFeatureProducts from "../../../Hooks/useFeature/useFeatureProducts";
import SectionTittle from "../../../shared/SectionTittle/SectionTittle";

const PopularProducts = () => {

    const [feature] = useFeatureProducts()

    return (
        <div className="my-20">
            <SectionTittle subTittle={'Popular'} tittle={'Popular Products'}></SectionTittle>
            <Marquee >
                {
                    feature?.map(item => <div className="mx-10 shadow-xl " key={item._id}><img className="w-[200px] h-[200px]  p-5" src={item?.imageUrl}></img> <h2 className="text-center font-bold text-sm">{item?.productName}</h2></div>)
                }
            </Marquee>
        </div>
    );
};

export default PopularProducts;