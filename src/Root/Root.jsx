import { Outlet } from "react-router-dom";
import Navbar from "../Root_component/Navbar";
import Footer from "../Root_component/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;