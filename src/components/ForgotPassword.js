import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';


const backgroundImage = require('../assets/back.jpg');


export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '', login: false };
    }


    static navigationOptions = {
        title: 'Forgot Password',
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
        // this.props.loginHandler;
        alert("Change password link send to your mail id.");
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                    <ScrollView>
                        <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'center', marginBottom: 20, color: 'white', marginTop: 200 }}>Forgot Password</Text>
                        <Input
                            placeholder='Email'
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={{ width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 100, marginTop: 50 }}
                            leftIcon={
                                <Icon
                                    name='envelope-open-o'
                                    size={24}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("email", val)}
                        />
                        <Button title="Done" buttonStyle={styles.button} onPress={() => { this.pressHandler() }}></Button>
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
        alignContent: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 100, margin: 15
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