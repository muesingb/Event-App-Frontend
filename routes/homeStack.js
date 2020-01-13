import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../src/loginView/LoginPage'
import CreateEvent from '../src/eventsView/eventsContainers/CreateEvent'

const screens = {
    Home: {
        screen: LoginPage
    },
    CreateEvent: {
        screen: CreateEvent
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);