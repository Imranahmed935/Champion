import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddEquipment from "../Pages/AddEquipment";
import AllEquipment from "../Pages/AllEquipment";
import VeiwDetails from "../Components/VeiwDetails";

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
                path:'/allEquipment/:id',
                element:<VeiwDetails/>,
                loader:({params})=> fetch(`http://localhost:5000/addEquipment/${params.id}`)
            }
        ]
    }

])

export default router