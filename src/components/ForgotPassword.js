import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '', login: false };
    }


    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            display: 'none',
        },
    };

    pressHandler = () => {
        // this.props.loginHandler;
        alert("Change password link send to your mail id.");
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Enter Email Id"
                        placeholderTextColor="#ffffff"
                    />
                    <TouchableOpacity style={styles.button} onPress={() => { this.pressHandler() }}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    {/* <Text><Text style={styles.forgotPassword}>Forgot Password ?</Text>| <Text style={styles.register}   onPress={() => navigate({ routeName: "Signup" })}>Register Now. </Text> </Text> */}
                </View>

            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // backgroundColor:'green'
    },
    inputBox: {

        width: 300,
        borderRadius: 25,

        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 16,
        backgroundColor: 'grey',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        width: '50%',
        backgroundColor: '#2ea730',
        borderRadius: 25,
        marginVertical: 16,
        paddingVertical: 13

    },
    forgotPassword: {
        fontWeight: '500',
    },

    register: {
        fontWeight: '500',
        color: '#2ea730',
    }
});