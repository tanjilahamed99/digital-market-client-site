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
                    feature?.map(item => <img className="w-[200px] h-[200px] mx-10" key={item._id} src={item?.imageUrl}></img>)
                }
            </Marquee>
        </div>
    );
};

export default PopularProducts;