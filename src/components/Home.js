import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Login from './Login'
import Signup from './Signup'
import ServiceList from './ServiceList'
import ForgotPassword from './ForgotPassword'

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
            user:false,
            data: []
        };
    }


    async componentWillMount() {
        await fetch('https://protected-coast-90386.herokuapp.com/api/services/')
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
            backgroundColor: '#1e9bdd',
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
                    <SearchBar
                        placeholder="I'm Looking for..."
                        onChangeText={this.updateSearch}
                        value={search}
                        containerStyle={{ backgroundColor: '#1e9bdd', borderBottomColor: '#1e9bdd', borderTopColor: '#1e9bdd' }}
                        inputContainerStyle={{ backgroundColor: 'white', borderBottomColor: '#607fa7', borderTopColor: '#607fa7' }}
                    />
                    <ScrollView>
                        <View style={styles.cards}>
                            {
                                data.map((u) => {
                                    return (
                                        <TouchableOpacity style={styles.cardContainer} key={u._id}
                                            onPress={() => { navigate({ routeName: 'ServiceList', params: { hello: u.name } }) }}
                                        >
                                            <Card containerStyle={styles.card}>
                                                <Image
                                                    style={styles.image}
                                                    resizeMode="cover"
                                                    source={{ uri: u.avtar }}
                                                />
                                                <Text style={styles.name}>{u.name}</Text>
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
                    <ActivityIndicator size="large" color="#1e9bdd" />
                </View>
            )
        }

    }
}




const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    ForgotPassword: {
        screen: ForgotPassword,
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