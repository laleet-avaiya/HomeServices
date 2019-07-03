import React,{Component} from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class ChangePassword extends React.Component{
    render(){
        return(
            <View>
                <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Old Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                    />
                 <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="New Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                    />
                 <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                    />
                 <Button title="Confirm" buttonStyle={styles.button} onPress={() => alert("Change Password") }></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    inputBox: {

        width: 300,
        borderRadius: 25,
        alignSelf: 'center',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
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
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
    bottomText: {
        alignSelf: 'center',

    }
});