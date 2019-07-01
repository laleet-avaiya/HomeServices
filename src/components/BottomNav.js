
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home'
import ServiceHistory from './ServiceHistory'
import Profile from './Profile'

export default class BottomNav extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'history', title: 'Service History', icon: 'history' },
            { key: 'profile', title: 'Profile', icon: 'menu' },
        ],
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
        profile: Profile,
    });

    render() {
        return (
            <BottomNavigation
                activeColor="white"
                barStyle={{ backgroundColor: '#1e9bdd'}}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}