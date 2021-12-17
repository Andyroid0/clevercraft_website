import React, {Component, useEffect, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Dashboard from './back_navigation/Dashboard';
import Router from './front_navigation/Router';
import Create from "@react-navigation/stack"
import { createStackNavigator } from '@react-navigation/stack';

type Stacktype =
{
  Home: undefined;
  PressKit: undefined;
  Privacy_Policy: undefined;
}

const linking =
{
  prefixes: [''],
  config:
  {
    screens:
    {
      Home: "",
      PressKit: "PressKit",
      Privacy_Policy: "Privacy"
    }
  },
};
class App extends Component
{
  constructor(props: any)
  {
    super(props)
  }

  state =
  {
    isLoaded: true,
    isAuthenticationReady: false,
    isAuthenticated: false,
    isEmailVerified: false
  }



  passRoutes =({route, props}: any)=>
  {
    return(
      <Quick_routes isAuthenticated={this.state.isAuthenticated} isEmailVerified={this.state.isEmailVerified} props={props} route={route}/>
    )
  }

  URLStack = createStackNavigator<Stacktype>();

  render()
  {
    return(
        <NavigationContainer linking={linking}>

          <this.URLStack.Navigator         
            screenOptions={
              {
                headerShown: false,
              }
          }>
            <this.URLStack.Screen name="Home" component={this.passRoutes}/>
            <this.URLStack.Screen name="PressKit" component={this.passRoutes}/>
            <this.URLStack.Screen name="Privacy_Policy" component={this.passRoutes}/>
          </this.URLStack.Navigator>


        </NavigationContainer>
    )
  }
};



const Quick_routes = ({isAuthenticated, isEmailVerified, route, props}: any)=>
{
  return(
    <>
      {

        (isAuthenticated && isEmailVerified) ?

          <Dashboard/>
          :
          <Router props={props} route={route}/>

      }
    </>
  )
}

export default App;
