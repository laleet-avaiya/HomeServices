
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image ,ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';

const logo = require('../assets/logo.png');
const backgroundImage = require('../assets/back.png');

export default class Login extends React.Component {
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
        title: 'Home',
        headerStyle: {
            display: 'none',
        },
    };
    pressHandler = () => {
        alert("he");
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4485af','gray']} style={styles.linearGradient}> */}
                <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%',backgroundColor:'transparent' }}>
                    <Image source={logo} style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 80, marginBottom: 20 }}></Image>

                    <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'center', marginBottom: 20 ,color:'white'}}>Home Services</Text>
                    <Input
                        placeholder='Email'
                        underlineColorAndroid={'transparent'}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        containerStyle={{ width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 100, margin: 15 }}
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
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
                        containerStyle={{ width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 100, margin: 15 }}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='white'
                                style={{ margin: 3 }}
                            />
                        }
                        onChangeText={val => this.onChangeText("password", val)}
                    />
                    {/* <Button title="Login" buttonStyle={styles.button} ></Button> */}
                    <Button title="Login" buttonStyle={styles.button} onPress={() => { this.setState({ user: true }) }}></Button>

                    <View style={{ textAlign: 'center'}}>
                        <Text style={styles.bottomText} onPress={() => navigate({ routeName: "ForgotPassword" })}>Forgot Password ?
                    <Text style={styles.creteAcc} onPress={() => navigate({ routeName: "Signup" })}>                                   Create Account</Text>
                        </Text>
                    </View>
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
        // backgroundColor:'rgba(255, 0, 0, 0.3)',
    },
    linearGradient: {
        flex: 1,
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
    bottomText: {
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 10,
        color:'white',
    },
    creteAcc: {
        textAlign: 'right',
        fontWeight: 'bold',
        margin: 10,
        color:'white',
    }
});