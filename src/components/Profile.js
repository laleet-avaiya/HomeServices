import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import Login from './Login';
import Signup from './Signup';
import UserDetail from './UserDetail'
import ForgotPassword from './ForgotPassword';



const user = {
    name: 'Laleet Avaiya',
    email: '201812087@daiict.ac.in',
    phone: '7359324923',
    address: '874/4, Sector-2C, Gandhinagar-382007, Gujarat',
    image: 'https://png.pngtree.com/svg/20170602/0db185fb9c.png',
    dob: '01 January 1996',
}

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            display: 'none',
        },
    };

    constructor() {
        super();
        this.state = {
            search: '',
            user: false,
        };
        this.loginHandler = this.loginHandler.bind(this);
    }


    updateSearch = search => {
        this.setState({ search });
    };

    loginHandler = () => {
        this.fetchUserData();
        this.setState({ login: true });
    }

    logoutHandler = () => {
        this.setState({ login: false, user: {} });
    }

    fetchUserData = () => {
        fetch('https://client-service02.herokuapp.com/client/5d1ae5c7be29654e7277f4fe')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ user: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async componentWillMount() {
        await fetch('https://client-service02.herokuapp.com/client/5d1ae5c7be29654e7277f4fe')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ user: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const { search, login, user } = this.state;
        const { navigate } = this.props.navigation;

        if (!login) {
            return (
                <View style={styles.loginPage}>
                    <Button buttonStyle={styles.button} title="Test" onPress={() => this.loginHandler()} />
                    <Button buttonStyle={styles.button} title="Login" onPress={() => navigate({ routeName: 'Login', params: { loginHandler: this.loginHandler } })} />
                    <Button buttonStyle={styles.button} title="Signup" onPress={() => navigate({ routeName: 'Signup' })} />
                </View>

            )
        }


        if (user.name) {
            return (
                <View style={styles.contaistylesner}>
                    <ScrollView>
                        <View style={styles.container}>
                            <Card title={user.name} >
                                <Image source={{ uri: user.image }} style={styles.image}></Image>
                                <Badge onPress={() => { alert('Profile Edit...') }} badgeStyle={styles.editProfile} value='Update Profile' status="primary" />
                            </Card>
                            <Card title="Email" titleStyle={styles.text}><Text>{user.email}</Text></Card>
                            <Card title="Contact" titleStyle={styles.text}><Text>{user.phone}</Text></Card>
                            <Card title="Address" titleStyle={styles.text}><Text>{user.address}</Text></Card>
                            <Card title="Date of birth" titleStyle={styles.text}><Text>{user.date_of_birth}</Text></Card>
                            <Button title='Logout' buttonStyle={styles.logout} onPress={() => this.logoutHandler()}></Button>
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
    Profile: {
        screen: Profile
    },
    Login: {
        screen: Login,
    },
    Signup: {
        screen: Signup,
    },
    UserDetail: {
        screen: UserDetail
    },
    ForgotPassword: {
        screen: ForgotPassword,
    },
}, {
        initialRouteName: 'Profile',
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
        width: '100%',
        // marginBottom:50,
    },

    loginPage: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        justifyContent: 'center',

    },
    button: {
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 30,
    },

    cards: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        padding: 5,
    },
    card: {
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '95%',
        margin: 5,
    },

    // label: {
    //     fontWeight: '500',
    //     fontSize: 12,
    //     margin: 2,
    // },
    // name: {
    //     textAlign: 'center',
    //     marginTop: 15,
    // },
    text: {
        textAlign: 'left',
        fontSize: 14
    },
    logout: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    editProfile: {
        padding: 10,

    }
});