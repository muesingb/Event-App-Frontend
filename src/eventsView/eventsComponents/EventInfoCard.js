import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import UserCard from '../../usersView/UserCard'

import moment from 'moment';

const EventInfoCard = (props) => {

    return (
        <>
            <Text style={styles.time} >{moment(props.event.start_time).add(1, 'hours').calendar()}
                {props.event.end_time? "-" + moment(props.event.end_time).add(1, 'hours').calendar() : null}
            </Text>
            <Text style={styles.eventName}>{props.event.name}</Text>
            <View style={styles.attendeesContainer}>
                <Text>
                    Event by:
                    <UserCard key={props.creator.id} {...props.creator} handlePress={props.handleUserProfilePress}/>
                </Text>
            </View>
            <View style={styles.attendeesContainer}>
                <Text>Going: {props.attendees.length}</Text>
            </View>
            <View style={styles.attendeesContainer}>
                <Text>Attendees</Text>
                <Text>{props.attendees.map(attendee => <UserCard key={attendee.id} {...attendee} handlePress={props.handleUserProfilePress}/>)}</Text>
            </View>
        </>
    );

};

export default EventInfoCard;

const styles = StyleSheet.create({
    time: {
      fontSize: 20,
      color: "red"
    },
    eventName: {
        fontSize: 30,
        fontWeight: "bold"
    },
    attendeesContainer: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderWidth: 1,
        height: "20%",
        width: "80%",
        marginVertical: 10,
        borderRadius: 10
    }
  });