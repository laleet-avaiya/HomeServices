

import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import Login from './Login';
import Signup from './Signup';




const HistoryData = [
    {
        name: 'Raju Painter',
        type: 'Painter',
        date:  '26 June 2019',
        phone: '+91-88985-68974'
    },

    {
        name: 'Ankit Parajapati',
        type: 'Appliance & Electronic Repair',
        date:  '27 June 2019',
        phone: '+91-88985-68974'
    },


    {
        name: 'Mehul Rana',
        type: 'Laptop Repair',
        date:  '28 June 2019',
        phone: '+91-88985-68974'
    },


    {
        name: 'Animesh Rana',
        type: 'Carpenter',
        date:  '29 June 2019',
        phone: '+91-88985-68974'
    },


    {
        name: 'Raj Mehta',
        type: 'Painter',
        date:  '20 June 2019',
        phone: '+91-88985-68974'
    },



    {
        name: 'Johan Martin',
        type: 'Plumber',
        date:  '22 June 2019',
        phone: '+91-88985-68974'
    },



    {
        name: 'Anjli Parajapati',
        type: 'Electrician',
        date:  '28 June 2019',
        phone: '+91-88985-68974'
    },
]


class ServiceHistory extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            display: 'none',
        },
    };

    constructor() {
        super();
        this.state = {
            search: '',
            login: false,
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };
    render() {

        const { search, login } = this.state;
        const { navigate } = this.props.navigation;


        if (!login) {
            return (
                <View style={styles.loginPage}>
                    <Button buttonStyle={styles.button} title="Login" onPress={() => this.setState({login:true})} />

                    {/* <Button buttonStyle={styles.button} title="Login" onPress={() => navigate({ routeName: 'Login' })} /> */}
                    <Button buttonStyle={styles.button} title="Signup" onPress={() => navigate({ routeName: 'Signup' })} />
                </View>

            )
        }


        return (
            <View style={styles.container}>
                <Card>
                    <Text style={styles.title}>Service History</Text>
                </Card>
                <ScrollView>
                    <View style={styles.cards}>
                        {
                            HistoryData.map((u, i) => {
                                return (
                                    <Card key={i} title={'Worker Name:' +  u.name} titleStyle={{textAlign:'left',fontSize:14}} containerStyle={styles.card} >
                                    {/* <Card title={'Worker Name:' + u.name} titleStyle={styles.text}><Text>{user.email}</Text></Card> */}
                                        {/* <Text style={styles.label}>Worker Name: {u.name}</Text> */}
                                        <Text style={styles.label}>Service Type: {u.type}</Text>
                                        <Text style={styles.label}>Date: {u.date}</Text>
                                        <Text style={styles.label}>Contact Number: {u.phone}</Text>
                                        {/* <Text onPress={() => alert(u.name)} style={styles.name}>{u.name}</Text> */}
                                    </Card>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            {/* </Card> */}
            </View>
        )
    }
}




const AppNavigator = createStackNavigator({
    ServiceHistory: {
        screen: ServiceHistory
    },
    Login: {
        screen: Login,
    },
    Signup: {
        screen: Signup,
    },
}, {
        initialRouteName: 'ServiceHistory',
    });




export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: '100%'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        padding:0,
        textAlign:'center',
        color:'black'
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        padding: 5,
    },
    card: {
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '95%',
        margin: 5,
    },

    label:{
        fontWeight:'500',
        fontSize:12,
        margin:2,
    },
    name: {
        textAlign: 'center',
        marginTop: 15,
    },

    loginPage: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        justifyContent: 'center',

    },
    button: {
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
});