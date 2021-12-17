import React, {useState} from 'react';
import { useWindowDimensions} from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';

import Page_template from "../../Components/Page_template";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import Content_PressKit from '../../Components/Content_PressKit';
import PressKit_Hero from '../../Components/PressKit_Hero';

type PressKit_type =
{
    props: any;
    set_route: (value: string)=>void;

}

const PressKit = (
    {
        props,
        set_route,

    }: PressKit_type
)=>
{
    const window = useWindowDimensions();
    const [menuModal, set_menuModal] = useState(false);

            return(
                <>

                    <Page_template
                        props={props}
                        menu=
                        {
                            <Menu
                                window={window}
                                props={props}
                                set_route={ (value: string)=>set_route(value) }
                                menuModal={menuModal}
                                set_menuModal={(value: boolean)=>set_menuModal(value)}
                            />
                        }
                        hero={<PressKit_Hero window={window} props={props}/>}
                        content={
                            <Content_PressKit props={props} window={window}/>
                        }
                        footer=
                        {
                            <Footer
                            window={window}
                            props={props}
                            set_route={ (value: string)=>set_route(value) }
                            />
                        }
                        touchable_opacity={()=>{ if(menuModal){set_menuModal(false);}}}
                        menuModal={menuModal}
                    />
                
                </>
            )
        
    
    

}


export default PressKit;