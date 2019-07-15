import React, { Component } from 'react'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, } from 'react-native-elements';
import { List, Colors ,Badge} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import Login from './Login';
import Signup from './Signup';


const HistoryData = [
    {
        name: 'Raju Painter',
        type: 'Painter',
        date: '26 June 2019',
        phone: '+91-88985-68974',
        status: 0,
    },

    {
        name: 'Ankit Parajapati',
        type: 'Appliance & Electronic Repair',
        date: '27 June 2019',
        phone: '+91-88985-68974',
        status: "Completed",
    },


    {
        name: 'Mehul Rana',
        type: 'Laptop Repair',
        date: '28 June 2019',
        phone: '+91-88985-68974',
        status: "Completed",
    },


    {
        name: 'Animesh Rana',
        type: 'Carpenter',
        date: '29 June 2019',
        phone: '+91-88985-68974',
        status: "Completed",
    },


    {
        name: 'Raj Mehta',
        type: 'Painter',
        date: '20 June 2019',
        phone: '+91-88985-68974',
        status: "Completed",
    },



    {
        name: 'Johan Martin',
        type: 'Plumber',
        date: '22 June 2019',
        phone: '+91-88985-68974',
        status: "Completed",
    },



    {
        name: 'Anjli Parajapati',
        type: 'Electrician',
        date: '28 June 2019',
        phone: '+91-88985-68974',
        status: "Completed",
    },
]


class ServiceHistory extends React.Component {
    static navigationOptions = {
        title: 'My Bookings',
        headerStyle: {
            display: 'none',
        },
    };

    constructor() {
        super();
        this.state = {
            search: '',
            login: false,
            historyData: false,
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };


    async componentWillMount() {
        await fetch('https://booking-service01.herokuapp.com/by_client_id/5d19bed4a11612274a2b98d1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ historyData: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {

        const { search, login, historyData } = this.state;
        const { navigate } = this.props.navigation;

        if (!login) {
            return (


                <View style={styles.loginPage}>


                    <View style={{ backgroundColor: '#ff861b', height: 62, overflow: 'scroll' }} >
                        <Text style={{ fontSize: 20, position: 'absolute', left: 15, top: 15, fontWeight: '500', color: 'white' }}>My Bookings</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.cards}>
                            {
                                HistoryData.map((u, i) => {
                                    return (
                                        <Card key={i} title={'Worker Name:' + u.name} titleStyle={{ textAlign: 'left', fontSize: 14 }} containerStyle={styles.card} >
                                            <Badge  style={{borderRadius:10,backgroundColor:u.status?"green":"orange",position:"absolute",top:0,right:0}}>{u.status?"Completed":"Pending"}</Badge>
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
                                    <Card key={i} title={'Worker Name:' + u.name} titleStyle={{ textAlign: 'left', fontSize: 14 }} containerStyle={styles.card} >
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
        backgroundColor: '#F5FCFF',
        width: '100%',
    },
    loginPage: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        overflow: 'scroll'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
        textAlign: 'center',
        color: 'black'
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

    label: {
        fontWeight: '500',
        fontSize: 12,
        margin: 2,
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