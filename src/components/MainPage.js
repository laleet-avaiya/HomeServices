import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, ListItem, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubService from './SubService';
import Booking from './Booking';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const dataList = [
    {
        id: 0,
        title: "Appliance Repair",
        url: "http://www.neweraprofessionalsdubai.com/wp-content/uploads/2018/11/ac-service1.jpg",
        sub_title: "Service | Repair | Installation",
        sub_ser_list: [
            {
                id: 1,
                title: "RO or Water Purifier",
                image_url: "http://tryme.in/wp-content/uploads/2019/03/Water-Filtration-Services-1.jpg"
            },
            {
                id: 2,
                title: "Refrigerator Repair",
                image_url: "http://www.freekupyourlife.com/wp-content/uploads/2019/04/refrigerator-repair.png"
            },
            {
                id: 3,
                title: "Washing Machine Repair",
                image_url: "https://gosfordappliancerepairs.com/images/slide1.jpg"
            },
            {
                id: 4,
                title: "Microwave Repair",
                image_url: "http://www.masterchoiceappliances.ca/wp-content/uploads/2019/01/Microwave-Repair-_icon-1.jpeg"
            },
            {
                id: 5,
                title: "TV Repair & Installation",
                image_url: "http://24x7homessolution.com/images/tve.jpg"
            },
            {
                id: 6,
                title: "Geyser / Water Heater Repair",
                image_url: "http://www.saenterprisesgeyser.com/images/g-service.jpg"
            },
            {
                id: 7,
                title: "AC Service and Repair",
                image_url: "https://4.imimg.com/data4/EB/BQ/MY-9274511/ac-service-and-repair-500x500.png"
            },
            {
                id: 8,
                title: "Air Cooler Repair",
                image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOwuV9wxmFpB7B16qx8EeDcXc3UhNA3j_lRXUjPsaHxj3Bihc"
            },
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
                title: "Fan",
                image_url: "https://www.lg.com/in/images/fans/md06091476/gallery/01-1100.jpg"
            },
            {
                id: 2,
                title: "Switches & Sockets",
                image_url: "https://5.imimg.com/data5/WK/AI/MY-31810313/switches-sockets-fan-regulators-and-dimmers-500x500.jpg"
            },
            {
                id: 3,
                title: "Lights",
                image_url: "https://www.partylights.com/images/product-images/KC9100WHE17CL_1-g50-globe-string-lights-1.jpg"
            },
            {
                id: 4,
                title: "MCB & Fuse",
                image_url: "https://mrright.blob.core.windows.net/cdn/content/assets/2015-11/small/d9b3534c890543a18f365c93b200d2c5-mcb%20or%20fuse%20repair.jpg"
            },
            {
                id: 5,
                title: "Geyser",
                image_url: "https://images.jdmagicbox.com/comp/pune/j5/020pxx20.xx20.170714112906.q1j5/catalogue/yogesh-gas-geyser-sales-and-services-bibvewadi-pune-gas-stove-repair-and-services-39jnx.jpg"
            },
            {
                id: 6,
                title: "House Wiring",
                image_url: "https://5.imimg.com/data5/RS/ME/MY-2112069/house-wiring-cable-500x500.jpg"
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
                title: "Toilet",
                image_url: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1204420-894&recipeName=680"
            },
            {
                id: 2,
                title: "Tap & Mixers",
                image_url: "https://www.plumbworld.co.uk/images/sauber-baden-pull-out-kitchen-mixer-tap-chrome-product-32645-gallery-QLT6-default-M.jpg"
            },
            {
                id: 3,
                title: "Blockage",
                image_url: "https://johntheplumber.ca/wp-content/uploads/2017/05/blocked-sink-600x300.jpg"
            },
            {
                id: 4,
                title: "Bath Fittings",
                image_url: "https://images.victorianplumbing.co.uk/images/Kent-Single-Ended-Bath-n-p.jpg"
            },
            {
                id: 5,
                title: "Shower",
                image_url: "https://www.thespruce.com/thmb/JWoqAsLZ6M1e8117eB11seMti2I=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/running-water-shower-head-451333633-5c5ca7ac46e0fb0001dccfad.jpg"
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
                title: "Drill & Hang",
                image_url: "https://www.lowes.com/projects/images/how-tos/Home-Decor/how-to-hang-pictures-on-a-wall-d-ring-drive-fastener.jpg"
            },
            {
                id: 2,
                title: "Lock",
                image_url: "https://i.pinimg.com/originals/73/5a/29/735a297128ae8d8c298665f543616559.jpg"
            },
            {
                id: 3,
                title: "Furniture Assembly",
                image_url: "http://www.lavalfurniture.ie/images/featured1.jpg"
            },
            {
                id: 4,
                title: "Drawer",
                image_url: "https://www.boispassionsetcie.com/photos/productsimages/f303876138.jpg"
            },
            {
                id: 5,
                title: "Door",
                image_url: "https://static.wixstatic.com/media/db9ca4_e10078c93f8b40f28c74be67a3e05c1c.jpg/v1/fill/w_326,h_582,al_c,q_80,usm_0.66_1.00_0.01/db9ca4_e10078c93f8b40f28c74be67a3e05c1c.webp"
            },
            {
                id: 6,
                title: "New Furniture Making",
                image_url: "https://mrright.blob.core.windows.net/cdn/content/assets/2015-11/small/964bdb8d90e14a5882a1bda00ef3311e-new%20furniture%20making.jpg"
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
                title: "Wall Paint",
                image_url: "https://5.imimg.com/data5/LV/XG/MY-11537593/commercial-painting-services-500x500.jpg"
            },
            {
                id: 2,
                title: "House Paint",
                image_url: "https://na.rdcpix.com/1347759190/b57cb3fe060b4e365f4756e99b2b4287w-c221816xd-w685_h860_q80.jpg"
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
                title: "Sofa Cleaning",
                image_url: "https://3.imimg.com/data3/LL/IV/MY-10315455/sofa-shampooing-500x500.jpg"
            },
            {
                id: 2,
                title: "Bathroom Cleaning",
                image_url: "http://mit24h.com/g/2/ti/tiles-floor-designs-youtube-small-bathroom-ideas-photo-gallery-comfort-room-design-layout-tool-free-color-trends-interior-india-best-paint-colors-popular.jpg"
            },
            {
                id: 3,
                title: "Home Deep Cleaning",
                image_url: "https://tullyscleaning.com/wp-content/uploads/shutterstock_386746354.jpg"
            },
            {
                id: 4,
                title: "Kitchen  Deep Cleaning",
                image_url: "http://static.oprah.com/images/o2/201405/201405-orig-cleanup-trash-949x534.jpg"
            },
            {
                id: 5,
                title: "Carpet Cleaning",
                image_url: "https://cherrycarpetcleaning.co.uk/wp-content/uploads/2018/05/2-450x300.jpg"
            },
            {
                id: 6,
                title: "Car Cleaning",
                image_url: "https://www.uk-blog.com/wp-content/uploads/Car-Wash.jpg"
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
                id: 2,
                title: "Pest Control Services For Cockroach",
                image_url: "https://beebes.com/wp-content/uploads/2018/07/Cockroach-Pest-Control.jpg"
            },
            {
                id: 3,
                title: "Pest Control Services For Mosquito",
                image_url: "https://smarterpestcontrol.com/wp-content/uploads/2017/08/Mosquito-on-Skin-with-Green-Background-500x300.jpg"
            },
            {
                id: 4,
                title: "Pest Control Services For Garden",
                image_url: "http://www.ecohomeideas.com/wp-content/uploads/2015/02/pest-control-eco-friendly-way.jpg"
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
                                        onPress={() => { navigate({ routeName: 'SubService', params: { service: obj, user: { _id: null, address: 'Home' } } }) }}
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
    Booking: {
        screen: Booking,
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