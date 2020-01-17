//renders filled out eventInfoCard
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import EventInfoCard from '../eventsComponents/EventInfoCard'

import { showUserInfo, showUser } from '../../store/actions/users'
import { showEventInfo } from '../../store/actions/events'

const EventPage = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.navigation.state.params.id) {
            dispatch(showEventInfo(props.navigation.state.params.id))
        } else {
            dispatch(showEventInfo(state.eventsAndUsers.showEventInfo.id))
        }
    }, []);

    const handleUserProfilePress = (user_id) => {
        dispatch(showUser(user_id))
        dispatch(showUserInfo(user_id))
        props.navigation.navigate("Profile", {id: user_id})
    }

    return (
        <View>
            {state.eventsAndUsers.showEventInfo.event ? 
            <EventInfoCard {...state.eventsAndUsers.showEventInfo} handleUserProfilePress={handleUserProfilePress}/>
            : null}
        </View>
    );

};

export default EventPage;