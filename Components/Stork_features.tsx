import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { Feature_view } from './feature_view';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Data for the factory to create Feature elements.
const data=
[
    {
        icon: require('../assets/colorCons/sleep_img.png'),
        title: "Sleep",
        description: "Record when nap time begins and ends!"
    },
    {
        icon: require('../assets/colorCons/bottle_img.png'),
        title: "Bottle Feeding",
        description: "Track how much has been fed by the ounce. View totals over the past 24 hours at a glance from the dashboard!"
    },
    {
        icon: require('../assets/colorCons/bath_img.png'),
        title: "Bath Time!",
        description: "When's the last time that baby's had a bath?"
    },
    {
        icon: require('../assets/colorCons/breastfed_img.png'),
        title: "Breast Feeding",
        description: "Time how long baby spends on each side with ease. Keep track from the dashboard or have an in depth look from your timeline."
    },
    {
        icon: require('../assets/colorCons/pump_img.png'),
        title: "Pumping",
        description: "Track by the ounce per side."
    },
    {
        icon: require('../assets/colorCons/diaper_img.png'),
        title: "Diapers",
        description: "Tracking diapers? We've got events for that!"
    }
];




const Stork_Features = ({window, props}: any) =>
{
    return(
        <View style={style.container}>
            <Head/>
{/*            <Crest/>
*/}            <Feature_factory window={window}/>  
        </View>      
    )
};


{/* ================================================== */}

const Feature_factory = ({window, props}: any)=>
{
    var toowide: string | number;
    if(window.width > 1600){ toowide = 1440 }
    else{ toowide = '90%' }

    var array_return: Array<JSX.Element> = [];
    array_return.length = 0;

    data.forEach((item)=>
    {
        array_return.push(
            <Feature_view
            icon={item.icon} 
            title={item.title}
            description={item.description} 
            backgroundColor={''}             
            />
        )
    });
    return (
        <View style={[style.content, {width: toowide}]}>
            {array_return}
        </View>   
    )
    
};

const Head = ()=>
{
    return(
            <LinearGradient colors={[ '#8b368a', '#ecba60' ]} style={[style.head, {marginBottom: 64}]} start={{x: .5, y: 0}}>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={style.title}>  Track What Matters  </Text>
                </View>

                <Text style={style.sub_title}>Without the Nonsense.</Text>
            </LinearGradient>
    )
};

const Crest = ()=>
{
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

            <View style={[{height: 160, width: 160, borderRadius: 600, position: 'absolute', borderWidth: 3, borderColor: 'purple', opacity: .2}, {marginTop: 24}]}/>
            <View style={[{height: 170, width: 170, borderRadius: 600, position: 'absolute', borderWidth: 3, borderColor: 'purple', opacity: .1, borderStyle: 'dashed'}, {marginTop: 24}]}/>

            <View style={[{height: 3, width: 3}, {backgroundColor: 'purple', opacity: .1, marginTop: 24, marginHorizontal: 3}]}/>
            <View style={[{height: 3, width: 3}, {backgroundColor: 'purple', opacity: .2, marginTop: 24, marginHorizontal: 3}]}/>
            <View style={[{height: 3, width: 3}, {backgroundColor: 'purple', opacity: .3, marginTop: 24, marginHorizontal: 3}]}/>

            <View style={[{height: 3, width: 400}, {backgroundColor: 'purple', opacity: .4, marginTop: 24}]}/>

                <View style={{alignItems: 'center', flexWrap: 'wrap', height: 320, width: 320, alignSelf: 'center', marginTop: 24}}>

                    <FontAwesome name="chevron-up" size={72} color="purple" style={{marginBottom: 0, opacity: .7}}/>

                            <View style={{flexDirection: 'row'}}>
                                

                                <FontAwesome name="chevron-left" size={72} color="purple" style={{marginTop: 54, marginRight: 16, opacity: .7}}/>

                                    <Image style={[{width: 160, height: 160, resizeMode: 'contain', position: 'relative', top: 8}]} source={require('../assets/colorCons/pacifier_icon_small.png')}/>
                                
                                <FontAwesome name="chevron-right" size={72} color="purple" style={{marginTop: 54, marginLeft: 16, opacity: .7}} />

                            </View>

                        <FontAwesome name="chevron-down" size={72} color="purple" style={{marginTop: 8, opacity: .7}}/>

                </View>
                
            <View style={[{height: 3, width: 400}, {backgroundColor: 'purple', opacity: .4, marginTop: 24}]}/>

            <View style={[{height: 3, width: 3}, {backgroundColor: 'purple', opacity: .3, marginTop: 24, marginHorizontal: 3}]}/>
            <View style={[{height: 3, width: 3}, {backgroundColor: 'purple', opacity: .2, marginTop: 24, marginHorizontal: 3}]}/>
            <View style={[{height: 3, width: 3}, {backgroundColor: 'purple', opacity: .1, marginTop: 24, marginHorizontal: 3}]}/>

        </View>
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

    container:
    {
        backgroundColor: '#fff',
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




export default Stork_Features;


