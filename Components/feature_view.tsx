import React from 'react';
import {View, Text, Image, StyleSheet, ListRenderItem, ImageRequireSource} from 'react-native';
import styles from '../config/styles';
import { FontAwesome } from '@expo/vector-icons';

type feature =
{
    icon: ImageRequireSource;
    title: string;
    description: string;
    backgroundColor: string;
};


export const Feature_view = ({icon, title, description, backgroundColor}: feature) =>
{
    return(
        <View style={[style.box, {backgroundColor: backgroundColor}]}>

{/* =========================================================== */}

            {/* Icon */}
            <View style={{flexDirection: 'column'}}>
                <Image style={style.icon} source={icon}/>
            </View>

            {/* Content */}
            <View style={style.content}>

                {/* Title */}
                <View style={{flexDirection: 'row'}}>
                    <Text style={style.title}>{title}</Text>
                </View>

                {/* Description */}
                <View style={[{flexDirection: 'row'}, {marginLeft: 4}]}>
                    <Text style={style.description}>{description}</Text>
                </View>

            </View>

{/* =========================================================== */}
        </View>
    )
};


const style =
StyleSheet.create(
{
    box:
    {
        width: 380,
        maxHeight: 120,
        borderWidth: 0,
        borderColor: '#25222e',
        borderRadius: 12,
        margin: 24,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center'

    },

    icon:
    {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginTop: 4,
        
    },

    title:
    {
        color: 'rgba(0,0,0, .7)',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
        textAlign: 'left' 
        
    },

    description:
    {
        color: 'rgba(0,0,0, .8)',
        textAlign: 'left'
    },

    content:
    {
        flexDirection: 'column',
        alignItems: 'stretch',
        maxWidth: 290,
        flexWrap: 'wrap',
        marginLeft: 20,
        marginVertical: 4
    },

    icon_column:
    {

    }


});
