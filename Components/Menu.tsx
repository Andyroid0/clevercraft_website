import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, TouchableWithoutFeedback} from 'react-native';
import styles from '../config/styles';
import { FontAwesome } from '@expo/vector-icons';


type Menu_type =
{
    window: any;
    props: any;
    set_route: (value: string)=>void;
    set_menuModal: (value: boolean)=>void;
    menuModal: boolean;
};

 type Menu_links_type =
 {
    set_route: (value: string)=>void;
    menuModal: boolean;
 };



const Menu_links = ({set_route, menuModal}: Menu_links_type )=>
{
    return(
        <>
            {
                (menuModal)?
                <View style={{padding: '10%', alignItems: 'center'}}>
                    <Pressable onPress={ ()=>{ set_route('Home'); }}> <Text style={style.menu_text}> Home </Text> </Pressable>
                                
                    {/*<Text style={style.menu_text}> Products </Text>
                    <Text style={style.menu_text}> About </Text>*/}

                    <Pressable onPress={ ()=>{ set_route('PressKit'); } }><Text style={style.menu_text}> Press Kit </Text></Pressable>
                </View>
                :
                <>
                    <Pressable onPress={ ()=>{ set_route('Home'); }}> <Text style={style.menu_text}> Home </Text> </Pressable>
                                    
                    {/*<Text style={style.menu_text}> Products </Text>
                    <Text style={style.menu_text}> About </Text>*/}

                    <Pressable onPress={ ()=>{ set_route('PressKit'); } }><Text style={style.menu_text}> Press Kit </Text></Pressable>
                </>
                
            }
        </>
    );
};


const Menu =({ window, props, set_route, set_menuModal, menuModal}: Menu_type)=>
{
    

    return(  
        <> 
        <View style={style.head}>
            <View style={{flexDirection: 'row', marginHorizontal: '2%'}}> 

                <Image source={require('../assets/icon.png')} style={{width: 48, height: 48, marginHorizontal: 7, marginBottom: 0}}/>
                <Text style={[style.title, {marginTop: 6}]}>CleverCraft</Text>

                {
                (window.width <= 650)?
                <>
                    <View style={{flex:1}}/>
                        <Pressable onPress={()=>{set_menuModal(!menuModal);}}><FontAwesome name="bars" size={36} color="white" style={{marginHorizontal: '3%', marginBottom: 2, opacity: .9}}/></Pressable>
                </>

                :

                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}> 
                    
                        <Menu_links set_route={ (value: string)=>set_route(value) } menuModal={menuModal}/>

                    </View>
                }


            </View>
            
        </View>

                {
                    (menuModal)?

                    <View style={{flexDirection: 'row', width: '100%'}}>

                        <View style={{flex:1}}/>
                        
                            <View style={style.modal}>
                                <TouchableWithoutFeedback>
                                    <Menu_links set_route={ (value: string)=>set_route(value) } menuModal={menuModal}/>
                                </TouchableWithoutFeedback>
                            </View>
                        

                    </View>
                    :
                    <></>
                }

        </>
    )
};


const style =
StyleSheet.create(
{
    head:
    {
        backgroundColor: 'rgba(0,0,0, .9)',
        width: '100%',
        height: '5rem',
        alignSelf: 'center',
        justifyContent: 'center',
    
    },

    modal:
    {
        width: '100%',
        height: '15rem',
        backgroundColor: 'rgba(0,0,0, .88)',
        alignItems: 'center'
    },

    title:
    {
        fontWeight: '700',
        color: 'white',
        fontSize: 24,
        opacity: .8
    },

    menu_text:
    {
        fontWeight: '300',
        fontSize: 18,
        color: 'white',
        marginVertical: 8
    },

});

export default Menu;