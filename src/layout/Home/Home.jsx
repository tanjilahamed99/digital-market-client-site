import { Helmet } from "react-helmet";
import KeenSlider from "../../Components/keenSlider";
import Featured from "../../Pages/Home/FetauredProducts/Featured";
import PopularProducts from "../../Pages/Home/PopualarProducts/PopularProducts";
import Products from "../../Pages/Home/Products/Products";
import Trust from "../../Pages/Home/Trust/Trust";
import NewsLatter from "../../Pages/Home/NewsLatter/NewsLatter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home || StyleByte</title>
            </Helmet>
            <KeenSlider></KeenSlider>
            <Featured></Featured>
            <Trust></Trust>
            <PopularProducts></PopularProducts>
            <Products></Products>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;