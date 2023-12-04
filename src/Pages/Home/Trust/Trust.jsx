import { FaCarSide, FaGift } from "react-icons/fa"
import { RiSecurePaymentLine } from "react-icons/ri"
import { IoIosReturnLeft } from "react-icons/io"

const Trust = () => {
    return (
        <div className="flex items-center justify-between border-y-2 border-black py-10 px-5 ">
            <div className="flex items-center gap-3 px-5 border-x-2 border-black">
                <FaCarSide className="text-4xl"></FaCarSide>
                <h2 className=" text-xl">FIRST DELIVERY</h2>
            </div>
            <div className="flex items-center gap-3 px-5 border-x-2 border-black">
                <IoIosReturnLeft className="text-4xl"></IoIosReturnLeft>
                <h2 className=" text-xl">FREE RETURN</h2>
            </div>
            <div className="flex items-center gap-3 px-5 border-x-2 border-black">
                <RiSecurePaymentLine className="text-4xl "></RiSecurePaymentLine>
                <h2 className=" text-xl">SECURE CHECKOUT</h2>
            </div>
            <div className="flex items-center gap-3 px-5 border-x-2 border-black">
                <FaGift className="text-4xl"></FaGift>
                <h2 className=" text-xl">FIRST DELIVERY</h2>
            </div>
        </div>
    );
};

export default Trust