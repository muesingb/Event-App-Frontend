//renders each button for NavBar and determines which button is the current screen
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRenderedEvents } from '../store/actions/events'
import { showUser } from '../store/actions/users'

const NavButton = props => {

  const [link, setLink] = useState("")
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
    const handlePress = () => {
        switch(props.name) {
          case "Home":
            dispatch(toggleRenderedEvents("all"))
            break;
          case "Profile":
            dispatch(showUser(state.eventsAndUsers.currentUser))
            props.navigation.navigate("Profile", {id: state.eventsAndUsers.currentUser})
            break;
          case "Create Event":
            props.navigation.navigate("Create Event")
            break;
          case "Your Events":
            dispatch(toggleRenderedEvents("user"))
            break;
        }
    }

  return (
    <View style={props.name === "Home" ? styles.selectedButton : styles.button} >
      <Text onPress={handlePress}>{props.name}</Text>
      {/* <Button title={props.name} onPress={handlePress}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        width: "100%"
    },
    selectedButton: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        width: "100%",
        backgroundColor: "gray"
    }
})

export default NavButton;