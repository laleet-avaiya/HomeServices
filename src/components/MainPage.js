import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, ListItem, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubService from './SubService';
import ServiceList from './ServiceList';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const dataList = [
    {
        id: 0,
        title: "AC and Appliance Repair",
        url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg",
        sub_title: "Service | Repair | Installation",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
    {
        id: 1,
        title: "Electricians",
        url: "http://solvitnow.com/wp-content/uploads/2018/05/common-home-electrical-work.jpg",
        sub_title: "Service | Repair | Installation",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
    {
        id: 2,
        title: "Plumbing worker",
        url: "https://mrright.blob.core.windows.net/cdn/content/assets/2015-11/medium/e8b01d5d11a349389e97978152f76984-general%20plumbing%20work.jpg",
        sub_title: "Repair | Installation | Projects",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
    {
        id: 3,
        title: "Carpenter",
        url: "https://thenypost.files.wordpress.com/2015/07/shutterstock_131655707.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        sub_title: "Repair | Projects",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
    {
        id: 4,
        title: "Painter",
        url: "https://img1.ibay.com.mv/is1/full/2019/04/item_2601576_769.jpg",
        sub_title: "Repaint | Project",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
    {
        id: 5,
        title: "Cleaning",
        url: "http://eulenmiddleast.com/wp-content/uploads/2017/02/cleaningservices.png",
        sub_title: "Bathroom | Sofa | Kitchen",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
    {
        id: 6,
        title: "Pest Control",
        url: "https://www.taskforce.com.au/image/pest-control/vic/whittlesea/taskforce-smoking-out-bugs/8746/",
        sub_title: "Service",
        sub_ser_list: [
            {
                id: 1,
                title: "AC Service and Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            },
            {
                id: 2,
                title: "Air Cooler Repair",
                image_url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg"
            }
        ],
    },
]

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
                            value='Welcome' /*'Gandhinagar, Gujarat, India' */
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0, }}
                            inputStyle={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}
                            containerStyle={{ maxHeight: 32, alignSelf: 'flex-start', borderColor: 'white', borderWidth: 0, borderRadius: 10, marginLeft: 0 }}
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

                    <ScrollView style={{ flex: 1, flexDirection: "column", width: "100%", padding: 5 }}>
                        {
                            dataList.map((obj) => {
                                return (
                                    <Card
                                        key={obj.id}
                                        style={{ margin: 2, }}
                                        onPress={() => { navigate({ routeName: 'SubService', params: { service: obj,user: { _id: null, address: 'Home' } } }) }}
                                        // onPress={() => { navigate({ routeName: 'ServiceList', params: { service: obj, user: { _id: null, address: 'Home' } } }) }}

                                    >
                                        <Text style={styles.leftText}>{obj.title}</Text>
                                        <Text style={styles.leftSubText}>{obj.sub_title}</Text>
                                        <Image style={styles.rightImage} source={{ uri: obj.url }}></Image>
                                    </Card>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ActivityContainer}>
                    <ActivityIndicator size="large" color="#ff861b" />
                </View>
            )
        }

    }
}




const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    SubService: {
        screen: SubService,
    },
    ServiceList: {
        screen: ServiceList,
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
    leftText: {
        position: 'absolute',
        top: "20%",
        left: 20,
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 10,
        color: "gray",
    },
    leftSubText: {
        position: 'absolute',
        top: "40%",
        left: 20,
        fontWeight: '500',
        fontSize: 12,
        paddingTop: 10,
        color: "orange",
    },
    rightImage: {
        alignSelf: "flex-end",
        width: 100,
        height: 100,
        margin: 5,
        marginRight: 15,
        borderRadius: 5,
    }
});