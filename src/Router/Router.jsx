import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Detail from "../Components/Detail";
import PrivateRoute from "./PrivateRoute";
import Home from "../layout/Home/Home";
import Products from "../Pages/Products/Products";
import BrandsProducts from "../Pages/Brands/BrandsProducts";

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
                path: '/detail/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/shirt/${params.id}`)
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