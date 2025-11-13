

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AllModel from "../Pages/ALLMODELPage/AllModel";
import AddModel from "../Pages/AddModelPage/AddModel";

import Home from "../Pages/HomePage/Home";
import Loging from "../Pages/AuthenticationPage/Loging";
import Regestration from "../Pages/AuthenticationPage/Regestration";
import PrivateRouter from "./PrivetRouter";
import MyPerchageModel from "../Pages/MYModelPage/MyPerchageModel";
import MyAddition from "../Pages/MYAddingModel/MyAddition";
import ViweDetails from "../Pages/ALLMODELPage/ViweDetails";
import UpdatetForm from "../Component/UpdatetForm";
import PathError from "../Component/PathError";


export  const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
index:true,
Component:Home,

},
            {
    path:'/allmodel',
element:<PrivateRouter><AllModel></AllModel></PrivateRouter>,

},
{
    path:'/addmodel',
element:<PrivateRouter><AddModel></AddModel></PrivateRouter>
},
{
    path:'/mypurchage',
element:<PrivateRouter><MyPerchageModel></MyPerchageModel></PrivateRouter>
},
{
    path:'/myAddingmodel',
element:<PrivateRouter><MyAddition></MyAddition></PrivateRouter>

},
{
path:'/updataeModel/:id',
element:<PrivateRouter><UpdatetForm></UpdatetForm></PrivateRouter>,

},

{
    path:'/loging',
    Component:Loging
},
{
    path:'/regestation',
    Component:Regestration
},
{

    path:'/modelDetails/:id',
element:<PrivateRouter><ViweDetails></ViweDetails></PrivateRouter>,

}


        ]
    },
     {
    path:'*',
    Component:PathError
  }

])