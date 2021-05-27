import React from 'react';
import { Icon } from "react-native-elements";
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({ 
    Home : {
        screen : AppTabNavigator,
        navigationOptions:{
          drawerIcon : <Icon name="home" type ="fontawesome5" />
        }
        },
    Setting : {
        screen : SettingScreen,
        navigationOptions:{
            drawerIcon : <Icon name="settings" type ="fontawesome5" />,
            drawerLabel : "Settings"
          }
      }
    },
    {
        contentComponent:CustomSideBarMenu 
    },
    {
        initialRouteName : 'Home'
        })
