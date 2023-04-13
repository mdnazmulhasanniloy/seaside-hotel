import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import RoomCardDetails from "../Pages/RoomCardDetails/RoomCardDetails"
import PrivateRoutes from "./PrivateRoutes";
import AllUser from './../Pages/DashBoard/AdminAccess/AllUser/AllUser';
import MyBooking from "../Pages/DashBoard/UserAccess/MyBooking/MyBooking";
import PrivateRoutLogin from './../Pages/Login/PrivateRoutLogin';




export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<PrivateRoutLogin />
            },
            {
                path: `/details/:id`,
                loader: async ({ params }) => await fetch(`https://seaside-hotel-sarver.vercel.app/rooms/${params.id}`),
                element: <PrivateRoutes><RoomCardDetails /> </PrivateRoutes>
            },
            {
                path: '/allUsers',
                element: <AdminRouter><AllUser /></AdminRouter>
            },
            {
                path: '/myBooking',
                element: <PrivateRoutes><MyBooking /></PrivateRoutes>
            },
            
        ]
    }
])