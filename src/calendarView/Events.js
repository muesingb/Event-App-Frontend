//renders all eventCards for user if state is "all" or user's events if state is "user"
import React, { useState, useEffect, Fragment } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { fetchEvents } from '../store/actions/events'

import EventCard from './EventCard'
import NavBar from '../appView/NavBar'

import TabNavigator from '../../routes/tabNavigator'

const Events = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchEvents())
    }, []);
   
    const handlePress = (event_id) => {
      props.navigation.navigate("Event", {id: event_id})
    }

  return (
    <>
      {state.eventsAndUsers.allEvents ? state.eventsAndUsers.allEvents.map(event => <EventCard key={event.id} {...event} handlePress={handlePress}/>) : null}
      < NavBar {...props} />
      {/* <TabNavigator /> */}
    </>
  );
//add flatlist for userevents
};

export default Events;