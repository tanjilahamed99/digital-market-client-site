import { Link } from "react-router-dom";

const Add = () => {


    return (
        <div className=" h-[300px] container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center ">
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Beat Gaming Products</h2>
                    <div className=" grid grid-cols-2 gap-5 my-3 items-center">
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/cXyw73t/pngwing-com-10.png" alt="" />
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/gWX7pjs/pngwing-com-11.png" alt="" />
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/4mMjmPv/pngwing-com-12.png" alt="" />
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/VpcV1hB/pngwing-com-13.png" alt="" />
                    </div>
                    <Link to={'/gamingProducts'}><button className="btn btn-outline w-fit">See More</button></Link>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Toys under 24$</h2>
                    <img className=" w-full h-[250px] my-3 mx-auto" src="https://i.ibb.co/qr6vLWz/bunyamin-gorunmez-xe-Wv-NAbu0-Oo-unsplash.jpg" alt="Shoes" />
                    <div className=" space-y-2">
                        <h2 className="card-title"></h2>
                        <div className="card-actions">
                            <button className="btn btn-outline">See More</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Beauty Products</h2>
                    <img className="w-full h-[250px] my-3  mx-auto" src="https://i.ibb.co/HKc2Mw2/beauty-product-composition-with-palm-leaf.jpg" alt="Shoes" />
                    <div className=" space-y-2">
                        <div className="card-actions">
                            <button className="btn btn-outline">Shop Now</button>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">International Products</h2>
                    <div className=" grid grid-cols-2 gap-5 my-3 items-center">
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/JBhB7Q3/pngwing-com-14.png" alt="" />
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/pRS3Dc7/pngwing-com-15.png" alt="" />
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/dr6HGrV/pngwing-com-16.png" alt="" />
                        <img className="w-[120px] mx-auto" src="https://i.ibb.co/FVWL25J/pngwing-com-17.png" alt="" />
                    </div>
                    <button className="btn btn-outline w-fit">See More</button>
                </div>
                {/* card 5 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">World CLass Clothes</h2>
                    <img className=" w-full h-[250px] my-3 mx-auto" src="https://i.ibb.co/KsBFg83/clem-onojeghuo-c4pbb7y-NM2c-unsplash.jpg" alt="Shoes" />
                    <div className=" space-y-2">
                        <h2 className="card-title"></h2>
                        <div className="card-actions">
                            <Link to={'/cloth'}><button className="btn btn-outline">See More</button></Link>
                        </div>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Shoes</h2>
                    <img className="w-2/3 h-[250px] my-3  mx-auto" src="https://i.ibb.co/6nSNBXZ/pngwing-com-18.png" alt="Shoes" />
                    <div className=" space-y-2">
                        <div className="card-actions">
                            <button className="btn btn-outline">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Add;