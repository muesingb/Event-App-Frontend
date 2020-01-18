//renders all eventCards for user if state is true or user's events if state is false
import React, { useEffect, Fragment } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { fetchEvents } from '../store/actions/events'

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
   
    const handlePress = (event_id) => {
      props.navigation.navigate("Event", {id: event_id})
    }

    const data = () => {
      return (state.eventsAndUsers.allEventsView === "all" && state.eventsAndUsers.allEvents) ? 
      state.eventsAndUsers.allEvents
       : state.eventsAndUsers.currentUserInfo.created_events
    }

  return (
    <>
      <View>
        <Text>
          Welcome {state.eventsAndUsers.currentUserInfo.user ? state.eventsAndUsers.currentUserInfo.user.name : null }
        </Text>
      </View>
      <FlatList data={data()} renderItem={({item}) => <EventCard key={item.id} {...item} handlePress={handlePress}/>}/>
      < NavBar {...props} />
      {/* <TabNavigator /> */}
    </>
  );
};

export default Events;