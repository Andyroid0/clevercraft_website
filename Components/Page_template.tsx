import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from '../config/styles';

type pageComponent =
{
    footer: JSX.Element;
    content: JSX.Element;
    menu: JSX.Element;
    hero: JSX.Element;
    props: any;
    touchable_opacity: (value: any)=>void;
    menuModal: any;
}

const Page_template = ({footer, content, menu, props, hero, touchable_opacity, menuModal}: pageComponent)=>
{
    return(
        <>
            { (menuModal) ? 
                <TouchableOpacity onPress={ (value: any)=>touchable_opacity(value) }>
                    <View style={styles.typical.container}>
                        {menu}
                        {hero}
                        {content}
                        {footer}
                        
                        <StatusBar style="auto" />
                    </View>
                </TouchableOpacity>
             :

             <View style={styles.typical.container}>
                {menu}
                {hero}
                {content}
                {footer}
                
                <StatusBar style="auto" />
            </View>
            }
        </>
    )
};

export default Page_template;