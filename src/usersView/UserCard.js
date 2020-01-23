//renders userinfo for FriendsPage, FriendRequests, and UserShowPage
import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserCard = props => {
  
  const handlePress = (props) => {
    props.handlePress(props.id)
  }

  console.log(props.view)
  const styling = () => {
    if (props.view === "login" ) {
      return styles.container
    } else if (props.view === "event page") {
      return {alignItems: "center"}
    } else {
      return styles.showPageContainer
    }
  }

  const usernameStyling = () => {
    return props.view === "login" ? styles.loginUsers : styles.users
  }
  
  return (
    <>
      <TouchableOpacity style={styling()} onPress={() => handlePress(props)} >
        <Image
                style={styles.image}
                source={{uri: props.image}}
              />
        <Text style={usernameStyling()} onPress={() => handlePress(props)}>
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
    color: "#1188c3"
  },
  loginUsers: {
    // flex: 1,
    color: "white",
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "center"
  },
  image: {
    width: 60, 
    height: 60,
    marginBottom: 5,
    borderRadius: 60,
    borderWidth: 1
  },
  container: {
    marginVertical: 5,
    alignItems: "center",
    // backgroundColor: "white",
    width: "40%",
    alignSelf: "center",
    borderRadius: 5,
    // borderWidth: 2,
    paddingVertical: 10,
    marginTop: 12
  },
  showPageContainer: {
    // marginHorizontal: 5,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "20%"
  }
});