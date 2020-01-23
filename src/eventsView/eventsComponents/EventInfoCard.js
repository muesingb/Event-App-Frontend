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

    const iconStyle = () => {
        return going === "Going" ? <Icon reverse raised name='ios-checkmark' size="26" type='ionicon' color={'#0d8640'} onPress={userAttendance ? unattendingEvent : attendingEvent}/> : <Icon reverse raised name='ios-checkmark' size="26" type='ionicon' color={'#db101d'} onPress={userAttendance ? unattendingEvent : attendingEvent}/>
    }

    return (
        <>
            <Text style={styles.time} >{moment(props.event.start_time).add(1, 'hours').calendar()}
                {props.event.end_time? "-" + moment(props.event.end_time).add(1, 'hours').calendar() : null}
            </Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10}}>
                <View>
                    <Text style={styles.eventName}>{props.event.name}</Text>
                    <Text style={styles.location}>{props.event.location}</Text>
                </View>
                
                { iconStyle()}
            </View>
            {/* <View style={styles.userAttendance}> */}
                {/* { going ? <Button title={going} onPress={userAttendance ? unattendingEvent : attendingEvent}/> : null} */}
                
            {/* </View> */}
            <View style={styles.attendeesContainer}>
                <View>
                <Text style={{marginBottom: 10, fontSize: 18}}>
                    Event by:
                </Text>
                <View>
                    <UserCard key={props.creator.id} view="event page" {...props.creator} handlePress={props.handleUserProfilePress}/>
                </View>
                </View>
            </View>
            <Text style={{fontWeight: "bold", fontSize: 28,
                marginTop: 5,
                marginBottom: 10,
                fontWeight: "bold",
                color: "#1188c3",
                fontFamily: 'Futura',
                marginHorizontal: 10}}>Responses</Text>
            <View style={styles.going}>
                <Text style={styles.number}>Going: <Text style={{fontWeight: "bold", color: "#1188c3", fontSize: 20}}>{props.attendees.length}</Text></Text>
            </View>
            <View style={styles.attendees}>{attendees.map(attendee => <UserCard key={attendee.id} {...attendee} handlePress={props.handleUserProfilePress}/>)}</View>
            <Text style={{fontSize: 19, marginHorizontal: 20}}>are going</Text>
            <Text style={styles.description}>{props.event.description ? props.event.description.replace(/[^a-zA-Z ]/g, "") : null}</Text>
        </>
    );
};

export default EventInfoCard;

const styles = StyleSheet.create({
    time: {
      fontSize: 14,
      color: "red",
      marginHorizontal: 10,
      marginTop: 5
    },
    description: {
        marginTop: 25,
        textAlign: "justify",
        paddingHorizontal: 20,
        fontSize: 15
    },
    attendees: {
        marginTop: 40,
        marginBottom: 5,
        marginHorizontal: 12,
        fontSize: 14,
        // borderWidth: 1,
        flexDirection: "row"
    },
    eventName: {
        fontSize: 28,
        fontWeight: "bold",
        // color: "#1188c3",
        fontFamily: 'Futura',
    },
    location: {
        fontSize: 16,
        color: "gray",
        marginTop: 5
    },
    userAttendance: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderWidth: 1,
        height: 70,
        // width: "80%",
        // marginVertical: 10,
        borderRadius: 100
    },
    attendeesContainer: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderWidth: 1,
        height: "30%",
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
        // marginVertical: 10,
        borderRadius: 10
    },
    number: {
        fontSize: 18,
        justifyContent: "center",
        alignContent: "center"
    }
  });