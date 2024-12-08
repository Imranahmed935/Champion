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
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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
                element:<AddEquipment/>
            },
            {
                path:'/allEquipment',
                element:<AllEquipment/>,
                loader:()=> fetch('http://localhost:5000/addEquipment')
            },
            {
                path:'/addEquipment/:id',
                element:<VeiwDetails/>,
                loader:({params})=> fetch(`http://localhost:5000/addEquipment/${params.id}`)
            }
            ,{
                path:'/myEquipment',
                element:<MyEquipment></MyEquipment>,
                loader: ()=> fetch('http://localhost:5000/addEquipment')
            },
            {
                path:'/update',
                element:<Update/>
            },
            {
                path:'/aboutUs',
                element:<AboutUs/>
            },
            {
                path:'/contactUs',
                element:<ContactUs/>
            }
        ]
    }

])

export default router