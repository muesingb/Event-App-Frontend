//renders userinfo for FriendsPage, FriendRequests, and UserShowPage
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UserCard = props => {
  
  const handlePress = (props) => {
    props.handlePress(props.id)
  }

  return (
    <View style={styles.users} >
      <Text onPress={() => handlePress(props)}>{props.name}</Text>
    </View>
  );

};

export default UserCard;

const styles = StyleSheet.create({
  users: {
    flex: 1
  }
});