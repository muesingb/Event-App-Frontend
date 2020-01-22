import React, { Fragment, useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../../usersView/UserCard'
import moment from 'moment';
import { attendEvent, unattendEvent } from '../../store/actions/users'
import { Icon } from 'react-native-elements'

const EventInfoCard = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const currentUserInfo = useSelector(state => state.eventsAndUsers.currentUserInfo.events)
    const currentUserInfoCreatedEvents = useSelector(state => state.eventsAndUsers.currentUserInfo.created_events)
    const eventAttendees = useSelector(state => state.eventsAndUsers.showEventInfo.attendees)
    const [userAttendance, toggleUserAttendance] = useState();
    const [attendees, onChangeAttendees] = useState(props.attendees);
    const [going, changeGoing] = useState()

    useEffect(()=>{
        userAttendance ? changeGoing("Going") : changeGoing("Go?")
    },[userAttendance])

    useEffect(()=> {
        currentUserInfo
        ? toggleUserAttendance(currentUserInfo.map(event => event.id).includes(props.event.id))
        : null
    },[currentUserInfo])

    useEffect(()=>{
        onChangeAttendees(eventAttendees)
    },[eventAttendees])

    const attendingEvent = () => {
        dispatch(attendEvent({event_id: props.event.id, attendee_id: state.eventsAndUsers.currentUser}))
        changeGoing("Going")
    }

    const unattendingEvent = () => {
        if (currentUserInfoCreatedEvents.map(event => event.id).includes(props.event.id)) {
            alert("Cannot unattend an event you created")
          } else {
            changeGoing("Go?")
            dispatch(unattendEvent({event_id: props.event.id, attendee_id: state.eventsAndUsers.currentUser}))
        }
    }

    return (
        <>
            <Text style={styles.time} >{moment(props.event.start_time).add(1, 'hours').calendar()}
                {props.event.end_time? "-" + moment(props.event.end_time).add(1, 'hours').calendar() : null}
            </Text>
            <Text style={styles.eventName}>{props.event.name}</Text>
            <Text style={styles.location}>{props.event.location}</Text>
            <View style={styles.userAttendance}>
                { going ? <Button title={going} onPress={userAttendance ? unattendingEvent : attendingEvent}/> : null}
            </View>
            <View style={styles.attendeesContainer}>
                <Text style={{marginBottom: 10}}>
                    Event by:
                </Text>
                <Text>
                    <UserCard key={props.creator.id} view="event page" {...props.creator} handlePress={props.handleUserProfilePress}/>
                </Text>
            </View>
            <Text style={{fontWeight: "bold", fontSize: 30}}>Responses</Text>
            <View style={styles.going}>
                <Text>Going: {props.attendees.length}</Text>
            </View>
            <Text style={styles.attendees}>{attendees.map(attendee => <UserCard key={attendee.id} {...attendee} handlePress={props.handleUserProfilePress}/>)} are going</Text>
            <Text style={styles.description}>{props.event.description.replace(/[^a-zA-Z ]/g, "")}</Text>
        </>
    );
};

export default EventInfoCard;

const styles = StyleSheet.create({
    time: {
      fontSize: 20,
      color: "red"
    },
    description: {
        marginTop: 40
    },
    attendees: {
        marginTop: 40
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
        height: 70,
        // width: "80%",
        marginVertical: 10,
        borderRadius: 100
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
    },
    going: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderWidth: 1,
        height: "8%",
        width: "80%",
        marginVertical: 10,
        borderRadius: 10
    }
  });