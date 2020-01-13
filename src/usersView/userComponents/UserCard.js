//renders userinfo for FriendsPage, FriendRequests, and UserShowPage
import React from 'react';
import { Text, View } from 'react-native';

const UserCard = props => {
  
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );

};

export default UserCard;