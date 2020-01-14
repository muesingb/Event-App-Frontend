import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../src/loginView/LoginPage'
import Events from '../src/calendarView/Events'
import EventPage from '../src/eventsView/eventsContainers/EventShowPage'
import CreateEvent from '../src/eventsView/eventsContainers/CreateEvent'
import SelectDateScreen from '../src/eventsView/eventsContainers/SelectDateScreen'


const screens = {
    "Log In": {
        screen: LoginPage,
        navigationOptions: {
            header: () => false
        },
    },
    "Home": {
        screen: Events
    },
    "Event": {
        screen: EventPage
    },
    "Create Event": {
        screen: CreateEvent
    },
    "Date and Time": {
        screen: SelectDateScreen
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);