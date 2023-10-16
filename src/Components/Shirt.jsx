import { Link } from "react-router-dom";

const Shirt = () => {
    return (
        <div className="mt-10">
            <p className=" text-center text-sm">--World best shirt--</p>
            <h1 className="text-2xl font-bold text-center my-2">Shirts</h1>
            <Link to={'/shirt'}> <button className="btn mx-auto flex btn-outline">Add Shirt</button></Link>

        </div>
    );
};

export default Shirt;