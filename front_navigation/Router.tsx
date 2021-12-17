import React, {useState} from "react";
import {View} from 'react-native'
import Front_parent from "./Front_Parent";
import Home from "./pages/Home";
import PressKit from "./pages/PressKit";
import Router_logic from "../Components/Router_logic";
import Privacy_Policy from "./pages/Privacy_Policy";



const Router = ({route, props}:any)=>
{
    const [route_, set_route] = useState(route.name);


            return(
            <Router_logic
                props={props}
                Home={()=><Home props={props} set_route={ (value: string)=>set_route(value) }/>}
                PressKit={()=><PressKit props={props} set_route={ (value: string)=>set_route(value) }/>}
                route={route_}
                Privacy_Policy={()=><Privacy_Policy props={props} set_route={ (value: string)=>set_route(value) }/>}
            />)
   
}
export default Router;