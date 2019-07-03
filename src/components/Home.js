import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Login from './Login'
import Signup from './Signup'
import ServiceList from './ServiceList'
<<<<<<< HEAD
import BookingDetailPage  from './BookingDetailPage'


const users = [
    {
        name: 'Electronic Repair',
        avatar: 'http://chittagongit.com/download/101717',
    },

    {
        name: 'Plumber',
        avatar: 'https://cdn.websites.hibu.com/7da2af4cb2454e0f9a5b63524adbc06d/dms3rep/multi/mobile/hhh1_revised.png',
    },
    {
        name: 'Carpenter',
        avatar: 'http://pluspng.com/img-png/carpentry-png-hd-512x512-pixel-512.png',
    },
    {
        name: 'Painter',
        avatar: 'https://fayetteville.mrcabinetpainter.com/wp-content/uploads/2018/08/mr-cabinet-painter-paintbrush-icon.png',
    },
    {
        name: 'Cleaning',
        avatar: 'http://sterlingcleaningservicesllc.com/wp-content/uploads/2016/07/cropped-sterling-cleaning-services-icon-1.png',
    },

    {
        name: 'Pest Control',
        avatar: 'http://www.pearservices.com/wp-content/uploads/2016/08/pest-control-icons.png',
    },

    {
        name: 'Laptop Repair',
        avatar: 'https://images.cellphonerepair.com/wp-content/uploads/2016/10/computer-repair-page.png',
    }, {
        name: 'Electrician',
        avatar: 'https://cdn0.iconfinder.com/data/icons/colourful-education/250/bulb-512.png',
    },
]
=======
import ForgotPassword from './ForgotPassword'
>>>>>>> ab09ef4b72c6560b0ef3031c98d3314bfd7d1b24

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
    BookingDetails:{
        screen:BookingDetailPage,
    }
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