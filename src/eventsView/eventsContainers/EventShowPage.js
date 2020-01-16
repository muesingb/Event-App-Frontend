//renders filled out eventInfoCard
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import EventInfoCard from '../eventsComponents/EventInfoCard'

import { showUserInfo, showUser } from '../../store/actions/users'

const EventPage = (props) => {
    const dispatch = useDispatch()

    const URL = `http://31a2db4e.ngrok.io/events/${props.navigation.state.params.id}`
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
        dispatch(showUser(user_id))
        dispatch(showUserInfo(user_id))
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