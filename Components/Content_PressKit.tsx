import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Deck_view from './deck_view';

const data =
[
    {
        source: require('../assets/PressKit/deck/1.png')
    },
    {
        source: require('../assets/PressKit/deck/2.png')
    },
    {
        source: require('../assets/PressKit/deck/3.png')
    },
    {
        source: require('../assets/PressKit/deck/4.png')
    },
    {
        source: require('../assets/PressKit/deck/5.png')
    }
];

const copy =
{
    desc:
    `
    Level UP your Parenting Productivity with the Stork Notes App!


    We kept it Tidy with a clean design and a core set of features, 
    that we do better than anybody on the market.
    You’re gonna LOVE it!!


    We have Teams! 
    It’s super easy to add Members to your team and SCHEDULE 
    when they have access to your timeline…
    We’re the only Parenting Productivity App on the market with 
    this feature!


    Instant Sync across all devices
    The Stork Notes app is event driven with hot reload.
    So everyone on your team is in the loop in the drop of a diaper.


    You’re the Sitter?
    Easily switch between teams from the Options-menu,
    so everyone’s in the loop!



    The Gold Standard of Baby Tracking.
    Bottle feeding by the ounce.
    Breastfeeding down to the second (and side.)
    Pumping by the ounce per side (with a timestamp.)
    Solid food by ounce or note it in detail.
    Timestamp falling asleep or waking up.
    Custom notes
    Track wet and dirty diapers
    And finally, Bath time.

    Your Data is ONLY your business.
    No sensitive information is ever collected...
    We don’t even wanna know your name!
    To deter prying eyes, data is only saved for 48 hours. 
    No ads. No suggested ads. No data sharing… period.

    `
}

type Content_PressKit_type =
{
    props: any;
    window: any;
}

const Content_PressKit = ({props, window}: Content_PressKit_type)=>
{
    return(
        <View style={style.container}>
            
            <Head/>
            <Text style={style.txt}>Right click and save any image you may need.</Text>
            <Text style={style.txt}>Email: Aloha@theclevercraft.com for press access to beta build before release.</Text>
            <Deck_factory props={props} window={window}/>
            <View style={{flex: 1}}/>
            <PressKit_factsheet props={props}/>
            <PressKit_description props={props} desc={copy.desc}/>

        </View>
    )
};

type PressKit_description_type =
{
    props: any;
    desc: string;
}

const PressKit_description = ({props, desc}: PressKit_description_type)=>
{
    return(
        <View style={[style.container, {marginTop: 8, alignItems: 'center'}]}>
            <Text style={[style.title, {color: 'white', marginBottom: 12}]}>Description</Text>
            <Text style={[style.txt, {maxWidth: 800, marginHorizontal: 16}]}>{desc}</Text>
        </View>
    );
}

const Deck_factory = ({props, window}: any)=>
{

    var toowide: string | number;
    if(window.width > 1600){ toowide = 1440 }
    else{ toowide = '90%' }

    var array_return: Array<JSX.Element> = [];
    array_return.length = 0;

    data.forEach((item)=>
    {
        array_return.push(
            <Deck_view
                source={item.source} 
                props={props}
            />
        )
    });

    return(
        <View style={[style.content, {width: toowide, marginBottom: 8}]}>
            { array_return }
        </View>
    )
};

const PressKit_factsheet = ({props}:any)=>
{

    type Factsheet_element_type =
    {
        topic: string;
        desc: string;
    };

    const Factsheet_element = ({topic, desc}:Factsheet_element_type)=>
    {
        return(        
            <View style={{flexDirection: 'row'}}>
                <Text style={style.txt_bold}>{topic}</Text>
                <Text style={[style.txt]}>{desc}</Text>
            </View>
        );
    };


    return(
        <View style={[style.container, {marginTop: 8, alignItems: 'center'}]}>
            <Text style={[style.title, {color: 'white', marginBottom: 12}]}>FactSheet</Text>
            <Factsheet_element topic='Created By: ' desc='The Clever Craft Company LTD'/>
            <Factsheet_element topic='Developed By: ' desc='The Clever Craft Company LTD'/>
            <Factsheet_element topic='Published By: ' desc='The Clever Craft Company LTD'/>
            <Factsheet_element topic='Releases: ' desc='IOS (Late 2021)'/>
            <Factsheet_element topic='Website: ' desc='http://www.theclevercraft.com'/>
            <Factsheet_element topic='Price: ' desc='$4.99'/>
            <Factsheet_element topic='Languages: ' desc='English'/>
            <Factsheet_element topic='Press Contact: ' desc='Aloha@theclevercraft.com'/>
        </View>
    );
};







const Head = ({props, window}: any)=>
{
    return(
            <LinearGradient colors={[ '#8b368a', '#ecba60' ]} style={[style.head, {marginBottom: 64}]} start={{x: .5, y: 0}}>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={style.title}>  Made by a Family. </Text>
                </View>

                <Text style={style.sub_title}>For Families.</Text>
            </LinearGradient>
    )
};

const style =
StyleSheet.create(
{
    title:
    {
        color: 'rgba(0,0,0, 1)',
        fontSize: 38,
        fontWeight: '400'
    },
    
    sub_title:
    {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '400',
        opacity: .8
    },

    txt:
    {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: '100',
        opacity: .7
    },

    txt_bold:
    {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: '800',
        opacity: .7
    },
    
    container:
    {
        backgroundColor: '#2b2830',
        width: '100%',
        paddingBottom: 100        
    },
    
    head:
    {
        width: '100%',
        height: '6rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    content:
    {
        height: '50%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    
});

export default Content_PressKit;