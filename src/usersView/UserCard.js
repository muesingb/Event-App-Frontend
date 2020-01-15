//renders userinfo for FriendsPage, FriendRequests, and UserShowPage
import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UserCard = props => {
  
  const handlePress = (props) => {
    props.handlePress(props.id)
  }
  
  return (
    <>
      <Text style={styles.users} onPress={() => handlePress(props)}>{props.name}</Text>
    </>
  );

};

export default UserCard;

const styles = StyleSheet.create({
  users: {
    flex: 1
  }
});