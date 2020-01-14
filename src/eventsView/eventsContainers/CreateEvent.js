import React, { Fragment } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import moment from 'moment';
//moment().add(1, 'hours').calendar()
//moment().format("MMM D h a")

const CreateEvent = props => {

  const [eventTitle, onChangeeventTitle] = React.useState('Event Title');
  const [eventTime, onChangeeventTime] = React.useState(`${moment().add(1, 'hours').calendar()}`);
  const [eventLocation, onChangeeventLocation] = React.useState('Location');
  const [moreInfo, onChangemoreInfo] = React.useState('More Info');

  const selectDateAndTime = () => {
      props.navigation.navigate("Date and Time")
  }

  return (
    <>
    <View style={styles.container} >
        <TextInput style={styles.eventTitle} 
          onChangeText={text => onChangeeventTitle(text)}
          placeholder={eventTitle}/>
        <TouchableOpacity style={styles.timeinput} activeOpacity={0.6} onPress={selectDateAndTime}>
          <Text onChangeText={text => onChangeeventTime(text)}>{eventTime}</Text>
        </TouchableOpacity>
        <TextInput style={styles.textinput} 
          onChangeText={text => onChangeeventLocation(text)}
          placeholder={eventLocation}/>
        <TextInput style={styles.textinput} 
        onChangeText={text => onChangemoreInfo(text)}
        placeholder={moreInfo}/>
        <Button title="Create" onPress={() => console.log("create event!!")}/>
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