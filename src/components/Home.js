import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, Card, ListItem, Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import ServiceList from './ServiceList'


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            user: false,
            search: '',
            data: [],
        };
    }


    async componentWillMount() {
        await fetch('https://admin-service87.herokuapp.com/services/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    updateSearch = search => {
        this.setState({ search });
    };

    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: '#007ceb',
            display: 'none',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
        },
    };
    render() {
        const { search, data } = this.state;
        const { navigate } = this.props.navigation;

        if (data.length > 0) {
            return (

                <View style={styles.container}>

                    <View style={{ backgroundColor: '#ff861b', }}>

                        <Input
                            value='Gandhinagar, Gujarat, India'
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0, }}
                            inputStyle={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}
                            containerStyle={{ maxHeight: 32, alignSelf: 'flex-start', borderColor: 'white', borderWidth: 0, borderRadius: 10, marginLeft: 0 }}
                            leftIcon={
                                <Icon
                                    name='location-arrow'
                                    size={18}
                                    color='white'
                                    style={{ padding: 0 }}
                                />
                            }
                            editable={false}
                        />
                        <SearchBar
                            placeholder="Search for a service"
                            onChangeText={this.updateSearch}
                            value={search}
                            containerStyle={{ backgroundColor: '#ff861b', borderBottomColor: '#ff861b', borderTopColor: '#ff861b', }}
                            inputContainerStyle={{ backgroundColor: 'white', borderBottomColor: '#607fa7', borderTopColor: '#607fa7', }}
                        />
                    </View>

                    <ScrollView>
                    
                        <View style={styles.cards}>
                            {
                                data.map((u) => {
                                    return (
                                        <TouchableOpacity style={styles.cardContainer} key={u._id}
                                            onPress={() => { navigate({ routeName: 'ServiceList', params: { service: u, user: { _id: u._id, address: 'Home' } } }) }}
                                        >
                                            <Card containerStyle={styles.card}>
                                                <Image
                                                    style={styles.image}
                                                    resizeMode="cover"
                                                    source={{ uri: u.service_icon }}
                                                />
                                                <Text style={styles.name}>{u.service_name}</Text>
                                            </Card>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ActivityContainer}>
                    <ActivityIndicator size="large" color="#007ceb" />
                </View>
            )
        }

    }
}




const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    ServiceList: {
        screen: ServiceList,
    },
}, {
        initialRouteName: 'Home',
    });




export default createAppContainer(AppNavigator);





const styles = StyleSheet.create({
    ActivityContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%'
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        padding: 5,
    },

    cardContainer: {
        width: '50%',
    },

    card: {
        width: '100%',
        margin: 0,
    },

    image: {
        alignSelf: 'center',
        width: 50,
        height: 50,
    },


    name: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
});