import React from 'react';
import { Modal, Text, Image, StyleSheet, TextInput, TouchableHighlight, ActivityIndicator, View, Alert } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from 'axios';



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
        };
    }




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


    static navigationOptions = {
        // title:this.state.address,
        headerStyle: {
            // display: 'none',
        },
    };

    handleChange(text) {

        this.setState({
            address: text
        });
    }


    render() {

        const { navigate } = this.props.navigation;
        const { _id, service_tnc, service_charge, service_name } = this.props.navigation.state.params.service;
        const { date, address, waiting, msg } = this.state;


        return (
            <ScrollView>

                <Text style={styles.title}>{service_name}</Text>

                <View style={styles.container}>


                    <Card title="Terms & Conditions" titleStyle={{ textAlign: "left" }}>
                        <Text style={styles.title1}>{service_tnc}</Text>
                    </Card>

                    <Card title="Visiting Charge" titleStyle={{ textAlign: "left" }}>
                        <Text style={styles.title1}> $ {service_charge}</Text>
                    </Card>

                    <Card title="Address" titleStyle={{ textAlign: "left" }}>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            defaultValue={address}
                            name="address"
                            onChangeText={(text) => this.handleChange(text)}
                            style={{ height: 100, textAlignVertical: 'top', borderColor: "gray", borderWidth: 1, borderStyle: 'dashed' }}></TextInput>
                    </Card>


                    {date ?
                        (<Card title="Date & Time" titleStyle={{ textAlign: "left" }}>
                            <Text style={styles.title1}> {date.toString()}</Text>
                        </Card>
                        ) :
                        (<Text></Text>)
                    }



                    <Button
                        title="Select Date & Time"
                        titleStyle={{ color: '#4CAF50' }}
                        buttonStyle={styles.buttonDT}
                        onPress={this.showDatePicker}
                    />
                    <DateTimePicker
                        isVisible={this.state.isDatePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDatePicker}
                        mode='datetime'
                    />


                    {date ?
                        (<Button
                            title="Book"
                            titleStyle={{ color: '#4CAF50' }}
                            buttonStyle={styles.buttonDT}
                            onPress={() => this.bookingHandler(_id, date)}>
                        </Button>
                        ) : (<Text style={styles.msg}>{msg}</Text>)
                    }
                    {waiting ? (
                        <View style={styles.ActivityContainer}>
                            <ActivityIndicator size="large" color="#007ceb" />
                        </View>) : (<Text></Text>)
                    }

                </View>
            </ScrollView>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
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
        borderColor: '#4CAF50',
        borderWidth: 2,
        width: '60%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 0,
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