

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

const logo = require('../assets/logo.png');
const backgroundImage = require('../assets/back.png');

export default class Signup1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: false,
            email: '',
            password: '',
        };

    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    static navigationOptions = {
        title: 'Signup',
        headerStyle: {
            display: 'none',
        },
        headerTitleStyle: {
            fontWeight: '600',
            color: 'gray',
            fontSize: 16,
            marginLeft: 0,
            paddingLeft: 0,
        },
    };

    pressHandler = () => {
        alert("he");
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4485af', 'gray']} style={styles.linearGradient}> */}
                <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>

                    <ScrollView>
                        <Image source={logo} style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 40, marginBottom: 20 }}></Image>

                        <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'center', marginBottom: 20, color: 'white' }}>Create Account</Text>
                        <Input
                            placeholder='Name'
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("email", val)}
                        />

                        <Input
                            placeholder='Email'
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='envelope-open-o'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("email", val)}
                        />
                        <Input
                            placeholder="Password"
                            secureTextEntry={true}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("password", val)}
                        />

                        <Input
                            placeholder="Repeat Password"
                            secureTextEntry={true}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("password", val)}
                        />


                        <Button title="Continue" buttonStyle={styles.button} onPress={() => navigate({ routeName: "UserDetail" })}></Button>
                    </ScrollView>
                    {/* </LinearGradient> */}
                </ImageBackground>
            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
    },
    linearGradient: {
        flex: 1,
    },
    input: {
        width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 100, margin: 15
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        width: '40%',
        alignSelf: 'center',
        margin: 30,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
    },
});

// import React from "react";
// import { Button } from "react-native-elements";
// import ImagePicker from "react-native-image-picker";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   PixelRatio,
//   TouchableOpacity,
//   Image
// } from "react-native";


// export default class SignUp extends React.Component {
//   state = {
//     name: "",
//     password: "",
//     email: "",
//     phone_number: "",
//     confirmpassword: "",
//     ImageSource: null,
//     address: "",
//     gender: ""
//   };
//   onChangeText = (key, val) => {
//     this.setState({ [key]: val });
//   };
//   //   signUp = async () => {
//   //     const { username, password, email, phone_number } = this.state;
//   //     try {
//   //       // here place your signup logic
//   //       console.log("user successfully signed up!: ", success);
//   //     } catch (err) {
//   //       console.log("error signing up: ", err);
//   //     }
//   //   };

//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true
//       }
//     };
//     ImagePicker.showImagePicker(options, response => {
//       console.log("Response = ", response);

//       if (response.didCancel) {
//         console.log("User cancelled photo picker");
//       } else if (response.error) {
//         console.log("ImagePicker Error: ", response.error);
//       } else if (response.customButton) {
//         console.log("User tapped custom button: ", response.customButton);
//       } else {
//         let source = { uri: response.uri };

//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           ImageSource: source
//         });
//       }
//     });
//   }

//   static navigationOptions = {
//     title: "SignUp",
//     headerStyle: {
//       display: "none"
//     }
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("name", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Gender"
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("gender", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("email", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry={true}
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("password", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry={true}
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("confirmpassword", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("phone_number", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Address"
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("address", val)}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Profile Picture"
//             autoCapitalize="none"
//             placeholderTextColor="white"
//             onChangeText={val => this.onChangeText("profilepic", val)}
//           />
//           <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//             <View style={styles.ImageContainer}>
//               {this.state.ImageSource === null ? (
//                 <Text style={styles.selectphoto}>Select a Photo</Text>
//               ) : (
//                   <Image
//                     style={styles.ImageContainer}
//                     source={this.state.ImageSource}
//                   />
//                 )}
//             </View>
//           </TouchableOpacity>

//           <Button title="Signup" buttonStyle={styles.button} />
//           <Text
//             style={styles.goToLogin}
//             onPress={() => navigate({ routeName: "Login" })}
//           >
//             Already have an Account? Login
//           </Text>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     // alignItems: "center",
//     marginVertical: 50
//   },
//   input: {
//     width: 300,
//     borderRadius: 25,
//     alignSelf: "center",
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: "black",
//     marginVertical: 16,
//     backgroundColor: "grey"
//   },
//   button: {
//     width: "50%",
//     alignSelf: "center",
//     margin: 10,
//     borderRadius: 10
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#ffffff",
//     textAlign: "center"
//   },
//   goToLogin: {
//     fontWeight: "500",
//     alignSelf: "center"
//   },
//   ImageContainer: {
//     borderRadius: 10,
//     width: 300,
//     borderRadius: 25,
//     height: 50,
//     borderColor: "#9B9B9B",
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: "center",
//     alignSelf: "center",
//     alignItems: "center",
//     backgroundColor: "grey"
//   },
//   selectphoto: {
//     color: "#ffffff"
//   }
// });
