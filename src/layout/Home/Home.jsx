import { Helmet } from "react-helmet";
import KeenSlider from "../../Components/keenSlider";
import Featured from "../../Pages/Home/FetauredProducts/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home || StyleByte</title>
            </Helmet>
            <KeenSlider></KeenSlider>
            <Featured></Featured>
        </div>
    );
};

export default Home;