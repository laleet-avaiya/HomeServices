import React from 'react';
import { Modal, Text, Image, StyleSheet, TextInput, TouchableHighlight, View, Alert } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon, Badge, withBadge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from "react-native-modal-datetime-picker";


const list = [
    {
        name: 'AC Service and Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        // subtitle: 'Vice President'
    },
    {
        name: 'Refrigerator Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: 'Vice Chairman'
    },
    {
        name: 'Washing Machine Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'Microwave Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'Geyser / Water Heater Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'RO or Water Purifier Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'RO or Water Purifier Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'Mobile Repair',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },
    {
        name: 'TV Repair & Installation',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: ''
    },

]


export default class ServiceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            title: '',
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            date: '',
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
        alert(d);
        this.setState({ date: date })
        // alert(this.state.date);
        this.hideDatePicker();
    };







    static navigationOptions = {
        headerStyle: {
            display: 'none',
        },
    };

    render() {

        const { navigate } = this.props.navigation;
        const { service_tnc, service_charge, service_name } = this.props.navigation.state.params;
        const { date } = this.state;


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

                    <Text style={styles.date}>{date.toString()}</Text>

                    <Button title="Select Date & Time" buttonStyle={styles.button} onPress={this.showDatePicker} />
                    <DateTimePicker
                        isVisible={this.state.isDatePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDatePicker}
                        mode='datetime'
                    />

                    <Button title="Book" buttonStyle={styles.button}></Button>

                </View>
            </ScrollView>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
        margin:5,
        textAlign: 'center',
        color: 'black'
    },
    button: {
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },

});