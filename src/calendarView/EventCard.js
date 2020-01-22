//renders card for a specific event
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { attendEvent, unattendEvent } from '../store/actions/users'
import { Portal } from 'react-native-paper';

const EventCard = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const currentUserInfo = useSelector(state => state.eventsAndUsers.currentUserInfo.events)
  const currentUserInfoCreatedEvents = useSelector(state => state.eventsAndUsers.currentUserInfo.created_events)
  const [userAttendance, toggleUserAttendance] = useState();
  const [going, changeGoing] = useState()

  useEffect(()=>{
    userAttendance ? changeGoing("Going") : changeGoing("Go?")
  },[userAttendance])

  useEffect(()=>{
    currentUserInfo
    ? toggleUserAttendance(currentUserInfo.map(event => event.id).includes(props.id))
    : null
  },[currentUserInfo])

  const attendingEvent = () => {
    dispatch(attendEvent({event_id: props.id, attendee_id: state.eventsAndUsers.currentUser}))
    changeGoing("Going")
  }

  const unattendingEvent = () => {
    if (currentUserInfoCreatedEvents.map(event => event.id).includes(props.id)) {
      alert("Cannot unattend an event you created")
    } else {
      changeGoing("Go?")
      dispatch(unattendEvent({event_id: props.id, attendee_id: state.eventsAndUsers.currentUser}))
    }
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() => props.handlePress(props)}>
      <View style={styles.buttonView}>
        <View>
          <Text style={styles.day}>{moment(props.start_time).format('dddd')}</Text>
          <Text style={styles.date}>{moment(props.start_time).format("MMM D")}</Text>
          <Text style={styles.time}>{moment(props.start_time).format('LT')}</Text>
          <Text>{props.name}</Text>
        </View>
        { going && !props.view ? <Button title={going} onPress={userAttendance ? unattendingEvent : attendingEvent}/> : null}
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