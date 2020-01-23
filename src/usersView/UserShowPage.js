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
    return state.eventsAndUsers.showUserInfo.events
    //selected user's events not current user
  }

  const handlePress = (event_id) => {
    // props.navigation.navigate("Event", {id: event_id})
  }

  const noEvents = () => {
    if (state.eventsAndUsers.showUserInfo.events) {
      if (!state.eventsAndUsers.showUserInfo.events[0]) {
        return "Sorry, you haven't created any events yet"
      }
    }
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
        <Text style={styles.events}>Upcoming Events</Text>
        <Text style={styles.noEvents}>
          {noEvents()}
        </Text>
        <View style={{marginBottom: 40}} ><FlatList data={data()} renderItem={({item}) => <EventCard key={item.id} {...item} view="profile" handlePress={handlePress}/>}/></View>
      </ScrollView>
    </View>
  );

};

export default UserShowPage;

const styles = StyleSheet.create({
  username: {
    fontSize: 40,
    alignSelf: "center", 
    marginVertical: 10,
    fontWeight: "bold",
   fontSize: 35,
   marginTop: 10,
   color: "#1188c3",
   fontFamily: 'Futura',
   shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  image: {
    width: 330, 
    height: 330,
    marginBottom: 20,
    borderRadius: 30, 
    alignSelf: "center"
  },
  description: {
    alignSelf: "center",
    fontSize: 16,
    marginBottom: 30,
    paddingHorizontal: 30,
    textAlign: "justify"
  },
  events: {
    fontWeight: "bold",
    fontSize: 30,
    // marginVertical: 1,
    color: "#1188c3",
    paddingLeft: 10
  },
  noEvents: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: 20
  }
});