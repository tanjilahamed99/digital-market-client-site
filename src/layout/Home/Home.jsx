import { Helmet } from "react-helmet";
import KeenSlider from "../../Components/keenSlider";
import Featured from "../../Pages/Home/FetauredProducts/Featured";
import PopularProducts from "../../Pages/Home/PopualarProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home || StyleByte</title>
            </Helmet>
            <KeenSlider></KeenSlider>
            <Featured></Featured>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;