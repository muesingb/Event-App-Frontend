//renders each button for NavBar and determines which button is the current screen
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const NavButton = props => {

  const [link, setLink] = useState("")
  
    const handlePress = () => {
        switch(props.name) {
          case "Home":
            props.navigation.navigate("Home")
            break;
          case "Profile":
            // props.navigation.navigate("Profile")
            //needs user_id
            break;
          case "Create Event":
            props.navigation.navigate("Create Event")
            break;
          case "Your Events":
            // props.navigation.navigate("Your Events")
            break;
        }
        // props.navigation.navigate("Create Event")
    }

    console.log(props)
  return (
    <View style={styles.button} >
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
    }
})

export default NavButton;