import React from 'react';
import { Image, StyleSheet, ImageRequireSource, View } from 'react-native';


type deck_view_type =
{
    props: any;
    source: ImageRequireSource;
};

const Deck_view = ({props, source}: deck_view_type)=>
{
    return(
        <View style={style.box}>
            <Image source={source} style={style.img} />
            <View style={style.gold_bar}/>
        </View>
        
    )
};

const style =
StyleSheet.create(
    {
        img:
        {
            width: '100%',
            minWidth: 400,
            height: '100%',
            resizeMode: 'contain',
            marginTop: 8,
            borderColor: 'orange',
            borderBottomWidth: 5,
        },

        box:
        {
            width: 400,
            height: 600,
            borderWidth: 0,
            borderColor: '#25222e',
            borderRadius: 12,
            margin: 0,
            flexDirection: 'row',
            overflow: 'hidden',
            alignItems: 'center',
    
        },

        gold_bar:
        {
            height: 48,
            width: '100%',
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: 8

        }
    }
);

export default Deck_view;