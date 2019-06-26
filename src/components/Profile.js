


import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';



const user = {
    name: 'Laleet Avaiya',
    email: '201812087@daiict.ac.in',
    phone: '7359324923',
    address: '874/4, Sector-2C, Gandhinagar-382007, Gujarat',
    avtar: 'https://png.pngtree.com/svg/20170602/0db185fb9c.png',
    dob: '01 January 1996',
}

export default class Profile extends React.Component {
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
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container}>
                        <Card title={user.name} >
                            <Image source={{ uri: user.avtar }} style={styles.image}></Image>
                            <Badge onPress={() => { alert('Profile Edit...') }} badgeStyle={styles.editProfile} value='Update Profile' status="primary" />
                        </Card>
                        <Card title="Email" titleStyle={styles.text}><Text>{user.email}</Text></Card>
                        <Card title="Contact" titleStyle={styles.text}><Text>{user.phone}</Text></Card>
                        <Card title="Address" titleStyle={styles.text}><Text>{user.address}</Text></Card>
                        <Card title="Date of birth" titleStyle={styles.text}><Text>{user.dob}</Text></Card>
                        <Button title='Logout' buttonStyle={styles.logout}></Button>
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
        // marginBottom:50,
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