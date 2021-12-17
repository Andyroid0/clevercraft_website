import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg'

type Home_Hero_type =
{
    props: any;
    window: any;
}
const Water_wave = ({ width, stroke, stroke_width, position, top, bottom, left, right, scale, scaleX, scaleY}: any)=>
{
    return(
        <View style={[{position: position}, {top: top, bottom: bottom, left: left, right: right}, {transform: [{scale: scale, scaleX: scaleX, scaleY: scaleY}]}]}>
            <Svg 
            width= { width }
            height= "30px"
            >

                <Path 
                    fill-rule="evenodd"  
                    stroke= {stroke}
                    stroke-width= {stroke_width}
                    stroke-linecap="butt" 
                    stroke-linejoin="miter" 
                    fill="transparent"
                    d="M2.499,3.493 C50.859,19.203 100.953,27.333 152.500,26.500 C218.775,25.428 258.230,4.857 324.500,3.493 C395.241,2.37 433.277,26.209 504.33,26.500 C577.885,26.803 616.685,1.135 690.499,3.493 C754.800,5.547 793.173,25.580 857.499,26.500 C908.318,27.226 957.430,19.40 1004.500,3.493 "
                />
            </Svg>
        </View>
    )
};

const Waves = ({scaleX, scaleY, scale, left, right, opacity, bottom}: any)=>
{
    return(
        <View style={[{transform: [{scaleY: -3}, {scaleX: 1.2}]}]}>            
            <Water_wave width={"1000"} stroke={`rgba(216, 162, 105, ${opacity})`} stroke_width={"1"} position={"relative"} left={left}  right={right} bottom={ bottom + "%"} />
            <Water_wave width={"1000"} stroke={`rgba(216, 162, 105, ${opacity})`} stroke_width={"1"} position={"relative"} left={left}  right={right} bottom={ (bottom + 15) + "%"} />
            <Water_wave width={"1000"} stroke={`rgba(216, 162, 105, ${opacity})`} stroke_width={"1"} position={"relative"} left={left}  right={right} bottom={ (bottom + 30) + "%"} />
            <Water_wave width={"1000"} stroke={`rgba(216, 162, 105, ${opacity})`} stroke_width={"1"} position={"relative"} left={left}  right={right} bottom={ (bottom + 45) + "%"} />
            <Water_wave width={"1000"} stroke={`rgba(216, 162, 105, ${opacity})`} stroke_width={"1"} position={"relative"} left={left}  right={right} bottom={ (bottom + 60) + "%"} />
        </View>
    );
};



 const Home_Hero = ({ window, props}: Home_Hero_type)=>
{

    return(
        <>
    <View style={style.hero}>
    
        
            <Text style={{fontSize: 64, fontWeight: '500', color: 'white', alignSelf: 'center'}}>Stork Notes</Text>   

            <Text style={{fontSize: 22, fontWeight: '400', color: 'rgba(255,180,90, 1)', alignSelf: 'center'}}>Your parenting super power.</Text>   
            <View style={{flex:1}}/>

            <Image style={[{width: '30%', height: '30%'}, {bottom: '50%', left: '10%'}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/moon.png')}/>

            <Image style={[{width: '30%', height: '30%', maxHeight: 200, maxWidth: 200}, {bottom: '50%', left: '10%'}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
            <Image style={[{width: '20%', height: '20%', maxHeight: 140, maxWidth: 140}, {bottom: '40%', left: '10%'}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
            <Image style={[{width: '20%', height: '20%', maxHeight: 140, maxWidth: 140}, {bottom: '40%', right: '10%'}, {resizeMode: 'contain'}, {transform: [{scaleX: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
            <Image style={[{width: '30%', height: '30%', maxHeight: 200, maxWidth: 200}, {bottom: '50%', right: '10%'}, {resizeMode: 'contain'}, {transform: [{scaleX: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>

            <Image style={[{width: '8%', height: '8%', maxHeight: 90, maxWidth: 90}, {bottom: '64%', left: '65%'}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/sparkle_yellow.png')}/>


            <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '30%', right: '50%'}, {opacity: .7} ]}></View>

            <View style={{alignSelf: 'center'}}>
                <View style={[{left: '30%', bottom: '-45%'}]}>
                    <Waves left={"-79%"} opacity={.05} bottom={5}/>
                    <Waves left={"20%"} opacity={.05} bottom={-30}/>
                </View>
                <View style={[{transform: [{scaleX: -2}]}, {right: '40%'}, {bottom: '5%'}]}>
                    <Waves left={"-7%"} opacity={.05} bottom={1}/>
                    <Waves left={"-7%"} opacity={.05} bottom={-40}/>
                </View>
            </View>

            <Image style={[{width: '60%', height: '60%'}, {bottom: 0}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/stork_dash.png')}/>

            {
                (window.width > 700)?
                <>
                    <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '25%', right: '40%'}, {opacity: .7} ]}></View>
                    <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '25%', left: '40%'}, {opacity: .7} ]}></View>
                    
                    <Image style={[{width: '30%', height: '30%', maxHeight: 400, maxWidth: 400}, {top: '-9%', left: '-9%'}, {resizeMode: 'contain'}, {transform: [{scale: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
                    <Image style={[{width: '30%', height: '30%', maxHeight: 400, maxWidth: 400}, {top: '-9%', right: '-9%'}, {resizeMode: 'contain'}, {transform: [{scale: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>


                </>
                :

                <></>
            }
            {
                            (window.width > 1200)?
                <>
                    <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '25%', right: '30%'}, {opacity: .7} ]}></View>
                    <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '25%', left: '30%'}, {opacity: .7} ]}></View>
                    <Image style={[{width: '12%', height: '12%', maxHeight: 140, maxWidth: 140}, {bottom: '47%', left: '34%'}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
                    
                    <Image style={[{width: '30%', height: '30%', maxHeight: 340, maxWidth: 340}, {top: '-8%', right: '7%'}, {resizeMode: 'contain'}, {transform: [{scale: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
                    <Image style={[{width: '30%', height: '30%', maxHeight: 340, maxWidth: 340}, {top: '-8%', left: '7%'}, {resizeMode: 'contain'}, {transform: [{scale: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>


                </>
                :
                <></>
            }
            {
                            (window.width > 1400)?
                <>
                    <Image style={[{width: '10%', height: '10%', maxHeight: 200, maxWidth: 200}, {bottom: '47%', right: '25%'}, {resizeMode: 'contain'}, {transform: [{scaleX: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>

                </>
                :
                <></>
            }
            {
                            (window.width > 1600)?
                <>
                    <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '20%', right: '20%'}, {opacity: .7} ]}></View>
                    <View style={[ {height: '1%',width: '1%', maxHeight: 3, maxWidth: 3 }, {backgroundColor: 'white'}, {borderRadius: 100}, {position: 'absolute'}, {top: '20%', left: '20%'}, {opacity: .7} ]}></View>
                    <Image style={[{width: '30%', height: '30%', maxHeight: 280, maxWidth: 280}, {top: '22%', left: '-9%'}, {resizeMode: 'contain'}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
                    <Image style={[{width: '30%', height: '30%', maxHeight: 280, maxWidth: 280}, {top: '22%', right: '-9%'}, {resizeMode: 'contain'}, {transform: [{scaleX: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
                    <Image style={[{width: '30%', height: '30%', maxHeight: 300, maxWidth: 300}, {top: '-12%', right: '23%'}, {resizeMode: 'contain'}, {transform: [{scaleY: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>
                    <Image style={[{width: '30%', height: '30%', maxHeight: 300, maxWidth: 300}, {top: '-12%', left: '23%'}, {resizeMode: 'contain'}, {transform: [{scale: -1}]}, {position: 'absolute', opacity: 1}]} source={require('../assets/cloud.png')}/>

                </>
                :
                <></>
            }
            {
                            (window.width > 1800)?
                <>

                </>
                :
                <></>
            }          
        
    </View>
    
    </>
    )
};

const style =
StyleSheet.create(
{
    hero:
    {
        backgroundColor: '#25222e',
        width: '100%',
        height: '75%',
        maxHeight: 650,
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'        
    },

});



export default Home_Hero;

