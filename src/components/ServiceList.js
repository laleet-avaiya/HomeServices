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
    // static navigationOptions = {
    //     title: 'Service List',
    // };

    state = {
        modalVisible: false,
    };

        setModalVisible(visible) {
            this.setState({ modalVisible: visible });
        }



    render() {

        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
             {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
              */}
                <Text>{this.props.navigation.state.params.hello}</Text>
                {/* <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>  */}
                <View>
                    <Button title="Login" onPress={() => navigate({ routeName: 'Login' })} />
                    <Button title="Signup" onPress={() => navigate({ routeName: 'Signup' })} />
                </View>

                <View>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                onPress={() => { alert(l.name) }}
                            />
                        ))
                    }
                </View>
                </ScrollView>
        )
    }
}
