//renders filled out eventInfoCard
import React, { useEffect } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import EventInfoCard from '../eventsComponents/EventInfoCard'

import { showUserInfo, showUser } from '../../store/actions/users'
import { showEventInfo } from '../../store/actions/events'

const EventPage = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const event = useSelector(state => state.eventsAndUsers.showEventId)

    const handleUserProfilePress = (user_id) => {
        dispatch(showUser(user_id))
        dispatch(showUserInfo(user_id))
        props.navigation.navigate("Profile", {id: user_id})
    }

    console.log(state.eventsAndUsers.showEventInfo)

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            {state.eventsAndUsers.showEventInfo.event ? 
            <EventInfoCard {...state.eventsAndUsers.showEventInfo} handleUserProfilePress={handleUserProfilePress}/>
            : null}
        </ScrollView>
        {/* <FlatList data={state.eventsAndUsers.showEventInfo} renderItem={({item}) => <EventInfoCard key={item.id} {...item} handlePress={handleUserProfilePress}/>}/> */}
        </SafeAreaView>
    );

};

export default EventPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
      }
  })