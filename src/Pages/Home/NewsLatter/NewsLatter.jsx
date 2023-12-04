import { FaArrowRight } from "react-icons/fa";

const NewsLatter = () => {
    return (
        <div className="hero h-[70vh] my-10" style={{ backgroundImage: 'url(https://i.ibb.co/51X7jsc/korie-cull-Iz-IME1jwj-CY-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div className="w-[60%] mx-auto">
                    <h1 className="mb-5 text-3xl font-medium">Sing up to our newsletter for all the latest news & discounts</h1>
                    <div className="flex justify-center items-center">
                        <input placeholder="E-mail Address" className=" w-1/2 py-3 focus:border-none pl-2 text-white border-b-2 border-white bg-black bg-opacity-10" type="text" />
                        <FaArrowRight className="text-white text-xl -ml-4"></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;