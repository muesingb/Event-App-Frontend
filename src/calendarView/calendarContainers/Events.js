//renders all eventCards for user if state is "all" or user's events if state is "user"
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

// import EventCard

const Events = (props) => {
    const URL = `http://d2e3241a.ngrok.io/users/${props.navigation.state.params.id}`
    const [userEvents, setUserEvents] = useState([])
    
    useEffect(() => {
          fetch(URL)
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                setUserEvents(data)
                mapEvents()
              }).catch(function(err) {
                console.log( err);
              })
          }, []);

    const mapEvents = () => {
      userEvents.events.map(event => console.log(event.name))
    }

  return (
    <View >
      <Text>hiiii from user Events page</Text>
    </View>
  );

};

export default Events;