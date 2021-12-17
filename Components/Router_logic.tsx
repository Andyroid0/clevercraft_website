import React, {useEffect} from "react";


type Router_logic_type =
{
    props: any;
    route: any;
    Home: ()=>JSX.Element;
    PressKit: ()=>JSX.Element;
    Privacy_Policy: ()=>JSX.Element;
}

const Router_logic = (
    {
        props,
        route,
        Home,
        PressKit,
        Privacy_Policy

    }:Router_logic_type
)=>
{

    useEffect(
        ()=>{}, 
        [route]);

        return(
            <>
                {
                    (route == 'Home')?
                    
                        <Home/>
                    :

                    (route == 'PressKit')?

                        <PressKit/>

                    :

                    (route == 'Privacy_Policy')?

                        <Privacy_Policy/>
                    
                    :

                    <Home/>

                }
            </>
        )
}

export default Router_logic;