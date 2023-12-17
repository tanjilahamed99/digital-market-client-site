import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import { Link } from "react-router-dom";

const Brands = () => {
    return (
        <div className="my-20">
            <SectionTittle subTittle={'Brands'} tittle={"Popular Brands"}></SectionTittle>
            <div className="grid grid-cols-4 items-center  my-10">
                <Link to={`/brands/${'Adidas'}`} className="col-span-3  w-full">
                    <img className=" h-[300px]  w-full" src="https://i.ibb.co/9hmWysy/download-1.png" alt="" />
                </Link>
                <Link to={`/brands/${'Calvin Klein'}`}>
                    <img className=" h-[300px] mx-auto  w-full" src="https://i.ibb.co/6Xhns5T/download-2.png" alt="" />
                </Link>
                <Link to={`/brands/${'ZARA'}`}>
                    <img className=" h-[300px] mx-auto w-full" src="https://i.ibb.co/yXDBNnZ/download-3.png" alt="" />
                </Link>
                <Link to={`/brands/${'Gucci'}`} className="col-span-3 w-full"> 
                    <img className=" h-[300px] mx-auto col-span-3 w-full" src="https://i.ibb.co/Lhs8gY4/download.jpg" alt="" />
                </Link>
                <Link to={`/brands/${'Louis Vuitton'}`} className="col-span-2">
                    <img className=" h-[300px] mx-auto w-full" src="https://i.ibb.co/sy8bdD8/download.jpg" alt="" />
                </Link>
                <Link to={`/brands/${'Prada'}`} className="col-span-2">
                    <img className=" h-[300px] mx-auto w-full " src="https://i.ibb.co/g6jFm0f/download-5.png" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Brands;




{/* <img src="" alt="download-1" border="0">
<img src="" alt="download-2" border="0">
<img src="" alt="download-3" border="0">
<img src="" alt="download-4" border="0">
<img src="" alt="download" border="0">
<img src="" alt="download" border="0"></img> */}