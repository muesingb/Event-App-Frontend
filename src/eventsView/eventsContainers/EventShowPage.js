//renders filled out eventInfoCard
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import EventInfoCard from '../eventsComponents/EventInfoCard'
// import {} from '../store/actions/'

const EventPage = (props) => {

    const URL = `http://b43ae261.ngrok.io/events/${props.navigation.state.params.id}`
    const [eventInfo, setEventInfo] = useState({})
  
    useEffect(() => {
          fetch(URL)
              .then(response => response.json())
              .then(data => {
                setEventInfo(data)
              }).catch(function(err) {
                console.log( err);
              })
          }, []);

    const handleUserProfilePress = (user_id) => {
        props.navigation.navigate("Profile", {id: user_id})
    }

    return (
        <View>
            {eventInfo.event? 
            <EventInfoCard {...eventInfo} handleUserProfilePress={handleUserProfilePress}/>
            : null}
        </View>
    );

};

export default EventPage;