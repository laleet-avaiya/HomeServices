

import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';



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


export default class ServiceHistory extends React.Component {
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
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
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
    }
});