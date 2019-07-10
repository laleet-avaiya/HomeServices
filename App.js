import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Home from './src/components/Home'
import Login from './src/components/Login'
import UserDetail from './src/components/UserDetail'
import Signup from './src/components/Signup'
import BottomNav from './src/components/BottomNav'
import ServiceList from './src/components/ServiceList'

const AppNavigator = createStackNavigator({

  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  UserDetail: {
    screen: UserDetail
  },
  BottomNav: {
    screen: BottomNav,
  },
},
  {
    initialRouteName: 'BottomNav',
  });




export default createAppContainer(AppNavigator);
































// const bottomAppBar = createMaterialBottomTabNavigator({
//   Home: {
//     screen: Home,
//   },
//   Login: {
//     screen: Login
//   },
//   UserDetail: {
//     screen: UserDetail
//   },
//   Signup: {
//     screen: Signup
//   },
//   ServiceList: {
//     screen: ServiceList,
//   },
// }, {
//     initialRouteName: 'Home',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad' },
//   });
















// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     headerLeft: (
//       <Button
//         onPress={() => alert('This is a button!')}
//         title="Back"
//         color="grey"
//       />
//     ),
//   };
//   render() {
//     return (

//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


//         <TouchableOpacity style={styles.button} onPress={() => {
//           this.props.navigation.dispatch(StackActions.reset({
//             index: 0,
//             actions: [
//               NavigationActions.navigate({ routeName: 'Login' })
//             ],
//           }))
//         }}>
//           <Text style={styles.text}>
//             Login
//             </Text>
//         </TouchableOpacity>


//         <TouchableOpacity style={styles.button} onPress={() => {
//           this.props.navigation.dispatch(StackActions.reset({
//             index: 0,
//             actions: [
//               NavigationActions.navigate({ routeName: 'Signup' })
//             ],
//           }))
//         }}>
//           <Text style={styles.text}>
//             Signup
//             </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   button: {
//     height: 50,
//     width: 150,
//     color: 'black',
//     backgroundColor: 'green',
//     borderRadius: 10,
//     justifyContent: 'center',
//     margin: 5,

//   },
//   text: {
//     width: '100%',
//     padding: 10,
//     textAlign: 'center'
//   },

// });