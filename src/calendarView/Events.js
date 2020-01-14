//renders all eventCards for user if state is "all" or user's events if state is "user"
import React, { useState, useEffect, Fragment } from 'react';
import { Text, View } from 'react-native';

import EventCard from './EventCard'
import NavBar from '../appView/NavBar'

const Events = (props) => {
    const URL = `http://dc06e5ce.ngrok.io/users/${props.navigation.state.params.id}`
    const [userEvents, setUserEvents] = useState([])
    const [userView, setUserView] = useState("all")
    
    useEffect(() => {
          fetch(URL)
              .then(response => response.json())
              .then(data => {
                setUserEvents(data)
              }).catch(function(err) {
                console.log( err);
              })
    }, []);
   
    const handlePress = (event_id) => {
      props.navigation.navigate("Event", {id: event_id})
    }

  return (
    <>
      {userEvents.events ? userEvents.events.map(event => <EventCard key={event.id} {...event} handlePress={handlePress}/>) : null}
      < NavBar {...props} />
    </>
  );
//add flatlist for userevents
};

export default Events;