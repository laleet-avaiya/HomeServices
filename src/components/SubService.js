import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import ServiceList from './ServiceList';

export default class SubService extends Component {

    static navigationOptions = {
        title:"SubServices",
        headerTintColor: "white",
        headerStyle: {
            // display: 'none',
            backgroundColor: "#ff861b",
        },
    };
    render() {
        const { navigate } = this.props.navigation;
        const { service, changeLoginState, user,login } = this.props.navigation.state.params;


        return (
            <View>
                {
                    service.sub_ser_list.map((item) => (
                        <ListItem
                            key={item.id}
                            leftAvatar={{ source: { uri: item.image_url } }}
                            title={item.title}
                            titleStyle={{ fontSize: 16, color: "black" }}
                            onPress={() => { navigate({ routeName: 'ServiceList', params: { service: service,login:login, changeLoginState: changeLoginState,work:"Fan Repairing", user: { _id: "5d22f2fbe8292c00179c3333", address: '874, Sector 2-C', description: item.title } } }) }}
                        // onPress = { (e) => {changeLoginState("HEllo")}}
                        />
                    ))
                }
            </View>
        )
    }
}


