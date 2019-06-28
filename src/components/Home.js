import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Login from './Login'
import Signup from './Signup'
import ServiceList from './ServiceList'
import ForgotPassword from './ForgotPassword'


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

class Home extends React.Component {


    constructor() {
        super();
        this.state = {
            search: '',
            data:[]
        };
    }


    static navigationOptions = {
        title: 'Welcome',
        // headerStyle: {
        //     display: 'none',
        // },
    };

    updateSearch = search => {
        this.setState({ search });
    };

    getServiceList = () => {
        fetch('http://localhost:5000/api/services').then(e => this.setState({data:e}));
    }
    render() {
        const { search,data } = this.state;
        const { navigate } = this.props.navigation;
        this.getServiceList();

        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                    inputStyle={{ color: 'grey', backgroundColor: 'transparent' }}
                    inputContainerStyle={{ borderWidth: 0 }}
                    lightTheme={false}
                    round={true}
                />

                <ScrollView>
                    <View style={styles.cards}>

                    <Text>{data}</Text>
                        {
                            users.map((u, i) => {
                                return (
                                    <TouchableOpacity style={styles.cardContainer} key={i}
                                        onPress={() => { navigate({ routeName: 'ServiceList', params: { hello: u.name } }) }}
                                    >
                                        <Card containerStyle={styles.card}>
                                            <Image
                                                style={styles.image}
                                                resizeMode="cover"
                                                source={{ uri: u.avatar }}
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
    ForgotPassword:{
        screen:ForgotPassword,
    },
    ServiceList: {
        screen: ServiceList,
    },
}, {
        initialRouteName: 'Home',
    });




export default createAppContainer(AppNavigator);





const styles = StyleSheet.create({
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