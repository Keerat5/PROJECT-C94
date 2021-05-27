import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import Splash from './screens/Splash'

export default function App() {
  return (
    <AppContainer/>   
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
  'Splash' : {screen : Splash},
  },
  {
  initialRouteName : 'Splash' 
})

const AppContainer =  createAppContainer(switchNavigator);
