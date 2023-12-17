import DisplayProducts from "../../../Components/DispalyProducts/DisplayProducts";
import useFeatureProducts from "../../../Hooks/useFeature/useFeatureProducts";
import SectionTittle from "../../../shared/SectionTittle/SectionTittle";

const Featured = () => {

    const [feature] = useFeatureProducts()

    return (
        <div data-aos="fade-up" className="my-20">
            {/* <div ></div> */}
            <SectionTittle subTittle={'Latest'} tittle={'Latest Products'}></SectionTittle>
            <div className="grid grid-cols-1 items-center gap-10  md:grid-cols-2 lg:grid-cols-3 ">
                {
                    feature?.slice(0, 6).map(item => <DisplayProducts key={item._id} products={item}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Featured;