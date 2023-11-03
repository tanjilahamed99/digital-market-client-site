import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayShirt from "../Pages/Shirt/DisplayShirt";

const Shirt = () => {

    const [shirts, setShirts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/shirt')
            .then(res => res.json())
            .then(data => setShirts(data))
    }, [])

    return (
        <div className="mt-10">
            <p className=" text-center text-sm">--World best shirt--</p>
            <h1 className="text-2xl font-bold text-center my-2">Shirts</h1>
            <Link to={'/shirt'}> <button className="btn mx-auto flex btn-outline">Add Shirt</button></Link>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto items-center gap-10">
                {
                    shirts.map(shirt => <DisplayShirt shirts={shirts} key={shirt._id} shirt={shirt}></DisplayShirt>)
                }
            </div>
        </div>
    );
};

export default Shirt;