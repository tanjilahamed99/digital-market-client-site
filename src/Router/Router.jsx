import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Shirt from "../Pages/Shirt/AddShirt";
import Detail from "../Components/Detail";
import Update from "../Components/update";

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
                element: <Shirt></Shirt>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/shirt/${params.id}`)
            },
            {
                path: '/detail/:id',
                element: <Detail></Detail>,
                loader: ({ params }) => fetch(`http://localhost:5000/shirt/${params.id}`)
            },
        ]
    }
])

export default Router;