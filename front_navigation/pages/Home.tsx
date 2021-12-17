import React, {useState} from 'react';
import { useWindowDimensions} from 'react-native';
import Page_template from "../../Components/Page_template";
import Home_Hero from "../../Components/Home_Hero";
import Content from "../../Components/Content";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";


type Home_type =
{
    props: any;
    set_route: (value: string)=>void;
}


const Home =(
    {
        props,
        set_route

    }: Home_type)=>
{
    const window = useWindowDimensions();
    const [menuModal, set_menuModal] = useState(false);


            return(
                <>                                       
                            <Page_template 
                                menu=
                                {
                                    <Menu 
                                        window={window}
                                        props={props}
                                        set_route={ (value: string)=>set_route(value) }
                                        menuModal={menuModal}
                                        set_menuModal={set_menuModal}
                                    />
                                
                                }                            
                                hero=
                                {
                                    <Home_Hero 
                                        window={window}
                                        props={props}                                    
                                    />
                                }

                                content=
                                {
                                    <Content 
                                        window={window}
                                    />
                                }
                                footer=
                                {
                                    <Footer
                                        window={window}
                                        props={props}
                                        set_route={ (value: string)=>set_route(value) }
                                    />
                                }
                                props={props}
                                touchable_opacity={()=>{ if(menuModal){ set_menuModal(false) } }}
                                menuModal={menuModal}
                            />

                    
                </>
            )
        

}



export default Home;