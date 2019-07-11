import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
export default class HelpCenter extends Component {
    render() {
        return (
            <View style={styles.loginPage}>

                <ScrollView>
                    <View style={{ backgroundColor: '#ff861b', height: 62, overflow: 'scroll' }} >
                        <Text style={{ fontSize: 20, position: 'absolute', left: 15, top: 15, fontWeight: '500', color: 'white' }}>Customer Support</Text>
                    </View>
                    <View style={{ backgroundColor: '#ededed' }}>
                        <Text style={{ padding: 20, fontWeight: 'bold' }}>F.A.Q.</Text>

                        <List.Item
                            title="Booking Services"
                            right={props => <List.Icon {...props} icon="keyboard-arrow-right" />}
                            style={{ margin: 1, padding: 0, backgroundColor: 'white', }}
                            titleStyle={{ fontSize: 14, paddingLeft: 15 }}
                            descriptionStyle={{ height: 0, margin: 0, padding: 0 }}
                        />
                        <List.Item
                            title="Paying for Services"
                            right={props => <List.Icon {...props} icon="keyboard-arrow-right" />}
                            style={{ margin: 1, padding: 0, backgroundColor: 'white' }}
                            titleStyle={{ fontSize: 14, paddingLeft: 15 }}
                            descriptionStyle={{ height: 0, margin: 0, padding: 0 }}
                        />
                        <List.Item
                            title="A guide to HomeServices"
                            right={props => <List.Icon {...props} icon="keyboard-arrow-right" />}
                            style={{ margin: 1, padding: 0, backgroundColor: 'white' }}
                            titleStyle={{ fontSize: 14, paddingLeft: 15 }}
                            descriptionStyle={{ height: 0, margin: 0, padding: 0 }}
                        />

                        <Text style={{ padding: 20, fontWeight: 'bold' }}>Customer Care</Text>


                        <List.Item
                            title="+91-88888-77777"
                            left={props => <List.Icon {...props} icon="call" />}
                            style={{ margin: 1, padding: 0, backgroundColor: 'white' }}
                            titleStyle={{ fontSize: 14, paddingLeft: 15 }}
                            descriptionStyle={{ height: 0, margin: 0, padding: 0 }}
                        />

                        <List.Item
                            title="0261-2352115"
                            left={props => <List.Icon {...props} icon="call" />}
                            style={{ margin: 1, padding: 0, backgroundColor: 'white' }}
                            titleStyle={{ fontSize: 14, paddingLeft: 15 }}
                            descriptionStyle={{ height: 0, margin: 0, padding: 0 }}
                        />

                    </View>


                </ScrollView>

            </View>
        )
    }
}



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
});