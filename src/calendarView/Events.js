//renders all eventCards for user if state is true or user's events if state is false
import React, { useEffect, Fragment } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { fetchEvents } from '../store/actions/events'
import { showEventInfo } from '../store/actions/events'

import EventCard from './EventCard'
import NavBar from '../appView/NavBar'

import TabNavigator from '../../routes/tabNavigator'
import { render } from 'react-dom';

const Events = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchEvents())
    }, []);
   
    const handlePress = (event) => {
      dispatch(showEventInfo(event.id))
      props.navigation.navigate("Event")
    }

    const createdData = () => {
      return (state.eventsAndUsers.allEventsView === "all" && state.eventsAndUsers.allEvents) ? 
      state.eventsAndUsers.allEvents
       : state.eventsAndUsers.currentUserInfo.created_events
    }

    const attendingData = () => {
      return (state.eventsAndUsers.allEventsView === "all" && state.eventsAndUsers.allEvents) ? 
      state.eventsAndUsers.allEvents
      : state.eventsAndUsers.currentUserInfo.events
    }

    const noEvents = () => {
      if (state.eventsAndUsers.allEventsView === "all" && !state.eventsAndUsers.allEvents[0]) {
        return "Sorry, there aren't any events yet"
      } else if (state.eventsAndUsers.allEventsView === "user" && !state.eventsAndUsers.currentUserInfo.created_events[0]) {
        return "Sorry, you haven't created any events yet"
      }
    }

  return (
    <>
      <View>
        <Text style={styles.welcome}>
          Welcome {state.eventsAndUsers.currentUserInfo.user ? state.eventsAndUsers.currentUserInfo.user.name : null }
        </Text>
      </View>
      <View>
        <Text style={styles.noEvents}>
          {noEvents()}
        </Text>
      </View>
      <FlatList data={createdData()} renderItem={({item}) => <EventCard key={item.id} {...item} handlePress={handlePress}/>}/>
      < NavBar {...props} />
      {/* <TabNavigator /> */}
    </>
  );
};

export default Events;

const styles = StyleSheet.create({
  welcome: {
   fontWeight: "bold",
   fontSize: 40,
   alignSelf: "center",
   marginTop: 10
  },
  noEvents: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: 20
  }
})