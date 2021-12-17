import React from 'react';
import {View, Text, Image, StyleSheet, ListRenderItem, ImageRequireSource} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export enum imageOn
{
    Left,
    Right
}

export type About_block =
{
    image: ImageRequireSource;
    title: string;
    description: string;
    backgroundColor: string;
    orientation: imageOn;
    window: any;
};

const About_view = ({image, title, description, backgroundColor, orientation, window }: About_block)=>
{


    return(
        <View style={[style.box, {backgroundColor: backgroundColor}]}>
            
                {
                    (orientation === imageOn.Left)?

                        <Left image={image} title={title} description={description} />

                    :

                    (orientation === imageOn.Right)?

                        <Right image={image} title={title} description={description} window={window}/>

                    :

                    <></>
                }
        </View>
    )
};

const Left = ({image, title, description}: any)=>
{
    return(
        <>

                <Image style={style.image} source={image}/>
                
                <View style={style.Text_block}>

                    <Text style={style.title}>{title}</Text>
                    <Text style={style.description}>{description}</Text>

                </View>


        </>
    )
};

const Right = ({image, title, description, window}: any)=>
{

    return(
        <>

            {   
                (window.width < 970) ? 
                <> 
                    <Image style={style.image} source={image}/>

                    <View style={style.Text_block}>

                        <Text style={style.title}>{title}</Text>
                        <Text style={style.description}>{description}</Text>

                    </View>

                    
                </>
                :
                <>
                    <View style={style.Text_block}>

                        <Text style={style.title}>{title}</Text>
                        <Text style={style.description}>{description}</Text>

                    </View>

                    <Image style={style.image} source={image}/>
                </>
            }

        </>
    )
};




const style =
StyleSheet.create(
{
    box:
    {
        width: '100%',
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginVertical: 24,
        paddingVertical: 36
    },

    image:
    {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginHorizontal: 16,
    },

    title:
    {
        color: 'rgba(255,255,255, .7)',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 48,
        textAlign: 'left' 
        
    },

    description:
    {
        color: 'rgba(255,255,255, .8)',
        textAlign: 'left',
        maxWidth: 400,
        minWidth: 400
    },

    content:
    {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    Text_block:
    {
        flexDirection: 'column',
        alignSelf: 'center',
        marginHorizontal: 36
    }

});

export default About_view;
