import useFeatureProducts from "../../../Hooks/useFeature/useFeatureProducts";

const Featured = () => {

    const [feature] = useFeatureProducts()

    return (
        <div className="my-20">
            <h2>{feature?.length}</h2>
            <h2>this is featured section</h2>
        </div>
    );
};

export default Featured;