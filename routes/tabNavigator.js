import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../src/loginView/LoginPage'
import Events from '../src/calendarView/Events'
import EventPage from '../src/eventsView/eventsContainers/EventShowPage'
import CreateEvent from '../src/eventsView/eventsContainers/CreateEvent'
import SelectDateScreen from '../src/eventsView/eventsContainers/SelectDateScreen'
import UserShowPage from '../src/usersView/UserShowPage'

import NavBar from '../src/appView/NavBar'
import Navigator from './homeStack'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        "Create Event": {
            screen: CreateEvent
        }
    },
    {
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );

export default createAppContainer(TabNavigator)

