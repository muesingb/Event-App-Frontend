//renders card for a specific event
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { attendEvent, unattendEvent } from '../store/actions/users'

const EventCard = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const currentUserInfo = useSelector(state => state.eventsAndUsers.currentUserInfo)
  const [userAttendance, toggleUserAttendance] = useState();

  const attendingEvent = () => {
    toggleUserAttendance(true)
    dispatch(attendEvent({event_id: props.id, attendee_id: state.eventsAndUsers.currentUser}))
  }

  const unattendingEvent = () => {
    toggleUserAttendance(false)
    if (currentUserInfo.created_events.map(event => event.id).includes(props.id)) {
      console.log("current user created this event")
    } else {
      dispatch(unattendEvent({event_id: props.id, attendee_id: state.eventsAndUsers.currentUser}))
    }
  }

  console.log(currentUserInfo.created_events)

  useEffect(()=>{
    currentUserInfo.events 
    ? toggleUserAttendance(currentUserInfo.events.map(event => event.id).includes(props.id))
    : null
  },[currentUserInfo])

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() => props.handlePress(props.id)}>
      <View style={styles.buttonView}>
        <View>
          <Text style={styles.day}>{moment(props.start_time).format('dddd')}</Text>
          <Text style={styles.date}>{moment(props.start_time).format("MMM D")}</Text>
          <Text style={styles.time}>{moment(props.start_time).format('LT')}</Text>
          <Text>{props.name}</Text>
        </View>
        <Button title={userAttendance ? "Going" : "Go?"} onPress={userAttendance ? unattendingEvent : attendingEvent}/>
      </View>
    </TouchableOpacity>
  );

};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    width: "95%",
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#d6d7da'
  },
  day: {
      fontSize: 15,
      color: "gray"
  },
  date: {
    fontSize: 30,
    fontWeight: "bold"
  },
  time: {
    fontSize: 10,
    color: "red"
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})