import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../src/loginView/LoginPage'
import CreateEvent from '../src/eventsView/eventsContainers/CreateEvent'
import Events from '../src/calendarView/calendarContainers/Events'

const screens = {
    Home: {
        screen: LoginPage
    },
    Events: {
        screen: Events
    },
    CreateEvent: {
        screen: CreateEvent
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);