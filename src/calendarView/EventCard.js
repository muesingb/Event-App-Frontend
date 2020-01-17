//renders card for a specific event
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

const EventCard = (props) => {

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() => props.handlePress(props.id)}>
        <Text style={styles.day}>{moment(props.start_time).format('dddd')}</Text>
        <Text style={styles.date}>{moment(props.start_time).format("MMM D")}</Text>
        <Text style={styles.time}>{moment(props.start_time).format('LT')}</Text>
        <Text>{props.name}</Text>
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
  }
})