import { Link } from "react-router-dom";
import DisplayProducts from "../../../Components/DispalyProducts/DisplayProducts";
import useFeatureProducts from "../../../Hooks/useFeature/useFeatureProducts";
import SectionBanner from "../../../shared/sectionBanner/SectionBanner";

const Products = () => {

    const [feature] = useFeatureProducts()
    return (
        <div className="my-10">
            <SectionBanner subTittle={'Products'} tittle={"All Products"}></SectionBanner>
            <div data-aos="fade-up" className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    feature?.slice(0, 9).map(item => <DisplayProducts key={item._id} products={item}></DisplayProducts>)
                }
            </div>
            <Link to={'/products'}>
                <h2 className="text-center font-semibold btn btn-outline mx-auto flex w-fit">See More</h2>
            </Link>
        </div>
    );
};

export default Products;