import React, { Fragment, useState, useEffect } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { updateEventTime } from '../../store/actions/events'

import { createEvent } from '../../store/actions/events'
//moment().add(1, 'hours').calendar()
//moment().format("MMM D h a")

const CreateEvent = props => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const [eventTitle, onChangeeventTitle] = useState('Event Title');
  const [eventDay, onChangeeventDay] = useState();
  const [eventTime, onChangeeventTime] = useState(`${moment(state.eventsAndUsers.selectedEventTime)}`);
  const [eventLocation, onChangeeventLocation] = useState('Location');
  const [moreInfo, onChangemoreInfo] = useState('More Info');

  const currentTime = useSelector(state => state.eventsAndUsers.selectedEventTime)
  

  const selectDateAndTime = () => {
      props.navigation.navigate("Date and Time", { selectedTime: eventTime })
  }

  useEffect(()=>{
    onChangeeventDay(`${moment(state.eventsAndUsers.selectedEventTime).add(1, 'hours').calendar()}`)
    },[currentTime])

  useEffect(() => {
    let timeNow = Date.now()
    dispatch(updateEventTime(timeNow))
    }, []);

  return (
    <>
    <View style={styles.container} >
        <TextInput style={styles.eventTitle} 
          onChangeText={text => onChangeeventTitle(text)}
          placeholder={eventTitle}/>
        <TouchableOpacity style={styles.timeinput} activeOpacity={0.6} onPress={selectDateAndTime}>
          <Text onChangeText={text => onChangeeventDay(text)}>{eventDay} {eventTime}</Text>
        </TouchableOpacity>
        <TextInput style={styles.textinput} 
          onChangeText={text => onChangeeventLocation(text)}
          placeholder={eventLocation}/>
        <TextInput style={styles.textinput} 
        onChangeText={text => onChangemoreInfo(text)}
        placeholder={moreInfo}/>
        <Button title="Create" onPress={() => createEvent}/>
    </View>
    </>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "80%",
    alignSelf: "center"
  },
  eventTitle: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    flex: 2,
    marginVertical: 10,
    fontSize: 40
  },
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    flex: 1,
    marginVertical: 5
  },
  timeinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    justifyContent: "center",
    flex: 1
  }
})