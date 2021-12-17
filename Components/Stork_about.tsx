import React from 'react';
import {View, Text, Image, StyleSheet, ImageComponent} from 'react-native';
import styles from '../config/styles';
import Svg, {Path} from 'react-native-svg'
import About_view, {About_block, imageOn} from './About_view';


const data: Array<About_block>=
[
    {
        image: require('../assets/abouts/Blocks.png'),
        title: "Keep it Simple.",
        description: "No complicated setup or third party services to connect! It just works! You can count on it!",
        backgroundColor: '',
        orientation: imageOn.Right,
        window: null,
    },

    {
        image: require('../assets/abouts/Team.png'),
        title: 'Teams on the Cloud +',
        description: "Moms, Dads, Guardians, sitters, and the Grandest of Parents can all record and read from the same Timeline. But only when you say they can, with the powerful Stork Notes scheduling system!",
        backgroundColor: '',
        orientation: imageOn.Left,
        window: null,
    },

    {
        image: require('../assets/abouts/Advertise.png'),
        title: 'No Advertisements.',
        description: "We'll NEVER bug you with ads... Or worse sell your data to those that would!",
        backgroundColor: '',
        orientation: imageOn.Right,
        window: null,
    },

    {
        image: require('../assets/abouts/Night_mode.png'),
        title: 'Dark Mode Forever!',
        description: "Don't worry about a bright phone screen rousing baby during night feedings. Dark mode default to the rescue!",
        backgroundColor: '',
        orientation: imageOn.Left,
        window: null,
    },

    {
        image: require('../assets/abouts/Security.png'),
        title: 'Security Built In.',
        description: "No sensitive information is ever collected and Event data is cleared every 48 hours. Sorry hackers, there's nothing to breach!",
        backgroundColor: '',
        orientation: imageOn.Right,
        window: null,
    },


];

// =====================================================

const Stork_about = ({window, props}: any)=>
{
    return(
        <>
            <About_factory window={window}/>
        </>
    )
};

// =====================================================



const About_factory = ({props, window,}: any)=>
{


    var array_return: Array<JSX.Element> = [];
    array_return.length = 0;

    data.forEach((item)=>
    {
        array_return.push(
            <About_view
                image={item.image} 
                title={item.title}
                description={item.description} 
                backgroundColor={item.backgroundColor}
                orientation={item.orientation}
                window={window}             
            />
        )
    });
    return (
        <View style={style.box}>
            <View style={[style.content, {width: '100%'}]}>

                {array_return}

            </View>
        </View>   
    )

};

const style =
StyleSheet.create(
{
    box:
    {
        backgroundColor: '#25222e',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'

    },

    content:
    {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },

});

export default Stork_about;

//        flexWrap: 'wrap',
