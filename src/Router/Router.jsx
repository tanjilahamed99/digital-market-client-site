import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddShirt from "../Pages/Shirt/AddShirt";
import Detail from "../Components/Detail";
import Update from "../Components/update";
import PrivateRoute from "./PrivateRoute";
import CustomerProducts from "../Pages/CustomerProducts/CustomerProducts";
import GamingProducts from "../Pages/Gaming Products/GamingProducts";
import Clothes from "../Pages/Cloths/Clothes";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/shirt',
                element: <AddShirt></AddShirt>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute> <Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/shirt/${params.id}`)
            },
            {
                path: '/detail/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/shirt/${params.id}`)
            },
            {
                path: '/customerProducts',
                element: <PrivateRoute><CustomerProducts></CustomerProducts></PrivateRoute>
            },
            {
                path: '/gamingProducts',
                element: <GamingProducts></GamingProducts>
            },
            {
                path: '/cloth',
                element: <Clothes></Clothes>
            },
        ]
    }
])

export default Router;