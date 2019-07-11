import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, BottomTabBar, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

import Home from './src/components/Home'
import ServiceHistory from './src/components/ServiceHistory'
import HelpCenter from './src/components/HelpCenter'
import Profile from './src/components/Profile';
import BottomNav from './src/components/BottomNav'



const TabNavigator = createBottomTabNavigator({
  Home:
  {
    screen: Home,
  },
  MyBookings:
  {
    screen: ServiceHistory,
  },

  HelpCenter:
  {
    screen: HelpCenter,
  },
  Profile:
  {
    screen: Profile,
  }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      // keyboardHidesTabBar: false,
      // tabBarVisible:false,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'MyBookings') {
          iconName = 'event-note';
        }
        else if (routeName === 'HelpCenter') {
          iconName = 'live-help';
        }
        else if (routeName === 'Profile') {
          iconName = 'account-box';
        }
        // You can return any component that you like here!
        const color = focused ? '#ff861b' : 'gray';
        const size = focused ? 26 : 24;
        return <Icon name={iconName} color={color} size={size} />;
      },
    }),
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#ff861b',
      inactiveTintColor: 'gray',
    },
  })


export default createAppContainer(TabNavigator);




// const AppNavigator = createStackNavigator({

//   Login: {
//     screen: Login,
//   },
//   Signup: {
//     screen: Signup,
//   },
//   UserDetail: {
//     screen: UserDetail
//   },
//   BottomNav: {
//     screen: BottomNav,
//   },
// },
//   {
//     initialRouteName: 'BottomNav',
//   });




// export default createAppContainer(AppNavigator);