//will render either showpage of current user or another user using userCard
import React, { useState, useEffect, Fragment } from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { showUserInfo } from '../store/actions/users'
import EventCard from '../calendarView/EventCard'

import UserCard from './UserCard'

const UserShowPage = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showUserInfo(state.eventsAndUsers.showUser))
    }, []);

  const data = () => {
    // return (state.eventsAndUsers.allEventsView === "all" && state.eventsAndUsers.allEvents) ? 
    // state.eventsAndUsers.allEvents
    //   : state.eventsAndUsers.currentUserInfo.created_events
    return state.eventsAndUsers.showUserInfo.events
    //selected user's events not current user
  }

  const handlePress = (event_id) => {
    props.navigation.navigate("Event", {id: event_id})
  }

  return (
    <View>
      <ScrollView>
        <Text style={styles.username}>{state.eventsAndUsers.showUserInfo.user ? state.eventsAndUsers.showUserInfo.user.name : null}</Text>
        <Image
              style={styles.image}
              source={{uri: (state.eventsAndUsers.showUserInfo.user ? state.eventsAndUsers.showUserInfo.user.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1TXk3w-1adamGsmWCmUVm99AxqLMMdAePcMjCxeunMy-f3d-9Q&s')}}
            />
        <Text style={styles.description}>{state.eventsAndUsers.showUserInfo.user ? state.eventsAndUsers.showUserInfo.user.description.replace(/[^a-zA-Z ]/g, "") : null}</Text>
        <Text style={styles.events}>Events:</Text>
        <FlatList data={data()} renderItem={({item}) => <EventCard key={item.id} {...item} view="profile" handlePress={handlePress}/>}/>
      </ScrollView>
    </View>
  );

};

export default UserShowPage;

const styles = StyleSheet.create({
  username: {
    fontSize: 40,
    alignSelf: "center", 
    marginVertical: 10
  },
  image: {
    width: 300, 
    height: 300,
    marginBottom: 20,
    borderRadius: 5, 
    alignSelf: "center"
  },
  description: {
    alignSelf: "center",
    fontSize: 13
  },
  events: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10
  }
});