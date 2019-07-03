import React from 'react';
import { Modal, Text, Image, StyleSheet, TextInput, TouchableHighlight, View, Alert } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


const list = [
    {
        name: 'AC Service and Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        // subtitle: 'Vice President'
    },
    {
        name: 'Refrigerator Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: 'Vice Chairman'
    },
    {
        name: 'Washing Machine Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'Microwave Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'Geyser / Water Heater Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'RO or Water Purifier Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'RO or Water Purifier Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'Mobile Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'TV Repair & Installation',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },

]


export default class ServiceList extends React.Component {

    constructor() {
        super();
        this.state = {
            modalVisible: false,
            title: '',
        };
    }

    static navigationOptions = {
        title: 'Hello',
        headerStyle: {
            display: 'none',
        },
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }



    render() {

        const { navigate } = this.props.navigation;
        // this.updateTitle(this.props.navigation.state.params.hello);

        return (
            <ScrollView>
                <Text>
                    {/* <Text>Back</Text> */}
                    <Text style={styles.title}>{this.props.navigation.state.params.hello}</Text>
                </Text>

                <View>

                
                <Card>
                    <Text style={styles.title1}>Charges and T & C</Text>
                </Card>

                <Card>
                    <Text style={styles.title1}>Select Date</Text>
                </Card>

                <Card>
                    <Text style={styles.title1}>Select Time</Text>
                </Card>
               
                <Button title="Book" buttonStyle={styles.button}></Button>
                    {/* {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                onPress={() => { alert("Visiting Charge : Rs. 100") }}
                            />
                        ))
                    } */}
                </View>
            </ScrollView>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        // padding: 0,
        textAlign: 'center',
        // padding: 15,
        borderBottomWidth: 1,
        color: 'black'
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
        textAlign: 'center',
        color: 'black'
    },
    button: {
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },

});