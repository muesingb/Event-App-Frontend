//renders each button for NavBar and determines which button is the current screen
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRenderedEvents } from '../store/actions/events'
import { showUser } from '../store/actions/users'
import { updateTab } from '../store/actions/tab'

const NavButton = props => {

  const [link, setLink] = useState("")
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
    const handlePress = () => {
        switch(props.name) {
          case "Home":
            dispatch(toggleRenderedEvents("all"))
            dispatch(updateTab("Home"))
            break;
          case "Profile":
            dispatch(showUser(state.eventsAndUsers.currentUser))
            dispatch(updateTab("Home"))
            props.navigation.navigate("Profile", {id: state.eventsAndUsers.currentUser})
            break;
          case "Create Event":
            dispatch(updateTab("Home"))
            props.navigation.navigate("Create Event")
            break;
          case "Your Events":
            dispatch(updateTab("Your Events"))
            dispatch(toggleRenderedEvents("user"))
            break;
        }
    }

  return (
    <View style={props.name === state.eventsAndUsers.tab ? styles.selectedButton : styles.button} >
      <Text style={props.name === state.eventsAndUsers.tab ? styles.selectedButtonText : styles.buttonText} onPress={handlePress}>{props.name}</Text>
      {/* <Button title={props.name} onPress={handlePress}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        width: "100%",
        borderTopWidth: 1
    },
    buttonText: {
      alignSelf: "center", 
      fontSize: 15, 
      fontFamily: 'Futura', 
      // fontWeight: "bold"
    },
    selectedButtonText: {
      alignSelf: "center", 
      fontSize: 15, 
      fontFamily: 'Futura', 
      fontWeight: "bold",
      color: "#1188c3"
    },
    selectedButton: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        width: "100%",
        backgroundColor: "#d3d3d3",
        opacity: 0.7,
        borderTopWidth: 1
    }
})

export default NavButton;