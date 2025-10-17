import {createBrowserRouter} from "react-router";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import AllProducts from "../component/AllProducts";
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
    }
])

export default router;
    