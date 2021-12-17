import React from 'react';
import {View, StyleSheet} from 'react-native';
import Stork_Features from './Stork_features';
import Stork_about from './Stork_about';

const Content = ({props, window}:any)=>
{

    return(
        <>
            <Stork_Features window={window}/>
            <Stork_about window={window} props={props}/>
        </>
     )


}

export default Content;