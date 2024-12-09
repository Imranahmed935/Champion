import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddEquipment from "../Pages/AddEquipment";
import AllEquipment from "../Pages/AllEquipment";
import VeiwDetails from "../Components/VeiwDetails";
import MyEquipment from "../Pages/MyEquipment";
import Update from "../Pages/Update";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home></Home>,

            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/addEquipment',
                element:<PrivateRoute><AddEquipment/></PrivateRoute>
            },
            {
                path:'/allEquipment',
                element:<AllEquipment/>,
                loader:()=> fetch('https://champion-choice-server.vercel.app/addEquipment')
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><VeiwDetails/></PrivateRoute>,
                loader:({params})=> fetch(`https://champion-choice-server.vercel.app/addEquipment/${params.id}`)
            }
            ,{
                path:'/myEquipment',
                element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
                loader: ()=> fetch('https://champion-choice-server.vercel.app/addEquipment')
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><Update/></PrivateRoute>,
                loader: ({params}) => fetch(`https://champion-choice-server.vercel.app/addEquipment/${params.id}`)
            },
            {
                path:'/aboutUs',
                element:<AboutUs/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }

])

export default router