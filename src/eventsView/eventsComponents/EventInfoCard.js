import React, { Fragment, useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../../usersView/UserCard'
import moment from 'moment';
import { attendEvent, unattendEvent } from '../../store/actions/users'

const EventInfoCard = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const currentUserInfo = useSelector(state => state.eventsAndUsers.currentUserInfo)
    const [userAttendance, toggleUserAttendance] = useState();
    const [attendees, onChangeAttendees] = useState(props.attendees);

    const attendingEvent = () => {
        toggleUserAttendance(true)
        dispatch(attendEvent({event_id: props.id, attendee_id: state.eventsAndUsers.currentUser}))
    }

    const unattendingEvent = () => {
        toggleUserAttendance(false)
        dispatch(unattendEvent({event_id: props.id, attendee_id: state.eventsAndUsers.currentUser}))
    }

    useEffect(()=>{
        currentUserInfo.events 
        ? toggleUserAttendance(currentUserInfo.events.map(event => event.id).includes(props.event.id))
        : null
    },[currentUserInfo])

    const handleButtonPress = () => {
        toggleUserAttendance(true)
        dispatch(attendEvent({event_id: state.eventsAndUsers.showEventInfo.event.id, attendee_id: state.eventsAndUsers.currentUser}))
    }

    return (
        <>
            <Text style={styles.time} >{moment(props.event.start_time).add(1, 'hours').calendar()}
                {props.event.end_time? "-" + moment(props.event.end_time).add(1, 'hours').calendar() : null}
            </Text>
            <Text style={styles.eventName}>{props.event.name}</Text>
            <Text style={styles.location}>{props.event.location}</Text>
            <View style={styles.userAttendance}>
                <Button title={userAttendance ? "Going" : "Go?"} onPress={userAttendance ? unattendingEvent : attendingEvent}/>
            </View>
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
                <Text>{attendees.map(attendee => <UserCard key={attendee.id} {...attendee} handlePress={props.handleUserProfilePress}/>)}</Text>
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
    location: {
        fontSize: 20,
        color: "gray"
    },
    userAttendance: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderWidth: 1,
        // height: "20%",
        width: "80%",
        marginVertical: 10,
        borderRadius: 10
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