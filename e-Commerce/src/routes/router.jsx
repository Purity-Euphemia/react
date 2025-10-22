import {createBrowserRouter} from "react-router";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import AllProducts from "../components/AllProducts";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/products",
        element: <AllProducts />
    },
    {
        path:"/home",
        element:<HomePage/>
    }
])

export default router;
    