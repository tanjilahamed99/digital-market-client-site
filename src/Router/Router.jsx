import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Home from "../layout/Home/Home";
import Products from "../Pages/Products/Products";
import BrandsProducts from "../Pages/Brands/BrandsProducts";
import DisplayProductsDetails from "../Pages/DisplayProductsDetails/DisplayProductsDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/brandDetail/:id',
                element: <PrivateRoute><DisplayProductsDetails></DisplayProductsDetails></PrivateRoute>
            },
            // {
            //     path: '/customerProducts',
            //     element: <PrivateRoute><CustomerProducts></CustomerProducts></PrivateRoute>
            // },
            // {
            //     path: '/gamingProducts',
            //     element: <GamingProducts></GamingProducts>
            // },
            // {
            //     path: '/cloth',
            //     element: <Clothes></Clothes>
            // },
            {
                path: '/brands/:name',
                element: <BrandsProducts></BrandsProducts>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },
])

export default Router;