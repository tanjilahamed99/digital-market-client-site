import Add from "../../Components/Add";
import Model from "../../Components/Model";
import Shirt from "../../Components/Shirt";
import KeenSlider from "../../Components/keenSlider";

const Home = () => {
    return (
        <div>
            <div className="relative mb-52">
                <KeenSlider></KeenSlider>
                <div className="absolute top-[400px] w-full ">
                    <Add></Add>
                </div>
            </div>

            <Shirt></Shirt>
            <Model></Model>
        </div>
    );
};

export default Home;