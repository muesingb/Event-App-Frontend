//renders each button for NavBar and determines which button is the current screen
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const NavButton = props => {
  
    const handlePress = () => {
        console.log("hi")
        props.navigation.navigate("CreateEvent")
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