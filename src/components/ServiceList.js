import React from 'react';
import { Modal, Text, Image, StyleSheet, TouchableHighlight, ActivityIndicator, View, Alert } from 'react-native';
import { SearchBar, Card, ListItem, Button, Badge, withBadge, Input } from 'react-native-elements';

import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from "react-native-modal-datetime-picker";
import { TextInput, Searchbar } from 'react-native-paper';
import axios from 'axios';


import Login from './Login';
import Signup from './Signup';
import UserDetail from './UserDetail'
import ForgotPassword from './ForgotPassword';





export default class ServiceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            date: '',
            waiting: false,
            msg: '',
            address: this.props.navigation.state.params.user.address,
            client_id: this.props.navigation.state.params.user._id,
            work: '',
            login: false,
        };
    }


    static navigationOptions = {
        // title:this.state.address,
        headerStyle: {
            // display: 'none',
            backgroundColor: "#ff861b",
        },
    };


    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };

    handleDatePicked = date => {
        var d = new Date(date);
        this.setState({ date: date })
        this.hideDatePicker();
    };




    bookingHandler = (service_type, date_time) => {
        this.setState({ waiting: true })

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        var insert_body = new URLSearchParams();
        insert_body.append('client_id', this.state.client_id);
        insert_body.append('service_type', service_type);
        insert_body.append('address', this.state.address);
        insert_body.append('date_time', date_time);


        axios.post('https://booking-service01.herokuapp.com/add_service_request/', insert_body, config)
            .then((response) => {
                // alert(JSON.stringify(response.data));
                this.setState({ waiting: false, msg: response.data, date: '' })
            })
            .catch((error) => {
                alert(error);
                this.setState({ waiting: false, date: '' })
            });

    }




    loginHandler = () => {
        this.setState({ login: true, user: {} });
        alert(this.state.login);
    }



    handleChange(text) {

        this.setState({
            address: text
        });
    }

    handleChangeWork(text) {

        this.setState({
            work: text
        });
    }



    render() {

        const { navigate } = this.props.navigation;
        const { _id, service_tnc, service_charge, service_name } = this.props.navigation.state.params.service;
        const { service, changeLoginState, user } = this.props.navigation.state.params;
        const { login, date, address, waiting, msg, work } = this.state;

        if (login) {

            return (
                <ScrollView>
                    <View style={styles.container}>

                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            label="Work Description"
                            name="work"
                            value={work}
                            mode="outlined"
                            onChangeText={(text) => this.handleChangeWork(text)}
                            style={{ height: 100, width: '90%', alignSelf: 'center' }}
                        >
                        </TextInput>


                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            label="Address"
                            name="address"
                            value={address}
                            mode="outlined"
                            underlineColorAndroid="#ff861b"
                            underlineColor="#ff861b"
                            onChangeText={(text) => this.handleChange(text)}
                            style={{ height: 100, width: '90%', alignSelf: 'center', marginTop: 8, }}
                        >
                        </TextInput>


                        <TextInput
                            label="Visiting Charge"
                            value={service_charge}
                            name="address"
                            mode="outlined"
                            editable={false}
                            disabled
                            onChangeText={(text) => this.handleChange(text)}
                            style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}
                        >
                        </TextInput>



                        {date ?
                            (
                                <TextInput
                                    label="Date & Time"
                                    value={date.toString()}
                                    name="address"
                                    mode="outlined"
                                    editable={false}
                                    disabled
                                    onChangeText={(text) => this.handleChange(text)}
                                    style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}
                                >
                                </TextInput>



                            ) :
                            (<Text></Text>)
                        }



                        <Button
                            title="Select Date & Time"
                            titleStyle={{ color: '#ff861b' }}
                            buttonStyle={styles.buttonDT}
                            onPress={this.showDatePicker}
                        />
                        <DateTimePicker
                            isVisible={this.state.isDatePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDatePicker}
                            mode='datetime'
                            titleStyle={{ backgroundColor: "#ff861b" }}
                        />

                        {date ?
                            (<Button
                                title="Book"
                                titleStyle={{ color: '#ff861b' }}
                                buttonStyle={styles.buttonDT}
                                onPress={() => this.bookingHandler(_id, date)}>
                            </Button>
                            ) : (<Text style={styles.msg}>{msg}</Text>)
                        }
                        {waiting ? (
                            <View style={styles.ActivityContainer}>
                                <ActivityIndicator size="large" color="#ff861b" />
                            </View>) : (<Text></Text>)
                        }

                    </View>
                </ScrollView>
            )
        } else {
            return (
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

                    <Text>HEllo</Text>
                    <Text
                        style={{ position: 'absolute', textAlign: 'center', right: 15, top: 15, width: 60, color: 'black', padding: 5, borderColor: 'black', borderWidth: 1, borderRadius: 3 }}
                        onPress={() => navigate({ routeName: 'Login', params: { loginHandler: this.loginHandler } })}
                    >LOGIN</Text>

                </ScrollView>
            )
        }
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16,
        color: 'black'
    },
    title1: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 0,
        color: 'black'
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
        // padding: 0,
        margin: 5,
        textAlign: 'center',
        color: 'black'
    },
    book_button: {
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
        // marginTop: 50,
    },
    buttonDT: {
        backgroundColor: 'transparent',
        borderColor: '#ff861b',
        borderWidth: 2,
        width: '60%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,

    },
    msg: {
        fontSize: 12,
        fontWeight: 'bold',
        padding: 0,
        color: '#4CAF50',
        textAlign: 'center',

    },
    ActivityContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        justifyContent: 'center',
    },



});