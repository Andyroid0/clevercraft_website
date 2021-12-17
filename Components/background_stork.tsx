import React from "react";
import {View, Image} from 'react-native';


export const Background_stork = ({opacity, props}: any) =>
{
    return(
        <View style={[{opacity: opacity}]}>


                {/* Good */}
        <Image style={[ {width: '50%'}, {left: '10%'}, {top: '22%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/moon.png')}/> 
       
                {/* Good */}

        <Image style={[ {width: '25%'}, {left: '65%'}, {bottom: '30%'}, {resizeMode: 'contain'}, {position: 'absolute'}, {opacity: .6}]} source={require('../assets/cloud.png')}/>
                        {/* Good */}

        <Image style={[ {width: '15%'}, {right: '60%'}, {bottom: '25%'}, {resizeMode: 'contain'}, {position: 'absolute'}, {opacity: .4}]} source={require('../assets/cloud.png')}/>

                        {/* Good */}

        <Image style={[ {width: '56%'}, {left: '3%'}, {top: '27%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/cloud.png')}/>
                        {/* Good */}

        <Image style={[ {width: '1.5%'}, {left: '30%'}, {top: '26%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/sparkle_yellow.png')}/>
                        {/* Good */}

        <Image style={[ {width: '9%'}, {left: '25%'}, {bottom: '36%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/sparkle_yellow.png')}/>

                        {/* Good */}    

        <Image style={[ {width: '3%'}, {left: '11%'}, {bottom: '50%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/sparkle_yellow.png')}/>
                        {/* Good */}

        <Image style={[ {width: '5%'}, {left: '10%'}, {bottom: '42%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/sparkle_yellow.png')}/>
                        {/* Good */}

        <Image style={[ {width: '2%'}, {left: '19%'}, {bottom: '55%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/sparkle_yellow.png')}/>
                        {/* Good */}

        <Image style={[ {width: '47%'}, {left: '45%'}, {top: '1%'}, {resizeMode: 'contain'}, {position: 'absolute'}]} source={require('../assets/stork_dash.png')}/>
                        {/* Good */}

        <View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '32%', left: '5%'}, {opacity: .5} ]}></View>
                        {/* Good */}

        <View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '25%' , right: '15%'}, {opacity: .5} ]}></View>
                        {/* Good */}

        <View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '24%' , right: '53%'}, {opacity: .5} ]}></View>
                        {/* Good */}
        
        <View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '17%' , right: '25%'}, {opacity: .5} ]}></View>
                        {/* Good */}

        <View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {bottom: '48%' , right: '10%'}, {opacity: .5} ]}></View>
                        {/* Good */}

        <View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '20%' , left: '10%'}, {opacity: .5} ]}></View>
                        {/* Good */}
        
        {<View style={[ {height: '.3%',width: '.6%' }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {bottom: '40%' , left: '12%'}, {opacity: .5} ]}></View>}

        </View>
    )
}