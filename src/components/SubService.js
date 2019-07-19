import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import Booking from './Booking';

export default class SubService extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { service } = this.props.navigation.state.params;



        return (
            <View>
                {
                    service.sub_ser_list.map((item) => (
                        <ListItem
                            key={item.id}
                            leftAvatar={{ source: { uri: item.image_url } }}
                            title={item.title}
                            // subtitle={l.subtitle}
                            titleStyle={{ fontSize: 16, color: "black" }}
                            onPress={() => { navigate({ routeName: 'Booking', params: { service: service, user: { _id: null, address: 'Home', description: item.title } } }) }}
                        />
                    ))
                }
            </View>
        )
    }
}


