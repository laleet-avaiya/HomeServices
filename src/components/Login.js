
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const logo = require('../assets/logo.png');
const backgroundImage = require('../assets/back.png');
import ServiceList from './ServiceList';


export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Login',
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

    pressHandler = () => {
        alert("he");
    }

    render() {

        const { navigate } = this.props.navigation;
        const { loginHandler } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>

                    <ScrollView>
                        <Image source={logo} style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 80, marginBottom: 20 }}></Image>
                        <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'center', marginBottom: 20, color: 'white' }}>Home Services</Text>
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

                        <Button title="Login" buttonStyle={styles.button}
                            // onPress={() => { loginHandler(); navigate({ routeName: 'ServiceList', }) }}
                            onPress={() => { loginHandler(); this.props.navigation.pop(1) }}
                        ></Button>

                        <View style={{ alignSelf: 'center', textAlign: 'center', flex: 1, alignContent: 'space-between', justifyContent: 'center' }}>
                            <Text style={styles.bottomText} onPress={() => navigate({ routeName: "ForgotPassword" })}>Forgot Password ?
                            <Text style={styles.creteAcc} onPress={() => navigate({ routeName: "Signup" })}>                                   Create Account</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
        fontWeight: 'bold',
        color: 'white',
    },
    creteAcc: {
        fontWeight: 'bold',
        color: 'white',
    }
});