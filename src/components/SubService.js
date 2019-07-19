import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import ServiceList from './ServiceList';

export default class SubService extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { service } = this.props.navigation.state.params;
        const { user } = this.props.navigation.state.params;

        return (
            <View>
                {
                    service.sub_ser_list.map((item) => (
                        <ListItem
                            key={item.id}
                            leftAvatar={{ source: { uri: item.image_url } }}
                            title={item.title}
                            titleStyle={{ fontSize: 16, color: "black" }}
                            onPress={() => { navigate({ routeName: 'ServiceList', params: { service: service, user: { _id: user._id, address: '874, Sector 2-C', description: item.title } } }) }}
                        />
                    ))
                }
            </View>
        )
    }
}


