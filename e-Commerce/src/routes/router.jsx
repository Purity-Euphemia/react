import {createBrowserRouter} from "react-router";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

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
    }
])

export default router;
    