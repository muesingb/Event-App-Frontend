//renders userinfo for FriendsPage, FriendRequests, and UserShowPage
import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserCard = props => {
  
  const handlePress = (props) => {
    props.handlePress(props.id)
  }

  console.log(props)
  const styling = () => {
    return props.view === "login" ? styles.container : null
  }
  
  return (
    <>
      <TouchableOpacity style={styling()} onPress={() => handlePress(props)} >
      <Image
              style={styles.image}
              source={{uri: props.image}}
            />
      <Text style={styles.users} onPress={() => handlePress(props)}>
        {props.name}
      </Text>
      </TouchableOpacity>
    </>
  );

};

export default UserCard;

const styles = StyleSheet.create({
  users: {
    // flex: 1,
    color: "red",
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    width: 60, 
    height: 60,
    marginBottom: 5,
    borderRadius: 60
  },
  container: {
    marginVertical: 22,
    alignItems: "center"
  }
});