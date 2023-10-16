import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shirt = () => {
    return (
        <div>
            <Link className="flex items-center font-semibold gap-2" to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Go Beck</Link>

            <div>
                <h2 className="text-center text-3xl font-bold mt-10">Add Shirts</h2>
                <p className="text-center px-[400px] mt-3">When you add any shirt to your cart on our digital shop website, you will experience a seamless shopping journey.</p>
                <div className="grid gap-5 justify-center grid-cols-2 mx-auto w-[50%] mt-10">
                    <div>
                        <h2>Shirt name</h2>
                        <input type="text" placeholder=" Ex: denim" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <h2>Shirt Brand</h2>
                        <input type="text" placeholder="Ex: easy" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <h2>Shirt price</h2>
                        <input type="text" placeholder="Ex: 2000" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <h2>Shirt quality</h2>
                        <input type="text" placeholder="Ex: premium" className="input input-bordered w-full " />
                    </div>
                    <div className="col-span-2">
                        <h2>Shirt image</h2>
                        <input type="text" placeholder="https://" className="input input-bordered w-full " />
                    </div>
                    <button className="btn col-span-2">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Shirt;