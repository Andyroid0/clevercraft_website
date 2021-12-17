import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

type Footer_type=
{
    window: any;
    props:any;
    set_route: (value: string)=>void;
}

const Footer =({ window, props, set_route}: Footer_type)=>
{
    return(    
        <View style={style.foot}>
            <View style={{flexDirection: 'row', marginHorizontal: '2%'}}>

                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>   


                    <Text style={style.foot_text}>© { new Date().toLocaleString("en-US", { year: 'numeric'}) }  The Clever Craft Company LTD</Text>

                    <View style={{flexDirection: 'column'}}>
                        <Pressable onPress={ ()=>set_route('Privacy_Policy')}> <Text style={style.foot_text}> Privacy Policy </Text> </Pressable>
                    </View>

                </View>

            </View>
        </View>
    )
};


const style =
StyleSheet.create(
{
    foot:
    {
        backgroundColor: 'rgba(0,0,0, .9)',
        width: '100%',
        height: '5rem',
        alignSelf: 'center',
        justifyContent: 'center',
    
    },

    foot_text:
    {
        fontWeight: '300',
        fontSize: 18,
        color: 'rgba(255,255,255, .5)'
    },

});

export default Footer;