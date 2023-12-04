import DisplayProducts from "../../Components/DispalyProducts/DisplayProducts";
import useFeatureProducts from "../../Hooks/useFeature/useFeatureProducts";
import SectionBanner from "../../shared/sectionBanner/SectionBanner";

const Products = () => {
    const [feature] = useFeatureProducts()
    return (
        <div>
            <SectionBanner subTittle={'Products'} tittle={'All Products'}></SectionBanner>
            <div data-aos="fade-up" className="grid my-10 items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    feature?.map(item => <DisplayProducts key={item._id} products={item}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Products;