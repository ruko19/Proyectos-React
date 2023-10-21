import { useRoutes } from "react-router-dom"
import Home from './Pages/Home/Home'
import MyOrders from "./Pages/MyOrders/MyOrders"
import MyAccount from "./Pages/MyAccount/MyAccount"
import MyOrder from "./Pages/MyOrder/MyOrder"
import Signin from "./Pages/Signin/Signin"
import NotFound from "./Pages/NotFound/NotFound"

export const AppRoutes = () => {

    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/my-account", element: <MyAccount /> },
        { path: "/my-order", element: <MyOrder /> },
        { path: "/sign-in", element: <Signin /> },
        { path: "/*", element: <NotFound /> }
    ])
    return routes

}