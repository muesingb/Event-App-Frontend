import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';

import LoginPage from '../src/loginView/LoginPage'
import Events from '../src/calendarView/Events'
import EventPage from '../src/eventsView/eventsContainers/EventShowPage'
import CreateEvent from '../src/eventsView/eventsContainers/CreateEvent'
import SelectDateScreen from '../src/eventsView/eventsContainers/SelectDateScreen'
import UserShowPage from '../src/usersView/UserShowPage'

// const state = useSelector(state => state)

const screens = {
    "Log In": {
        screen: LoginPage,
        navigationOptions: {
            header: () => false
        },
    },
    "Home" : {
        screen: Events
    },
    "Event": {
        screen: EventPage
    },
    "Create Event": {
        screen: CreateEvent
    },
    "Date and Time": {
        screen: SelectDateScreen,
        navigationOptions: {
            headerRight: () => (
                <Button
                  onPress={() => alert('Do Something!')}
                  title="OK"
                />)
        }
    },
    "Profile": {
        screen: UserShowPage
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

const styles = StyleSheet.create({
    welcome: {
     fontWeight: "bold",
     fontSize: 40,
     alignSelf: "center",
     marginTop: 10
    }
  })