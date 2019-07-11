
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home'
import ServiceHistory from './ServiceHistory'
import Profile from './Profile'
import HelpCenter from './HelpCenter'




export default class BottomNav extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'history', title: 'My Bookings', icon: 'event-note' },
            { key: 'helpCenter', title: 'Help Center', icon: 'live-help' },
            { key: 'profile', title: 'Profile', icon: 'account-box' },
        ],
        login: false,
    };

    // Header
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            display: 'none',
        },
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        home: Home,
        history: ServiceHistory,
        helpCenter: HelpCenter,
        profile: Profile,
    });

    render() {
        return (
            <BottomNavigation
                activeColor="#ff861b"
                style={{height:40}}
                barStyle={{ backgroundColor: 'white', }}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                
            />
        );
    }
}