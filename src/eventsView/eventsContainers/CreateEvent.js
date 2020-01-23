import React, { Fragment, useState, useEffect } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackActions } from 'react-navigation';
import moment from 'moment';
import { updateEventTime } from '../../store/actions/events'
import { Form, Field } from 'react-native-validate-form';

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

  const eventInfo = {name: eventTitle, 
    creator_id: state.eventsAndUsers.currentUser, 
    start_time: state.eventsAndUsers.selectedEventTime,
    location: eventLocation,
    decription: moreInfo
  }
  
  const selectDateAndTime = () => {
      props.navigation.navigate("Date and Time", { selectedTime: eventTime })
  }

  useEffect(()=>{
    onChangeeventDay(`${moment(state.eventsAndUsers.selectedEventTime + 100000000).add(1, 'hours').calendar()}`)
    },[currentTime])

  useEffect(() => {
    let timeNow = Date.now()
    dispatch(updateEventTime(timeNow))
    }, []);

  const handleCreateEvent = () => {
    dispatch(createEvent(eventInfo))
    const popAction = StackActions.pop({
      n: 1,
    });

    props.navigation.dispatch(popAction);
    props.navigation.navigate("Event", {id: state.eventsAndUsers.showEventId})
  }

  const validations = () => {
    //if selected time is in the past alert that cannot create event
    //each textinput needs to have something filled out in order to create event
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <View> */}
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.container}>
            <TextInput style={styles.eventTitle} 
              onChangeText={text => onChangeeventTitle(text)}
              placeholder={eventTitle}/>
            <TouchableOpacity style={styles.timeinput} activeOpacity={0.6} onPress={selectDateAndTime}>
              <Text style={{fontSize: 20}} onChangeText={text => onChangeeventDay(text)}>{eventDay}</Text>
            </TouchableOpacity>
            <TextInput style={styles.locationinput} 
              onChangeText={text => onChangeeventLocation(text)}
              placeholder={eventLocation}/>
            <TextInput style={styles.textinput} 
            onChangeText={text => onChangemoreInfo(text)}
            placeholder={moreInfo}/>
            <Text style={styles.create} onPress={handleCreateEvent}>Create</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    height: "97%",
    width: "85%",
    alignSelf: "center"
  },
  eventTitle: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    flex: 2,
    marginVertical: 10,
    fontSize: 50,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    flex: 3,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 23,
    paddingHorizontal: 10
  },
  locationinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    flex: 1,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 23,
    paddingHorizontal: 10
  },
  timeinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    justifyContent: "center",
    flex: 2,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10
  },
  create: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#1188c3",
    fontFamily: 'Futura'
  }
})